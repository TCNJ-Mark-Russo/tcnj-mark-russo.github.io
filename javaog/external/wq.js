// wq.js

/**
 * Choose a random element from array
 */
function choose(arr) {
    return arr[Math.floor((Math.random()*arr.length))];
}
/**
 * Shuffle array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}
/**
 * Generate a random int in range [min, max], both inclusive
 */
function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * A simple rotation cipher.
 * Rotates ASCII values with character codes in [32, 126].
 * May be derotated by rotating again with r = (95-r).
 * @param {str} an ASCII string to obfuscate
 * @param {r} a rotation amount in [0, 94]
 */
function rotr(str, r) {
    let n = 95; // = 126 - 32 + 1;
    let codes = str.split('').map(c => 32 + (((c.charCodeAt() - 32) + r) % n));
    return codes.map( c => String.fromCharCode(c) ).join('');
}

/**
 * Multiple Dropdowns
 * id      : Unique question identifier (like Q01)
 * title   : Title of the question
 * prompt  : An array of HTML lines containing labels to be substituted with dropdowns
 * options : a map from label to array of options to choose from
 * solution: a map from label to correct solution
 */
class QMultipleDropdowns {

    // Constructor
    // q is an XML document with top element <question> and type="multipledropdowns"
    constructor(q) {
        this.qid        = q.id      || "Q##";
        this.title      = q.title   || 'Multiple Dropdowns';
        this.prompt     = q.prompt  || "Please choose an answer from all dropdowns";
        this.options    = new Map(Object.entries(q.options));
        this.solution   = new Map(Object.entries(q.solution));

        // Load template XHTML
        let parser = new DOMParser();
        this.qdoc = parser.parseFromString(`
        <hr/>
        <div id="${this.qid}">
        <div id="title"  style="font-weight:bold;">${this.qid}: ${this.title}</div>
        <div id="prompt" style="padding:5px;">${this.prompt.join('\n')}</div>

        <div style="padding:5px;">
        <table><tr>
        <td id="buttons" style="vertical-align:top; padding:10px; min-width:200px;">
            <button id="bCheck">Check</button> 
            <button id="bReset">Reset</button> 
            <!-- button id="bResp" >Response</button -->
        </td>
        <td id="soln" style="width:100%; vertical-align:top; padding:10px; border-radius: 5px;"></td>
        </tr></table>
        </div>
        </div>`, "text/html");

        // Get list of question ids
        let ids = [...this.solution.keys()];
        // let ids = new Set([...solns].map( n => n.id));

        // Render all options
        for (const id of ids) {
            let opts = this.options.get(id);                                        // Options for this id
            shuffle(opts);                                                          // randomly shuffle options
            let html    = `<select id="${id}"><option value=""></option>`           // build select
                        + opts.map(o => `<option value="${o}">${o}</option>`) 
                        + "</select>";
            let el = this.qdoc.querySelector(`div#${this.qid} *[data-qans=${id}]`); // element to contain options
            if(el) { el.innerHTML = html;}                                          // substitute html
        }

        // Append substituted question template into html document
        document.body.appendChild(this.qdoc.documentElement);

        // Assign event handlers
        document.querySelector(`div#${this.qid} #bReset`).addEventListener("click", this.onReset.bind(this) );
        document.querySelector(`div#${this.qid} #bCheck`).addEventListener("click", this.onCheck.bind(this) );
        //document.querySelector(`div#${this.qid} #bResp` ).addEventListener("click", this.getResponse.bind(this) );
    }

    // Method to handle click event by comparing solution set options to entered values.
    onCheck(ev) {
        // Assume all input elements are used for answers
        let sels = document.body.querySelectorAll(`div#${this.qid} select`);

        // For all selects, build map of input ids with their values
        let ans = new Map( [...sels].map( n => [n.id, n.value] ) );
        
        // Output element
        let tdout = document.body.querySelector(`div#${this.qid} td#soln`);

        // Check for any unanswered questions
        for (const [key, val] of ans) {
            if (val.trim().length == 0) {
                tdout.style['background-color'] = "lightyellow";
                tdout.innerHTML = "❓Please select an answer from all dropdowns.";
                return;
            }
        }

        // Compare ans to see if one matches
        // Assumes soln object has keys that match ans keys
        let matches = true;             // Assume a match and check for a mismatch
        for (const [key, val] of ans) {
            if (String(this.solution.get(key)).trim() !== String(val)) {
                matches = false;
                break;
            }
        }
        
        // Indicate result
        if (matches) {
            tdout.style['background-color'] = "lightgreen";
            tdout.innerHTML = "✔️Correct";
        } else {
            tdout.style['background-color'] = "lightpink";
            tdout.innerHTML = "✖️Please try again";
        }
    }

    // Reset the problem
    onReset(ev) {
        // Reset all selects
        document.body.querySelectorAll(`div#${this.qid} select`).forEach( sel => sel.value = '');

        // Output element
        let tdout = document.body.querySelector(`div#${this.qid} td#soln`);
        tdout.style['background-color'] = "";
        tdout.innerHTML = "";
    }

    // Get the current response as assigned
    getResponse(ev) {
        // Assume all input elements are used for answers
        let sels = document.body.querySelectorAll(`div#${this.qid} select`);

        // Functional method for building an object
        // 1. Spread sels NodeList into Array of Node objects
        // 2. map Nodes into [id, value] Array pairs
        // 3. Transform list of pairs into object
        let map  = new Map([...sels].map( node => [node.id, node.value] ));
        let json = JSON.stringify(Object.fromEntries(map));
        console.log(json); 
        return map;
    }
}

/**
 * QFillInBlanks
 * id      : Unique question identifier (like Q01)
 * title   : Title of the question
 * prompt  : An array of HTML lines containing labels to be substituted with textboxes
 * solution: a map from label to correct solution
 */
class QFillInBlanks {
    constructor(q) {
        this.qid        = q.id          || "Q##";
        this.title      = q.title       || "Fill in the Blanks";
        this.prompt     = q.prompt      || ["<p>Enter the proper value in all text boxes</p>"];
        this.solution   = new Map(Object.entries(q.solution));

        // Load template XHTML
        let parser = new DOMParser();
        this.qdoc = parser.parseFromString(`
        <hr/>
        <div id="${this.qid}">
        <div id="title"  style="font-weight:bold;">${this.qid}: ${this.title}</div>
        <div id="prompt" style="padding:5px;"></div>

        <div style="padding:5px;">
        <table><tr>
        <td id="buttons" style="vertical-align:top; padding:10px; min-width:200px;">
            <button id="bCheck">Check</button> 
            <button id="bReset">Reset</button> 
            <!-- button id="bResp" >Response</button -->
        </td>
        <td id="soln" style="width:100%; vertical-align:top; padding:10px; border-radius: 5px;"></td>
        </tr></table>
        </div>
        </div>`, "text/html");

        // Hydrate initial prompt lines into qdoc DOM
        this.qdoc.getElementById('prompt').innerHTML = this.prompt.join("\n");

        // Select and highlight all code nodes in prompt
        let codeNodes = [...this.qdoc.querySelectorAll('#prompt code')];
        codeNodes.forEach( node => hljs.highlightElement(node) );

        // Get list of question ids
        let ids = [...this.solution.keys()];

        // Generate input elements and text-substitute into highlighted prompt
        // This requires the re-serialization of the prompt into text and then rehydration into DOM,
        let promptNode = this.qdoc.getElementById('prompt');
        let promptHTML = promptNode.innerHTML;                      // Serialize
        for (const id of ids) {                                     // Replace with inputs
            let inp = `<input type="text" id="${id}"></input>`;
            promptHTML = promptHTML.replace(id, inp);
        }
        promptNode.innerHTML = promptHTML;                          // Rehydrate

        // Append substituted question template into html document
        document.body.appendChild(this.qdoc.documentElement);

        // Assign event handlers
        document.querySelector(`div#${this.qid} #bReset`).addEventListener("click", this.onReset.bind(this) );
        document.querySelector(`div#${this.qid} #bCheck`).addEventListener("click", this.onCheck.bind(this) );
        //document.querySelector(`div#${this.qid} #bResp` ).addEventListener("click", this.getResponse.bind(this) );
    }
    // Method to handle click event by comparing solution set options to entered values.
    onCheck(ev) {
        // Assume all input elements are used for answers
        let inps = document.body.querySelectorAll(`div#${this.qid} input`);

        // For all inputs, build map of input ids with their values
        let ans = new Map( [...inps].map( n => [n.id, n.value] ) );
        
        // Output element
        let tdout = document.body.querySelector(`div#${this.qid} td#soln`);

        // Check for any unanswered questions
        for (const [key, val] of ans) {
            if (val.trim().length == 0) {
                tdout.style['background-color'] = "lightyellow";
                tdout.innerHTML = "❓Please answer all questions.";
                return;
            }
        }

        // Compare ans to see if one matches
        // Assumes soln object has keys that match ans keys
        let matches = true;             // Assume a match and check for a mismatch
        for (const [key, val] of ans) {
            if (String(this.solution.get(key)).trim().toLocaleLowerCase() !== String(val).toLowerCase()) {
                matches = false;
                break;
            }
        }
        
        // Indicate result
        if (matches) {
            tdout.style['background-color'] = "lightgreen";
            tdout.innerHTML = "✔️Correct";
        } else {
            tdout.style['background-color'] = "lightpink";
            tdout.innerHTML = "✖️Please try again";
        }
    }

    // Reset the problem
    onReset(ev) {
        // Reset all selects
        document.body.querySelectorAll(`div#${this.qid} input`).forEach( inp => inp.value = '');

        // Output element
        let tdout = document.body.querySelector(`div#${this.qid} td#soln`);
        tdout.style['background-color'] = "";
        tdout.innerHTML = "";
    }

    // Get the current response as assigned
    getResponse(ev) {
        // Assume all input elements are used for answers
        let inps = document.body.querySelectorAll(`div#${this.qid} input`);

        // Functional method for building an object
        // 1. Spread sels NodeList into Array of Node objects
        // 2. map Nodes into [id, value] Array pairs
        // 3. Transform list of pairs into object
        let map  = new Map([...inps].map( node => [node.id, node.value] ));
        let json = JSON.stringify(Object.fromEntries(map));
        console.log(json); 
        return map;
    }
}

/**
 * Drag-options from left col to right col in proper order.
 * Can be used as Parsons Problem
 */
class QOrderOptions {
    // Constructor
    // q is an XML document with top element <question> and type="multipledropdowns"
    constructor(q) {
        this.qid        = q.id          || "Q##";
        this.title      = q.title       || "Order the Options";
        this.prompt     = q.prompt      || ["<p>Please choose an option from all dropdowns</p>"];
        this.solution   = q.solution    || [];

        // Load template XHTML
        let parser = new DOMParser();
        this.qdoc  = parser.parseFromString(`
        <hr />
        <div id="${this.qid}">
        <div id="title" style="font-weight:bold;">${this.qid}: ${this.title}</div>
        <div id="prompt">${this.prompt.join('\n')}</div>

        <table><tr>
        <td id="dragcol" valign="top" style="min-width:250px; background-color:whitesmoke; border: solid gold 2px; border-radius: 5px;">
            <div class="container"></div>
        </td>
        <td id="dropcol" valign="top" style="min-width:250px; border: solid lightblue 2px; border-radius: 5px;">
            <div class="container"></div>
        </td>
        </tr><tr>
        <td id="buttons" style="vertical-align:top; padding:10px; min-width:200px;">
            <button id="bCheck">Check</button> 
            <button id="bReset">Reset</button> 
            <!-- button id="bResp">Response</button --></td>    
        <td id="soln" style="vertical-align:top; padding:10px; border-radius: 5px;"></td>
        </tr></table>
        </div>`, "text/html");

        // Copy solutions as options and randomly shuffle options
        let options = structuredClone(this.solution);
        shuffle(options);
        
        // Wrap dropcol elements in boxes and add to html array
        let html = [...options.map(op => `<div draggable="true" style="white-space: pre;" class="box source">${op}&nbsp;</div>`) ];

        // Build and inject problem nodes into a temporary holder HTMLElement
        let holder = document.createElement('div');     // temp element to hold HTML
        holder.innerHTML = html.join('\n');

        // Get container and add drag elements to drag col
        const cont = this.qdoc.getElementById(this.qid);    // Container is a div
        cont.querySelector("#dragcol > div.container").append(...holder.childNodes);

        // Highlight individual options as if they were lines of code
        const blocks = cont.querySelectorAll('div[draggable] code')
        blocks.forEach( block => hljs.highlightElement(block) );
        
        // Add dragging events to all draggable boxes
        let dragitems = cont.querySelectorAll('td#dragcol > div.container > div.box');
        dragitems.forEach( (item) => {
            item.addEventListener('dragstart', this.doDragStart.bind(this), false);
            item.addEventListener('dragenter', this.doDragEnter.bind(this), false);
            item.addEventListener('dragover',  this.doDragOver.bind(this),  false);
            item.addEventListener('dragleave', this.doDragLeave.bind(this), false);
            item.addEventListener('drop',      this.doDrop.bind(this),      false);
            item.addEventListener('dragend',   this.doDragEnd.bind(this),   false);
        });
        
        // Handle events on drag column
        const tddragcol = cont.querySelector('td#dragcol');
        tddragcol.addEventListener('dragover',  this.doDragOver.bind(this), false);
        tddragcol.addEventListener('drop',      this.doDrop.bind(this),     false);

        // Handle events on drop column
        const tddropcol = cont.querySelector('td#dropcol');
        tddropcol.addEventListener('dragover',  this.doDragOver.bind(this), false);
        tddropcol.addEventListener('drop',      this.doDrop.bind(this),     false);

        // Append substituted question template into html document
        document.body.appendChild(this.qdoc.documentElement);

        // Assign event handlers
        document.getElementById(`${this.qid}`).querySelector("#bReset").addEventListener("click", this.onReset.bind(this) );
        document.getElementById(`${this.qid}`).querySelector("#bCheck").addEventListener("click", this.onCheck.bind(this) );
        // document.getElementById(`${this.qid}`).querySelector("#bResp").addEventListener("click", this.getResponse.bind(this) );
    };

    // Inspired by https://web.dev/drag-and-drop/
    doDragStart(e) {
        //console.log(`doDragStart: ${e.currentTarget.innerText}`);
        this.dragSrcEl = e.currentTarget;
        this.dragSrcEl.style.opacity = '0.4';
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.dragSrcEl.innerText);
    }
    doDragOver(e) {
        //console.log(`doDragOver: ${e.currentTarget}`);
        if (e.preventDefault) { e.preventDefault(); }           // stops redirect.
        e.dataTransfer.dropEffect = 'move';
        let closest = e.currentTarget.closest('.box');
        if (closest) { closest.classList.add('over'); }
        return false;
    }
    doDragEnter(e) {
        //console.log(`doDragEnter: ${e.currentTarget.innerText}`);
        //e.currentTarget.closest('.box').classList.add('over');
        //this.dragSrcEl.classList.add('over');
    }
    doDragLeave(e) {
        //console.log(`doDragLeave: ${e.currentTarget.innerText}`);
        e.currentTarget.closest('.box').classList.remove('over');
        this.dragSrcEl.closest('.box').classList.remove('over');
    }
    doDrop(e) {
        //console.log(`doDrop: ${this.dragSrcEl.innerHTML} ${e.currentTarget.innerText}`);
        if (e.stopPropagation) { e.stopPropagation(); }     // stops redirect.

        // Decide what to do based on characteristics of drop target
        // If dropped back on same target...
        if (this.dragSrcEl === e.currentTarget) {
            // Do nothing

        // If dropped on a source...
        } else if (e.currentTarget.tagName === 'DIV' && e.currentTarget.classList.contains('source')) {

            // Insert before or after the drop target, regardless of which column it is in
            // e.currentTarget.parentNode.insertBefore(this.dragSrcEl, e.currentTarget);
            e.currentTarget.parentNode.insertBefore(this.dragSrcEl, e.currentTarget.nextSibling);

        // If dropped on dropcol TD
        } else if (e.currentTarget.tagName === 'TD' && e.currentTarget.id === 'dropcol') {
            // add to end of container
            e.currentTarget.querySelector('div.container').appendChild(this.dragSrcEl);

        // If dropped back on dragcol TD
        } else if (e.currentTarget.tagName === 'TD' && e.currentTarget.id === 'dragcol') {
            // add to bottom of container
            e.currentTarget.querySelector('div.container').appendChild(this.dragSrcEl);
        }
        // If drop on a source box (line of code) in dropcol
        // } else if (e.currentTarget.tagName === 'DIV' && e.currentTarget.classList.contains('target')) {
        //     // Currently contains to answers
        //     if (e.currentTarget.querySelectorAll('.source') && e.currentTarget.querySelectorAll('.source').length > 0) { 
        //         return;
        //     }
        //     // append child
        //     e.currentTarget.appendChild(this.dragSrcEl);

        return false;
    }
    doDragEnd(e) {
        //console.log(`doDragEnd: ${e.currentTarget.innerText}`);
        e.currentTarget.style.opacity = '1';
        let items = document.getElementById(`${this.qid}`).querySelectorAll('div.box');
        items.forEach(item => { item.classList.remove('over'); });
    }

    // Method to handle click event by comparing solution set options to entered values.
    onCheck(ev) {
        const soln = this.solution;
        const resp = this.getResponse();

        // Output element
        let tdout = document.getElementById(`${this.qid}`).querySelector('td#soln');

        let matches = true;

        if (soln.length !== resp.length) {
            tdout.style['background-color'] = "lightyellow";
            tdout.innerHTML = "❓Please drag all lines to the right.";
            return;
        } else {
            for (let i = 0; i < soln.length; i++) {
                if (soln[i].trim() !== resp[i].trim()) {
                    matches = false;
                    break;
                }
            }
        }

        // Indicate result
        if (matches) {
            tdout.style['background-color'] = "lightgreen";
            tdout.innerHTML = "✔️Correct";
        } else {
            tdout.style['background-color'] = "lightpink";
            tdout.innerHTML = "✖️Please try again";
        }
    }

    // Reset the problem
    onReset(ev) {
        // Reset the problem
        let dragcol = document.getElementById(`${this.qid}`).querySelector('td#dragcol div.container');

        // Get all source elements in the dropcol and move back to the dragcol
        let dropcol = document.getElementById(`${this.qid}`).querySelector('td#dropcol div.container');
        let srcs = dropcol.querySelectorAll('div.source');
        let sarr = [...srcs];   // Spread into Array
        shuffle(sarr);          // Randomize order and move back to dragcol
        sarr.forEach(src => dragcol.appendChild(src));

        let items = document.getElementById(`${this.qid}`).querySelectorAll('div.box');
        items.forEach(item => { 
            item.classList.remove('over');
            item.style.opacity = '1';
        });

        // Output element
        let tdout = document.getElementById(`${this.qid}`).querySelector('td#soln');
        tdout.style['background-color'] = "";
        tdout.innerHTML = "";
    }

    // Get the current response as assigned
    getResponse() {
        // Get the DIV holding all div.box's in the dropcol
        let targets = document.getElementById(`${this.qid}`).querySelectorAll('td#dropcol > div.container > div.box');
        
        // Get text content of all boxes in dropcol
        let resp = [...targets].map(targ => targ.innerText);
        return resp;
    }
}

/**
 * QMatching
 * q.solution is an array of two-element arrays, where each two-element array is the correct match
 */
class QMatching {
    constructor(q) {
        this.qid        = q.id          || "Q##";
        this.title      = q.title       || "Matching";
        this.prompt     = q.prompt      || ["<p>Drag the terms from the left column to matching terms in the right column</p>"];
        this.solution   = q.solution    || [];  

        // Load template XHTML
        let parser = new DOMParser();
        this.qdoc  = parser.parseFromString(`
        <hr/>
        <div id="${this.qid}">
        <div id="title" style="font-weight:bold;">${this.qid}: ${this.title}</div>
        <div id="prompt">${this.prompt.join('\n')}</div>

        <table><tr>
        <td id="dragcol" valign="top" style="min-width:250px; background-color:whitesmoke; border: solid gold 2px; border-radius: 5px;">
            <div class="container"></div>
        </td>
        <td id="dropcol" valign="top" style="min-width:250px; border: solid lightblue 2px; border-radius: 5px;">
            <div class="container"></div>
        </td>
        </tr><tr>
        <td id="buttons" style="vertical-align:top; padding:10px; min-width:200px;">
        <button id="bCheck">Check</button> 
        <button id="bReset">Reset</button> 
        <!-- button id="bResp">Response</button --></td>
        <td id="soln" style="vertical-align:top; padding:10px; border-radius: 5px;"></td>
        </tr></table>
        </div>`, "text/html");

        // Split pairs. Save to object. Randomly shuffle targets.
        this.options = [...this.solution.map( el => el[0] )];
        this.targets = [...this.solution.map( el => el[1] )];
        shuffle(this.targets);

        // Wrap dropcol elements in boxes and add to html array
        let html = [...this.options.map(op => `<div draggable="true" style="white-space: pre;" class="box source">${op}&nbsp;</div>`) ];

        // Build and inject problem nodes into a temporary holder HTMLElement
        let holder = document.createElement('div');     // temp element to hold HTML
        holder.innerHTML = html.join('\n');

        // Get container and add drag elements to drag col
        const cont = this.qdoc.getElementById(this.qid);    // Container is a div
        cont.querySelector("#dragcol > div.container").append(...holder.childNodes);
        
        // Randomize and add all values to first column
        html = [...this.targets.map( op => `<div class="box target">${op}&nbsp;</div>`)];

        // Add to dropcol
        holder.innerHTML = html.join('\n');
        cont.querySelector("#dropcol > div.container").append(...holder.childNodes);
        
        // Highlight individual options as if they were lines of code
        const blocks = cont.querySelectorAll('div[draggable] code')
        blocks.forEach( block => hljs.highlightElement(block) );
        
        // Add dragging events to all boxes
        let dragitems = cont.querySelectorAll('td#dragcol > div.container > div.box');
        dragitems.forEach( (item) => {
            item.addEventListener('dragstart', this.doDragStart.bind(this), false);
            item.addEventListener('dragover',  this.doDragOver.bind(this),  false);
            item.addEventListener('dragleave', this.doDragLeave.bind(this), false);
            item.addEventListener('drop',      this.doDrop.bind(this),      false);
            item.addEventListener('dragend',   this.doDragEnd.bind(this),   false);
        });

        let dropitems = cont.querySelectorAll('td#dropcol > div.container > div.box');
        dropitems.forEach( (item) => {
            item.addEventListener('dragover',  this.doDragOver.bind(this),  false);
            item.addEventListener('dragleave', this.doDragLeave.bind(this), false);
            item.addEventListener('drop',      this.doDrop.bind(this),      false);
        });
        
        // Handle events on drag column
        const tddragcol = cont.querySelector('td#dragcol');
        tddragcol.addEventListener('dragover',  this.doDragOver.bind(this), false);
        tddragcol.addEventListener('drop',      this.doDrop.bind(this),     false);

        // Append substituted question template into html document
        document.body.appendChild(this.qdoc.documentElement);

        // Assign event handlers
        document.getElementById(`${this.qid}`).querySelector("#bReset").addEventListener("click", this.onReset.bind(this) );
        document.getElementById(`${this.qid}`).querySelector("#bCheck").addEventListener("click", this.onCheck.bind(this) );
        // document.getElementById(`${this.qid}`).querySelector("#bResp").addEventListener("click", this.getResponse.bind(this) );
    }

    // Inspired by https://web.dev/drag-and-drop/
    doDragStart(e) {
        //console.log(`doDragStart: ${e.currentTarget.innerText}`);
        this.dragSrcEl = e.currentTarget;
        this.dragSrcEl.style.opacity = '0.4';
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.dragSrcEl.innerText);
    }
    doDragOver(e) {
        //console.log(`doDragOver: ${e.currentTarget.innerText}`);
        if (e.preventDefault) { e.preventDefault(); }           // stops redirect.
        e.dataTransfer.dropEffect = 'move';
        let closest = e.currentTarget.closest('.box');
        if (closest) { closest.classList.add('over'); }
        return false;
    }
    doDragLeave(e) {
        //console.log(`doDragLeave: ${e.currentTarget.innerText}`);
        e.currentTarget.closest('.box').classList.remove('over');
        this.dragSrcEl.closest('.box').classList.remove('over');
    }
    doDrop(e) {
        //console.log(`doDropTarget: ${e.currentTarget.innerText}`);
        //console.log(e.currentTarget.tagName,
        if (e.stopPropagation) { e.stopPropagation(); }     // stops redirect.
        
        // Decide what to do based on characteristics of drop target
        // If dropped back on same target...
        if (this.dragSrcEl === e.currentTarget) {
            // Do nothing

        // If dropped on a source...
        } else if (e.currentTarget.tagName === 'DIV' && e.currentTarget.classList.contains('source')) {
            // If source is in dropcol than it is an answer, so skip
            if (e.currentTarget.closest('td').id === 'dropcol') return;

            // insert before
            e.currentTarget.parentNode.insertBefore(this.dragSrcEl, e.currentTarget);

        // If drop on a target and target...
        } else if (e.currentTarget.tagName === 'DIV' && e.currentTarget.classList.contains('target')) {
            // Currently contains to answers
            if (e.currentTarget.querySelectorAll('.source') && e.currentTarget.querySelectorAll('.source').length > 0) { 
                return;
            }
            // append child
            e.currentTarget.appendChild(this.dragSrcEl);

        // If dropped back on original container
        } else if (e.currentTarget.tagName === 'TD' && e.currentTarget.id === 'dragcol') {
            // add to bottom of container
            e.currentTarget.appendChild(this.dragSrcEl);
        }

        return false;
    }
    doDragEnd(e) {
        //console.log(`doDragEnd: ${e.currentTarget.innerText}`);
        e.currentTarget.style.opacity = '1';
        let items = document.getElementById(`${this.qid}`).querySelectorAll('div.box');
        items.forEach(item => { item.classList.remove('over'); });
    }

    // Method to handle click event by comparing solution set options to entered values.
    onCheck(ev) {
        const soln = this.solution;             // Array of arrays. Each element is correct [option, target] pair
        const resp = this.getResponse();        // Response as [option, target] pair. option is null of not answered.
                                                // Output element
        let tdout = document.getElementById(`${this.qid}`).querySelector('td#soln');

        // If any not answered, ask user to complete and return
        for (let pair of resp) {
            if (pair[0] === null) {
                tdout.style['background-color'] = "lightyellow";
                tdout.innerHTML = "❓Please drag all options on left to answers on right.";
                return;
            }
        }

        // Compare all pairs. If any one not found, ask to try again.

        let matches = true;                     // Assume a match and look for any that does not match
        for (let sol of soln) {                 // Loop over all solutions
            let found = false;                  // Assume not found
            for (let res of resp) {             // Loop over all responses
                if (res[0] === sol[0]) {        // Found response-solution option match
                    found = true;               // Indicate option was found
                    if (res[1] !== sol[1]) {    // Check option is not in correct target
                        matches = false;        // No match
                    }
                }
            }
            // If option not found as an answer, also no match 
            if (!found) { matches = false; }
        }

        // Indicate result
        if (matches) {
            tdout.style['background-color'] = "lightgreen";
            tdout.innerHTML = "✔️Correct";
        } else {
            tdout.style['background-color'] = "lightpink";
            tdout.innerHTML = "✖️Please try again";
        }
    }

    // Reset the problem
    onReset(ev) {
        // Reset the problem
        let dragcol = document.getElementById(`${this.qid}`).querySelector('td#dragcol div.container');

        // Get all source elements in the dropcol and move back to the dragcol
        let dropcol = document.getElementById(`${this.qid}`).querySelector('td#dropcol div.container');
        let srcs = dropcol.querySelectorAll('div.source');
        let sarr = [...srcs];   // Spread into Array
        shuffle(sarr);          // Randomize order and move back to dragcol
        sarr.forEach(src => dragcol.appendChild(src));

        let items = document.getElementById(`${this.qid}`).querySelectorAll('div.box');
        items.forEach(item => { 
            item.classList.remove('over');
            item.style.opacity = '1';
        });

        // Output element
        let tdout = document.getElementById(`${this.qid}`).querySelector('td#soln');
        tdout.style['background-color'] = "";
        tdout.innerHTML = "";
    }

    // Get the current response as assigned
    getResponse() {
        // Get the DIV holding all div.box's targets in the dropcol
        let targets = document.getElementById(`${this.qid}`).querySelectorAll('td#dropcol > div.container > div.box.target');
        
        // Get answer and text content of all boxes in dropcol
        let resp = [];
        for (let targ of [...targets]) {
            let onode  = targ.querySelector('div.box.source');                                      // Check for an option 
            let otext  = onode ? onode.innerText.trim() : null;                                     // Get option text or null if not answered
            let tnodes = [...targ.childNodes].filter(el => el.nodeType === Node.TEXT_NODE);         // Get all target child text nodes
            let ttext  = tnodes.length > 0 ? tnodes.map(el => el.textContent).join(' ').trim() : "";// If any, get text of all and join
            resp.push( [otext, ttext] );    // Save option-target pair
        }
        return resp;
    }
}
/**
 * QMultipleAnswer
 * q.solution is an array of two-element arrays, 
 * where each two-element array is an answer and a boolean indicating if the answer should be selected
 */
class QMultipleAnswer {
    constructor(q) {
        this.qid        = q.id          || "Q##";
        this.title      = q.title       || "Multiple Answer";
        this.prompt     = q.prompt      || ["<p>Check all of the following phrases that identify a broad type of programming language?</p>"];
        this.solution   = q.solution    || [];  

        // Load template XHTML
        let parser = new DOMParser();
        this.qdoc  = parser.parseFromString(`
        <hr/>
        <div id="${this.qid}">
        <div id="title" style="font-weight:bold;">${this.qid}: ${this.title}</div>
        <div id="prompt">${this.prompt.join('\n')}</div>

        <table><tr>
            <td id="checkboxes" style="vertical-align:top; padding:10px;"></td>
            <td id="buttons" style="vertical-align:top; padding:10px; min-width:200px;">
                <button id="bCheck">Check</button><br/>
                <button id="bReset">Reset</button><br/>
                <!-- button id="bResp">Response</button -->
            </td>
            <td id="soln" style="vertical-align:top; padding:10px; border-radius: 5px;"></td>
        </tr></table>
        </div>`, "text/html");
        
        // Shuffle options
        shuffle(this.solution);

        // Inject checkboxes for all answers
        this.qdoc.querySelector('#checkboxes').innerHTML =
            this.solution.map( pair => `<input type="checkbox" data-label='${pair[0]}'/> ${pair[0]}`).join('<br/>');

        // Highlight code
        let blocks = this.qdoc.querySelectorAll('code'); 
        for (let i = 0; i< blocks.length; i++) { hljs.highlightElement(blocks[i]); }

        // Append substituted question template into html document
        document.body.appendChild(this.qdoc.documentElement);

        // Assign event handlers
        document.getElementById(`${this.qid}`).querySelector("#bReset").addEventListener("click", this.onReset.bind(this) );
        document.getElementById(`${this.qid}`).querySelector("#bCheck").addEventListener("click", this.onCheck.bind(this) );
        //document.getElementById(`${this.qid}`).querySelector("#bResp" ).addEventListener("click", this.getResponse.bind(this) );
    }

    // Get the current response as assigned
    getResponse() {
        // Assume all input elements are used for answers
        let inps = document.getElementById(`${this.qid}`).querySelectorAll('input[type="checkbox"]');

        // Return array of input values
        let resp = [...inps].map( item => [item.dataset.label, item.checked] );
        //console.log(resp);
        return resp;
    }

    // Reset the problem
    onReset() {
        document.getElementById(`${this.qid}`).querySelectorAll('input[type="checkbox"]').forEach( inp => inp.checked = false);

        // Output element
        let tdout = document.getElementById(`${this.qid}`).querySelector('td#soln');
        tdout.style['background-color'] = "";
        tdout.innerHTML = "";
    }

    // Method to handle click event by comparing solution to selected.
    onCheck() {
        let tdout = document.getElementById(`${this.qid}`).querySelector('td#soln');              // output td
        let inps  = document.getElementById(`${this.qid}`).querySelectorAll('input[type="checkbox"]');
        let resp  = [...inps].map( item => [item.dataset.label, item.checked] );

        // Count the number of answers
        let count = document.getElementById(`${this.qid}`).querySelectorAll('input[type="checkbox"]:checked').length;

        if (count == 0) {
            tdout.style['background-color'] = "lightyellow";
            tdout.innerHTML = `❓Please select ${this.solution.length} answer(s).`;
        } else {
            let matches = true;
            for (let sol of this.solution) {        // Loop over all elements in the solution
                let found = false;                  // For each element, assume not found in solution
                for (let res of resp) {             // Loop over all elements in the response
                    if (sol[0] === res[0]) {        // If the names match...
                        if (sol[1] !== res[1]) {    // If values do not match...
                            matches = false;        // set matches to false
                        }
                        found = true;               // We found a name match, test the value
                        break;                      // break out of inner loop
                    }
                }
                if (!found) {                       // If name not found
                    matches = false;                // then no match
                    break;                          // break out of outer loop
                }
                if (!matches) {                     // If any answer does not match
                    break;                          // break out of outer loop
                }
            }
            if (matches) {
                tdout.style['background-color'] = "lightgreen";
                tdout.innerHTML = "✔️Correct";
            } else {
                tdout.style['background-color'] = "lightpink";
                tdout.innerHTML = "✖️Try again";
            }
        }
    }
}

/**
 * QMultipleChoice
 * q.solution is an array of two-element arrays, 
 * where each two-element array is an answer and a boolean indicating if the answer should be selected
 */
class QMultipleChoice {
    constructor(q) {
        this.qid        = q.id          || "Q##";
        this.title      = q.title       || "Multiple Choice";
        this.prompt     = q.prompt      || ["<p>Choose the correct answer from all available options</p>"];
        this.solution   = q.solution    || [];  

        // Load template XHTML
        let parser = new DOMParser();
        this.qdoc  = parser.parseFromString(`
        <hr/>
        <div id="${this.qid}">
        <div id="title" style="font-weight:bold;">${this.qid}: ${this.title}</div>
        <div id="prompt">${this.prompt.join('\n')}</div>

        <table><tr>
            <td id="radiobuttons" style="vertical-align:top; padding:10px;"></td>
            <td id="buttons" style="vertical-align:top; padding:10px; min-width:200px;">
                <button id="bCheck">Check</button><br/>
                <button id="bReset">Reset</button><br/>
                <!-- button id="bResp">Response</button -->
            </td>
            <td id="soln" style="vertical-align:top; padding:10px; border-radius: 5px;"></td>
        </tr></table>
        </div>`, "text/html");
        
        // Shuffle options
        shuffle(this.solution);

        // Inject radio buttons for all answers
        this.qdoc.querySelector('#radiobuttons').innerHTML =
            this.solution.map( pair => `<input type="radio" name='${this.qid}' data-label='${pair[0]}'/> ${pair[0]}`).join('<br/>');

        // Highlight code
        let blocks = this.qdoc.querySelectorAll('code'); 
        for (let i = 0; i< blocks.length; i++) { hljs.highlightElement(blocks[i]); }

        // Append substituted question template into html document
        document.body.appendChild(this.qdoc.documentElement);

        // Assign event handlers
        document.getElementById(`${this.qid}`).querySelector("#bReset").addEventListener("click", this.onReset.bind(this) );
        document.getElementById(`${this.qid}`).querySelector("#bCheck").addEventListener("click", this.onCheck.bind(this) );
        //document.getElementById(`${this.qid}`).querySelector("#bResp" ).addEventListener("click", this.getResponse.bind(this) );
    }

    // Get the current response as assigned
    getResponse() {
        // Assume all input elements are used for answers
        let inps = document.getElementById(`${this.qid}`).querySelectorAll('input[type="radio"]');

        // Return array of input values
        let resp = [...inps].map( item => [item.dataset.label, item.checked] );
        console.log(JSON.stringify(resp));
        return resp;
    }

    // Reset the problem
    onReset() {
        document.getElementById(`${this.qid}`).querySelectorAll('input[type="radio"]').forEach( inp => inp.checked = false);

        // Output element
        let tdout = document.getElementById(`${this.qid}`).querySelector('td#soln');
        tdout.style['background-color'] = "";
        tdout.innerHTML = "";
    }

    // Method to handle click event by comparing solution to selected.
    onCheck() {
        let tdout = document.getElementById(`${this.qid}`).querySelector('td#soln');              // output td
        let inps  = document.getElementById(`${this.qid}`).querySelectorAll('input[type="radio"]');
        let resp  = [...inps].map( item => [item.dataset.label, item.checked] );

        // Count the number of answers
        let count = document.getElementById(`${this.qid}`).querySelectorAll('input[type="radio"]:checked').length;

        if (count == 0) {
            tdout.style['background-color'] = "lightyellow";
            tdout.innerHTML = `❓Please select an answer.`;
        } else {
            let matches = true;
            for (let sol of this.solution) {        // Loop over all elements in the solution
                let found = false;                  // For each element, assume not found in solution
                for (let res of resp) {             // Loop over all elements in the response
                    if (sol[0] === res[0]) {        // If the names match...
                        if (sol[1] !== res[1]) {    // If values do not match...
                            matches = false;        // set matches to false
                        }
                        found = true;               // We found a name match, test the value
                        break;                      // break out of inner loop
                    }
                }
                if (!found) {                       // If name not found
                    matches = false;                // then no match
                    break;                          // break out of outer loop
                }
                if (!matches) {                     // If any answer does not match
                    break;                          // break out of outer loop
                }
            }
            if (matches) {
                tdout.style['background-color'] = "lightgreen";
                tdout.innerHTML = "✔️Correct";
            } else {
                tdout.style['background-color'] = "lightpink";
                tdout.innerHTML = "✖️Try again";
            }
        }
    }
}

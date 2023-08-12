// ---------------------------------------------------------------  
// qtemplates.js
// MFR
// v. 2023/08/11

// TODO:
// - Build random question generators
// - Build config tool that allows interactive creation and saving of quizzes as config
// - Build hydration tool that hydrates quiz config into quiz HTML page
// - Assemble quiz responses and submit solutions to ???

// Random shuffle helper function
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

// ---------------------------------------------------------------  
// 1. Multiple Choice
// qid    : Unique Question ID, like Q01
// prompt : HTML question description
// config : object
//  options - An array of answer string options to display
//  soln    - The correct solution string exactly matching one of the options
class QMultipleChoice extends HTMLElement {
    static get observedAttributes() { return ['data-qid']; }

    // Constructor
    constructor(qid, qtitle, prompt, config) {
        super();
        this.qid    = qid    || "Q##";
        this.qtitle = qtitle || 'Multiple Choice';
        this.prompt = prompt || "<p>Please select the correct answer.</p>";
        this.config = config || {};

        this.attachShadow({mode: 'open'});   // Set up shadowRoot DOM
        this.shadowRoot.innerHTML = `
        <style>
            pre {
                background-color: whitesmoke;
                margin: 0;
                padding: 0 0 0 10px;
            }
            code, .hljs {
                font-family: 'Courier New', Courier, monospace !important;
                font-weight: bold;
                line-height: 1.4em;
            }
            button#bReset, button#bCheck {
                width: 50px;
            }
            .hljs-number   { color: brown; }
            .hljs-string   { color: #444; }
            .hljs-type     { color: darkred; } 
            .hljs-keyword, .hljs-operator  { color: darkblue; }
            .hljs-comment  { color: darkgreen; }
        </style>
        <div id="prob">
            <div id="title" style="font-weight:bold;">Q##) Multiple Choice</div>
            <div id="prompt"><p>Please select the correct answer.</p></div>

            <table><tr>
                <td id="radiobuttons" style="vertical-align:top; padding:10px;"></td>
                <td id="buttons" style="vertical-align:top; padding:10px; min-width:200px;">
                    <button id="bCheck">Check</button><br/>
                    <button id="bReset">Reset</button><br/>
                    <!-- button id="bResp">Response</button --></td>
                <td id="soln" style="vertical-align:top; padding:10px; border-radius: 5px;"></td>
            </tr></table>
        </div>`;
    }

    // Config element after inserted to DOM
    connectedCallback() {

        // Ensure data-qid attribute is set on shadowRoot host node
        this.shadowRoot.host.setAttribute('data-qid', this.qid);

        // Do later, after everything loaded and hydrated, make substitutions into shadow DOM
        setTimeout( () => {

            // Get config, which is script type="application/json" node added by user to element
            let scriptNode = [...this.childNodes].find(node => node.nodeName === 'SCRIPT');
            if (scriptNode) { this.config = JSON.parse(scriptNode.textContent); }

            // Setup question title
            let qtitle = this.shadowRoot.querySelector('#title');
            if (this.config.title) {
                qtitle.innerHTML = `${this.qid}) ${this.config.title}`;
            } else {
                qtitle.innerHTML = `${this.qid}) ${this.qtitle}`;
            }
            // Substitute title with assigned qid
            //this.shadowRoot.querySelector('#title').innerHTML = `${this.qid}) Multiple Choice`;

            // Select all direct child nodes in the webComponent that are not <script> elements
            let promptNodes = this.querySelectorAll(":scope > :not(script)")
            
            // Replace all prompt nodes in prompt element under shadowRoot
            let prompt = this.shadowRoot.querySelector('#prompt');
            if (promptNodes.length > 0) {
                prompt.replaceChildren(...promptNodes);
            } else {
                prompt.innerHTML = this.prompt;
            }

            // Inject radio buttons for all answers
            this.shadowRoot.querySelector('#radiobuttons').innerHTML =
                this.config.options.map( (x, index) => `<input type="radio" name='${this.qid}' value='${x}'/> ${x}`).join('<br/>');

            // Highlight code
            let blocks = this.shadowRoot.querySelectorAll('code'); 
            for (let i = 0; i< blocks.length; i++) { hljs.highlightElement(blocks[i]); }

            // Set event handler for [Check] and [Reset] buttons
            this.shadowRoot.querySelector("button#bCheck").addEventListener("click", this.onCheck.bind(this));
            this.shadowRoot.querySelector("button#bReset").addEventListener("click", this.onReset.bind(this));
            //this.shadowRoot.querySelector("button#bResp").addEventListener("click", (function() { console.log(this.response); }).bind(this));
        });
    }

    // Handle attributes
    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case 'data-qid':
                this.qid = newVal;
                break;
        }
    }

    // Method to handle click event by comparing solution to selected.
    onCheck() {
        const root = this.shadowRoot.querySelector('table');
        let tdout = root.querySelector('td#soln');         // output
        let elan  = root.querySelector('input:checked');   // selected radio button
        if (elan) {
            if (elan.value == this.config.soln) {
                tdout.style['background-color'] = "lightgreen";
                tdout.innerHTML = "✔️Correct";
            } else {
                tdout.style['background-color'] = "lightpink";
                tdout.innerHTML = "✖️Try again";
            }
        } else {
            tdout.style['background-color'] = "lightyellow";
            tdout.innerHTML = "❓Please choose an answer.";
        }
    }

    // Reset the problem
    onReset() {
        // Clear all radio button selections
        this.shadowRoot.querySelectorAll('input[type="radio"]').forEach( inp => inp.checked = '');

        // Clear the output element
        let tdout = this.shadowRoot.querySelector('td#soln');
        tdout.style['background-color'] = "";
        tdout.innerHTML = "";
    }

    // Get the current response as assigned
    get response() {
        // Assume all <input> elements in prompt are used for answers
        let inps = this.shadowRoot.querySelectorAll('input[type="radio"]:checked');

        // Return an array of input values
        return [...inps].map( item => item.value);
    }
}
customElements.define("q-multiplechoice", QMultipleChoice);

// --------------------------------------------------------------- 
// 2. Multiple Answer
// qid     : Unique Question ID, like Q01
// config is object with keys:
// options : An array of answer options to display
// soln    : Correct answer options 
// prompt  : Question prompt text with optional code
class QMultipleAnswer extends HTMLElement {
    static get observedAttributes() { return ['data-qid']; }

    // Constructor
    constructor(qid, qtitle, prompt, config) {
        super();
        this.qid    = qid    || "Q##";
        this.qtitle = qtitle || 'Multiple Answer';
        this.prompt = prompt || "<p>Please select all correct answers.</p>";
        this.config = config || {};

        this.attachShadow({mode: 'open'});   // Set up shadowRoot DOM
        this.shadowRoot.innerHTML = `
        <style>
            pre {
                background-color: whitesmoke;
                margin: 0;
                padding: 0 0 0 10px;
            }
            code, .hljs {
                font-family: 'Courier New', Courier, monospace !important;
                font-weight: bold;
                line-height: 1.4em;
            }
            button#bReset, button#bCheck {
                width: 50px;
            }
            .hljs-number   { color: brown; }
            .hljs-string   { color: #444; }
            .hljs-type     { color: darkred; } 
            .hljs-comment  { color: darkgreen; }
            .hljs-keyword, .hljs-operator  { color: darkblue; }
        </style>
        <div id="prob">
            <div id="title" style="font-weight:bold;">Q##) Multiple Answer</div>
            <div id="prompt"></div>

            <table><tr>
                <td id="checkboxes" style="vertical-align:top; padding:10px;"></td>
                <td id="buttons" style="vertical-align:top; padding:10px; min-width:200px;">
                    <button id="bCheck">Check</button><br/>
                    <button id="bReset">Reset</button><br/>
                    <!-- button id="bResp">Response</button --></td>
                <td id="soln" style="vertical-align:top; padding:10px; border-radius: 5px;"></td>
            </tr></table>
        </div>`; 
    }

    // Config element after inserted to DOM
    connectedCallback() {
        // Ensure data-qid attribute is set on shadowRoot host node
        this.shadowRoot.host.setAttribute('data-qid', this.qid);

        // Do later, after everything loaded and hydrated, make substitutions into shadow DOM
        setTimeout( () => {

            // Get config, which is script type="application/json" node added by user to element
            let scriptNode = [...this.childNodes].find(node => node.nodeName === 'SCRIPT');
            if (scriptNode) { this.config = JSON.parse(scriptNode.textContent); }

            // Setup question title
            let qtitle = this.shadowRoot.querySelector('#title');
            if (this.config.title) {
                qtitle.innerHTML = `${this.qid}) ${this.config.title}`;
            } else {
                qtitle.innerHTML = `${this.qid}) ${this.qtitle}`;
            }
            // Substitute title with assigned qid
            //this.shadowRoot.querySelector('#title').innerHTML = `${this.qid}) Multiple Answer`;

            // Select all direct child nodes in the webComponent that are not <script> elements
            let promptNodes = this.querySelectorAll(":scope > :not(script)")
            
            // Replace all prompt nodes in prompt element under shadowRoot
            let prompt = this.shadowRoot.querySelector('#prompt');
            if (promptNodes.length > 0) {
                prompt.replaceChildren(...promptNodes);
            } else {
                prompt.innerHTML = this.prompt;
            }

            // Randomize options
            shuffle(this.config.options);

            // Inject checkboxes for all answers
            this.shadowRoot.querySelector('#checkboxes').innerHTML =
                this.config.options.map( (x, index) => `<input type="checkbox" name='${this.qid}' value='${x}'/> ${x}`).join('<br/>');

            // Highlight code
            let blocks = this.shadowRoot.querySelectorAll('code'); 
            for (let i = 0; i< blocks.length; i++) { hljs.highlightElement(blocks[i]); }

            // Set event handler for [Check] and [Reset] buttons
            this.shadowRoot.querySelector("button#bCheck").addEventListener("click", this.onCheck.bind(this));
            this.shadowRoot.querySelector("button#bReset").addEventListener("click", this.onReset.bind(this));
            //this.shadowRoot.querySelector("button#bResp").addEventListener("click", (function() { console.log(this.response); }).bind(this));
        });
    }

    // Handle attributes
    attributeChangedCallback(attrName, oldVal, newVal) {
        //console.log(`attributeChangedCallback ${attrName} ${newVal}`);
        switch (attrName) {
            case 'data-qid':
                this.qid = newVal;
                break;
        }
    }

    // Get the current response as assigned
    get response() {
        // Assume all input elements are used for answers
        let inps = this.shadowRoot.querySelectorAll('input[type="checkbox"]:checked');

        // Return array of input values
        return [...inps].map( item => item.value );
    }

    // Reset the problem
    onReset() {
        this.shadowRoot.querySelectorAll('input[type="checkbox"]').forEach( inp => inp.checked = false);

        // Output element
        let tdout = this.shadowRoot.querySelector('td#soln');
        tdout.style['background-color'] = "";
        tdout.innerHTML = "";
    }

    // Method to handle click event by comparing solution to selected.
    onCheck() {
        let tdout = this.shadowRoot.querySelector('td#soln');              // output td
        let inps = this.shadowRoot.querySelectorAll('input[type="checkbox"]:checked');
        let ans = [...inps].map( item => item.value );

        if (ans.length < this.config.soln.length || ans.length > this.config.soln.length) {
            tdout.style['background-color'] = "lightyellow";
            tdout.innerHTML = `❓Please select ${this.config.soln.length} answer(s).`;
        } else {
            if (ans.sort().toString() === this.config.soln.sort().toString()) {  // sort, convert to String, and compare
                tdout.style['background-color'] = "lightgreen";
                tdout.innerHTML = "✔️Correct";
            } else {
                tdout.style['background-color'] = "lightpink";
                tdout.innerHTML = "✖️Try again";
            }
        }
    }
}
customElements.define("q-multipleanswer", QMultipleAnswer);

// --------------------------------------------------------------- 
// 3. Fill in multiple blanks
// qid       : Unique question ID, like Q01
// config is object with keys:
// solns     : An array of correct answer maps. Each maps <input> id to correct answer
// checkCase : false if to test solutions independent of case
// prompt    : Question prompt text
// Example:
// <p>Enter initializers for A, B, and C to produce the output 1, 2, 3.</p>
// <div style="background: whitesmoke;">
// <pre><code class="language-java">
// int A = __A;  // Init variables. (Note double-under indicates input boxes)
// int B = __B;
// int C = __C;
//
// for (int i = A; i &lt; B; i = i + C) {
//   System.out.println(i);
// }
//
// </code></pre></div>
// {'solns'    : [{'__A': 1, '__B':4, '__C':1}],
//  'checkCase': false }
class QFillInBlanks extends HTMLElement {
    static get observedAttributes() { return ['data-qid']; }

    // Constructor
    constructor(qid, qtitle, prompt, config) {
        super();
        // Save any parameters passed to constructor - only happens when component created from code
        this.qid    = qid    || "Q##";
        this.qtitle = qtitle || 'Fill in the Blanks';
        this.prompt = prompt || "<p>Please fill in the blanks.</p>";
        this.config = config || {};

        // Create and build up shadow DOM
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <style>
            input { width: 100px; }
            pre {
                background-color: whitesmoke;
                margin: 0;
                padding: 0 0 0 10px;
            }
            code, .hljs {
                font-family: 'Courier New', Courier, monospace !important;
                font-weight: bold;
                line-height: 1.5em;
            }
            button#bReset, button#bCheck {
                width: 50px;
            }
            .hljs-number   { color: brown; }
            .hljs-string   { color: #444; }
            .hljs-type     { color: darkred; }
            .hljs-comment  { color: darkgreen; }
            .hljs-keyword, .hljs-operator { color: darkblue; }
        </style>
        <div id="prob">
            <div id="title" style="font-weight:bold;">Q##) Fill in the Blanks</div>
            <div id="prompt"></div>

            <div style="padding:5px;">
                <table><tr>
                <td id="buttons" style="vertical-align:top; padding:10px; min-width:200px;">
                    <button id="bCheck">Check</button> 
                    <button id="bReset">Reset</button> 
                    <!-- button id="bResp">Response</button --></td>
                <td id="soln" style="vertical-align:top; padding:10px; border-radius: 5px;"></td>
                </tr></table>
            </div>
        </div>
`;  }

    // Config element after inserted to DOM
    connectedCallback() {
        // Ensure data-qid attribute is set on shadowRoot host node
        this.shadowRoot.host.setAttribute('data-qid', this.qid);

        // Do later, after everything loaded and hydrated, make substitutions into shadow DOM
        setTimeout( () => {
            // Loop over all immediate childNodes and divide into prompt nodes and config node
            let configNodes = [];
            let promptNodes = [];
            for (let node of [...this.childNodes]) {
                if (node.nodeName === 'SCRIPT' && node.type === 'application/json') {
                    configNodes.push(node);
                } else {
                    promptNodes.push(node);
                }
            }

            // Replace config with web component config, if any
            if (configNodes.length > 0) { this.config = JSON.parse(configNodes[0].textContent); }
            const conf = this.config;

            // Setup question title
            let qtitle = this.shadowRoot.querySelector('#title');
            if (conf.title) {
                qtitle.innerHTML = `${this.qid}) ${conf.title}`;
            } else {
                qtitle.innerHTML = `${this.qid}) ${this.qtitle}`;
            }
            // Substitute title with assigned qid
            //this.shadowRoot.querySelector('#title').innerHTML = `${this.qid}) Fill in the Blanks`;

            // Replace all prompt nodes in prompt element under shadowRoot
            let prompt = this.shadowRoot.querySelector('#prompt');
            if (promptNodes) {
                prompt.replaceChildren(...promptNodes);
            } else {
                prompt.innerHTML = this.prompt;
            }

            // Highlight any code in component
            let blocks = this.shadowRoot.querySelectorAll('code');
            for (let i = 0; i< blocks.length; i++) { hljs.highlightElement(blocks[i]); }

            // AFTER code highlight, substitute solution keys with <input> elements with key id
            // using a text substitution
            let html = this.shadowRoot.innerHTML;
            for (let k in conf.solns[0]) { html = html.replace(k, `<input name='${this.qid}${k}' id='${k}'/>`); }
            this.shadowRoot.innerHTML = html;

            // Set event handler for [Check] and [Reset] buttons
            this.shadowRoot.querySelector("button#bCheck").addEventListener("click", this.onCheck.bind(this));
            this.shadowRoot.querySelector("button#bReset").addEventListener("click", this.onReset.bind(this));
            //this.shadowRoot.querySelector("button#bResp").addEventListener("click", (function() { console.log(this.response); }).bind(this));
        });
    }

    // Handle attributes
    attributeChangedCallback(attrName, oldVal, newVal) {
        //console.log(`attributeChangedCallback ${attrName} ${newVal}`);
        switch (attrName) {
            case 'data-qid':
                this.qid = newVal;
                break;
        }
    }

    // Get the current response as assigned
    get response() {
        // Assume all input elements are used for answers
        let inps = this.shadowRoot.querySelectorAll('input');

        // Build object mapping input ids with their values
        let resp = Object.fromEntries([...inps].map( node => [node.id, node.value] ));

        return resp;
    }

    // Reset the problem
    onReset() {
        this.shadowRoot.querySelectorAll('input').forEach( inp => inp.value = '');

        // Output element
        let tdout = this.shadowRoot.querySelector('td#soln');
        tdout.style['background-color'] = "";
        tdout.innerHTML = "";
    }

    // Method to handle click event by comparing solution set options to entered values.
    onCheck() {
        // Assume all input elements are used for answers
        let inps = this.shadowRoot.querySelectorAll('input');

        // Build map of input ids with their values
        let ans = new Map()
        inps.forEach( inp => ans.set(inp.id, inp.value) );
        
        // Output element
        let tdout = this.shadowRoot.querySelector('td#soln');

        // Check for any unanswered questions
        for (const [key, val] of ans) {
            if (val.trim().length == 0) {
                tdout.style['background-color'] = "lightyellow";
                tdout.innerHTML = "❓Please fill in all empty boxes.";
                return;
            }
        }

        // Compare all this.config.solns options with ans to see if one matches
        // Assumes that all soln objects have keys that match all ans keys
        let matches = false;
        for (const soln of this.config.solns) {
            matches = true; // Assume a match and check for a mismatch
            for (const [key, val] of ans) {
                if (String(soln[key]).trim() !== String(val)) {
                    matches = false;
                    break;
                }
            }
            // If we get past the inner loop and matches is true, then we found a match
            if (matches) { break; }
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
}
customElements.define("q-fillinblanks", QFillInBlanks);

// ---------------------------------------------------------------  
// 4. Multiple Dropdowns
// qid       : Unique question ID, like Q01
// prompt    : Question prompt HTML
// config is object with keys:
// options   : An object mapping <select>s to an array of options
// solns     : An array of correct answer maps. Each maps <input> id to correct answer
// checkCase : false if to test solutions independent of case
// <script type="application/json">
// {"options" : {"__Q1V":["2.0", "2", 10],  "__Q1T":["double", "int", "long"],
//               "__Q2V":["4.0", "2", 221], "__Q2T":["double", "int", "float"]},
// "solns"   : [{"__Q1V":"2.0", "__Q1T":"double", "__Q2V":"4.0", "__Q2T":"double"}] }
// </script>

class QMultipleDropdowns extends HTMLElement {
    static get observedAttributes() { return ['data-qid']; }

    // Constructor
    constructor(qid, qtitle, prompt, config) {
        super();
        // Init any params passed to the constructor
        this.qid    = qid    || "Q##";
        this.qtitle = qtitle || 'Multiple Dropdowns';
        this.prompt = prompt || "<p>Please choose an option from all dropdowns</p>";
        this.config = config || {};

        this.attachShadow({mode: 'open'});   // Set up shadowRoot DOM
        this.shadowRoot.innerHTML =
        `<style>
            pre {
                background-color: whitesmoke;
                margin: 0;
                padding: 0 0 0 10px;
            }
            code, .hljs {
                font-family: 'Courier New', Courier, monospace !important;
                font-weight: bold;
                line-height: 1.5em;
            }
            button#bReset, button#bCheck {
                width: 50px;
            }
            .hljs-number   { color: brown; }
            .hljs-string   { color: #444; }
            .hljs-type     { color: darkred; }
            .hljs-comment  { color: darkgreen; }
            .hljs-keyword, .hljs-operator { color: darkblue; }
        </style>
        <div id="prob">
        <div id="title"  style="font-weight:bold;">Q## Multiple Dropdowns</div>
        <div id="prompt" style="padding:5px;"></div>

        <div style="padding:5px;">
        <table><tr>
        <td id="buttons" style="vertical-align:top; padding:10px; min-width:200px;">
            <button id="bCheck">Check</button> 
            <button id="bReset">Reset</button> 
            <!-- button id="bResp">Response</button --></td>
        <td id="soln" style="vertical-align:top; padding:10px; border-radius: 5px;"></td>
        </tr></table>
        </div>
        </div>`; 
    }

    // Config element after inserted to DOM
    connectedCallback() {
        // Ensure data-qid attribute is set on shadowRoot host node
        this.shadowRoot.host.setAttribute('data-qid', this.qid);

        // Do later, after everything loaded and hydrated, make substitutions into shadow DOM
        setTimeout( () => {
            // Loop over all custom elements childNodes and split into prompt nodes and config node
            let configNodes = [];
            let promptNodes = [];
            for (let node of [...this.childNodes]) {
                if (node.nodeName === 'SCRIPT' && node.type === 'application/json') {
                    configNodes.push(node);
                } else {
                    promptNodes.push(node);
                }
            }
            
            // Replace config with web component config, if any
            if (configNodes.length > 0) { this.config = JSON.parse(configNodes[0].textContent); }
            const conf = this.config;

            // Setup question title
            let qtitle = this.shadowRoot.querySelector('#title');
            if (conf.title) {
                qtitle.innerHTML = `${this.qid}) ${conf.title}`;
            } else {
                qtitle.innerHTML = `${this.qid}) ${this.qtitle}`;
            }

            // Replace all prompt nodes in prompt element under shadowRoot
            let prompt = this.shadowRoot.querySelector('#prompt');
            if (promptNodes.length > 0) {
                prompt.replaceChildren(...promptNodes);
            } else {
                prompt.innerHTML = this.prompt;
            }

            // Highlight any code in component
            let blocks = this.shadowRoot.querySelectorAll('code');
            for (let i = 0; i< blocks.length; i++) { hljs.highlightElement(blocks[i]); }

            // AFTER code highlight, substitute solution keys with <input> elements with key id
            // using a text substitution
            let html = this.shadowRoot.innerHTML;
            for (let k in this.config.options) {
                // Build options and shuffle
                let parts = [];
                for (let op of this.config.options[k]) { parts.push( `<option value="${op}">${op}</option>` ); }
                shuffle(parts);
                // Add blank answer to front 
                parts.unshift(`<option value=""></option>`);
                // Add select parts to front and back
                parts.unshift(`<select name='${this.qid}${k}' id='${k}'>`);
                parts.push(`</select>`);
                // Replace string in HTML
                html = html.replace(k, parts.join('')); 
            }
            this.shadowRoot.innerHTML = html;

            // Set event handler for [Check] and [Reset] buttons
            this.shadowRoot.querySelector("button#bCheck").addEventListener("click", this.onCheck.bind(this));
            this.shadowRoot.querySelector("button#bReset").addEventListener("click", this.onReset.bind(this));
            // this.shadowRoot.querySelector("button#bResp").addEventListener("click", (function() { console.log(this.response); }).bind(this));
        });
    }

    // Method to handle click event by comparing solution set options to entered values.
    onCheck() {
        // Assume all input elements are used for answers
        let sels = this.shadowRoot.querySelectorAll('select');

        // For all selects, build map of input ids with their values
        let ans = new Map()
        sels.forEach( sel => ans.set(sel.id, sel.value) );
        
        // Output element
        let tdout = this.shadowRoot.querySelector('td#soln');

        // Check for any unanswered questions
        for (const [key, val] of ans) {
            if (val.trim().length == 0) {
                tdout.style['background-color'] = "lightyellow";
                tdout.innerHTML = "❓Please select an answer from all dropdowns.";
                return;
            }
        }

        // Compare all this.config.solns options with ans to see if one matches
        // Assumes that all soln objects have keys that match all ans keys
        let matches = false;
        for (const soln of this.config.solns) {
            matches = true; // Assume a match and check for a mismatch
            for (const [key, val] of ans) {
                if (String(soln[key]).trim() !== String(val)) {
                    matches = false;
                    break;
                }
            }
            // If we get past the inner loop and matches is true, then we found a match
            if (matches) { break; }
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

    // Handle attributes
    attributeChangedCallback(attrName, oldVal, newVal) {
        //console.log(`attributeChangedCallback ${attrName} ${newVal}`);
        switch (attrName) {
            case 'data-qid':
                this.qid = newVal;
                break;
        }
    }

    // Reset the problem
    onReset() {
        this.shadowRoot.querySelectorAll('select').forEach( sel => sel.value = '');

        // Output element
        let tdout = this.shadowRoot.querySelector('td#soln');
        tdout.style['background-color'] = "";
        tdout.innerHTML = "";
    }

    // Get the current response as assigned
    get response() {
        // Assume all input elements are used for answers
        let sels = this.shadowRoot.querySelectorAll('select');

        // Functional method for building an object
        // 1. Spread the sels NodeList into Array of Node objects
        // 2. map Nodes into [id, value] Array pairs
        // 3. Use Object.fromEntries() static method to transform list of pairs into object
        let resp = Object.fromEntries([...sels].map( node => [node.id, node.value] ));

        return resp;
    }
}
customElements.define("q-multipledropdowns", QMultipleDropdowns);

// ---------------------------------------------------------------  
// 5. Order the Options
class QOrderOptions extends HTMLElement {
    static get observedAttributes() { return ['data-qid']; }
    
    // Constructor
    constructor(qid, qtitle, prompt, config) {
        super();
        this.qid    = qid    || "Q##";
        this.qtitle = qtitle || "Order the Options";
        this.prompt = prompt || "<p>Drag options from left box to right box in correct order</p>";
        this.config = config || {};
        this.dragSrcEl = null;
        this.soln = [];         // Expected solution

        // Create and build up shadow DOM
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <style>
            .container {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                gap: 0px;
            }
            .box {
                cursor: move;
                border: 1px solid #EEE;
                border-radius: .3em;
                background-color: whitesmoke;
                padding: 10px;
            }
            .box.over {
                background-color: white;
                /* border: 2px dotted #666; */
            }
            .source {
                background-color: #eae2bb;
            }
            .target {
                background-color: lightblue;
            }
            [draggable] {
                user-select: none;
            }
            pre {
                background-color: whitesmoke;
                margin: 0;
                padding: 0 0 0 10px;
            }
            code, .hljs {
                font-family: 'Courier New', Courier, monospace !important;
                font-weight: bold;
                line-height: 1.5em;
            }
            button#bReset, button#bCheck {
                width: 50px;
            }
            .hljs-number   { color: brown; }
            .hljs-string   { color: #444; }
            .hljs-type     { color: darkred; }
            .hljs-comment  { color: darkgreen; }
            .hljs-keyword, .hljs-operator { color: darkblue; }
        </style>
        <div id="prob">
        <div id="title" style="font-weight:bold;">Q##) Order the Options</div>
        <div id="prompt"></div>

        <table><tr>
        <td id="dragcol" valign="top" style="min-width:200px; background-color:whitesmoke; border: solid gold 2px; border-radius: 5px;">
        <td id="dropcol" valign="top" style="min-width:250px; border: solid lightblue 2px; border-radius: 5px;">
        </tr><tr>
        <td id="buttons" style="vertical-align:top; padding:10px; min-width:200px;">
            <button id="bCheck">Check</button> 
            <button id="bReset">Reset</button> 
            <!-- button id="bResp">Response</button --></td>    
        <td id="soln" style="vertical-align:top; padding:10px; border-radius: 5px;"></td>
        </tr></table>
        </div>`;
    }

    // Config element after inserted to DOM
    connectedCallback() {
        // Ensure data-qid attribute is et on shadowRoot host node
        this.shadowRoot.host.setAttribute('data-qid', this.qid);

        // https://stackoverflow.com/questions/48663678/how-to-have-a-connectedcallback-for-when-all-child-custom-elements-have-been-c
        // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/upgrade
        // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
        // Hydrate?
        //customElements.upgrade(this);

        // Do later, after everything loaded and hydrated
        // Get element content, wrap and substitute
        setTimeout( () => {
            // Get config, which is script type="application/json" node added by user to <q-orderoptions> element
            let scriptNode = [...this.childNodes].find(node => node.nodeName === 'SCRIPT');
            if (scriptNode) { this.config = JSON.parse(scriptNode.textContent); }
            const conf = this.config;

            // Setup question title
            let qtitle = this.shadowRoot.querySelector('#title');
            if (conf.title) {
                qtitle.innerHTML = `${this.qid}) ${conf.title}`;
            } else {
                qtitle.innerHTML = `${this.qid}) ${this.qtitle}`;
            }
            // Add title
            //cont.querySelector("#title").innerHTML =`${this.qid}) Order the Options`;

            // Select all direct child nodes in the webComponent that are not <pre><code> or <script> elements
            let promptNodes = this.querySelectorAll(":scope > :not(pre):not(script)")

            // Get container, which was inserted into shadowDOM by constructor
            const cont = this.shadowRoot.querySelector('#prob');    // Container is a div
            
            // Build and inject problem nodes into shadowDOM container
            let tmpElement = document.createElement('div');

            // Replace all prompt nodes in prompt element under shadowRoot
            let prompt = this.shadowRoot.querySelector('#prompt');
            if (promptNodes.length > 0) {
                prompt.replaceChildren(...promptNodes);
            } else {
                prompt.innerHTML = this.prompt;
            }

            // Add dragcol elements, which are all lines of code, shuffled
            let html = ['<div class="container">'];

            // Get lines of code and save a copy
            let cls = '';
            let lines = [];
            let codeBlock = this.querySelector('code');
            if (codeBlock) {
                cls = codeBlock.className;
                const codeText = codeBlock.innerText;
                lines = codeText.split('\n').filter(line => line.trim().length > 0);

                // Save a copy of these lines as the solution to be tested in onCheck.
                let acopy = JSON.parse(JSON.stringify(lines))
                this.soln = acopy.map((line) => line.trim());
            }

            // Randomly shuffle lines
            lines = shuffle(lines);
            
            // Wrap in boxes and add to html array
            let formatted = lines.map(line => `<div draggable="true" style="white-space: pre;" class="box source"><code class="${cls}">${line}&nbsp;</code></div>`);
            html.push( ...formatted );
            html.push('</div></td>');
            tmpElement.innerHTML = html.join('\n');
            cont.querySelector("#dragcol").append(...tmpElement.childNodes);

            // Highlight individual lines of code
            const blocks = cont.querySelectorAll('div[draggable] code')
            blocks.forEach( block => hljs.highlightElement(block) );
            
            // Add dropcol elements (None to start)
            html = ['<div class="container">'];
            html.push('</div>');

            // Add to dropcol
            tmpElement.innerHTML = html.join('\n');
            cont.querySelector("#dropcol").append(...tmpElement.childNodes);

            // Add dragging events to all boxes
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

            // Set event handler for [Check] and [Reset] buttons
            this.shadowRoot.querySelector("button#bCheck").addEventListener("click", this.onCheck.bind(this));
            this.shadowRoot.querySelector("button#bReset").addEventListener("click", this.onReset.bind(this));
            //this.shadowRoot.querySelector("button#bResp").addEventListener("click", (function() { console.log(this.response); }).bind(this));
        });
    }
    // Handle attributes
    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case 'data-qid':
                this.qid = newVal;
                break;
        }
    }
    // Return the response to the problem
    get response() {
        // Get the DIV holding all div.box's in the dropcol
        let targets = this.shadowRoot.querySelectorAll('td#dropcol > div.container > div.box');
        
        // Get text content of all boxes in dropcol
        let resp = [...targets].map(targ => targ.innerText.trim());

        return resp;
    }
    // Reset the problem
    onReset() {
        // Reset the problem
        let dragcol = document.querySelector(`q-orderoptions[data-qid='${this.qid}']`).shadowRoot.querySelector('td#dragcol div.container');

        // Get all source elements in the dropcol and move back to the dragcol
        let dropcol = document.querySelector(`q-orderoptions[data-qid='${this.qid}']`).shadowRoot.querySelector('td#dropcol div.container');
        let srcs = dropcol.querySelectorAll('div.source');
        let sarr = [...srcs];   // Spread into Array
        shuffle(sarr);          // Randomize order and move back to dragcol
        sarr.forEach(src => dragcol.appendChild(src));

        let items = document.querySelector(`q-orderoptions[data-qid='${this.qid}']`).shadowRoot.querySelectorAll('div.box');
        items.forEach(item => { 
            item.classList.remove('over');
            item.style.opacity = '1';
        });

        // Output element
        let tdout = this.shadowRoot.querySelector('td#soln');
        tdout.style['background-color'] = "";
        tdout.innerHTML = "";
    }
    // Method to handle click event by comparing solution set options to entered values.
    onCheck() {
        //this.soln.forEach( (line) => console.log(line.trim()) );
        //this.getSolution().forEach( (line) => console.log(line.trim()) );
        const soln = this.soln;
        const resp = this.response;

        let matches = true;

        if (soln.length !== resp.length) {
            matches = false;
        } else {
            for (let i = 0; i < soln.length; i++) {
                if (soln[i] !== resp[i]) {
                    matches = false;
                    break;
                }
            }
        }

        // Output element
        let tdout = this.shadowRoot.querySelector('td#soln');

        // Indicate result
        if (matches) {
            tdout.style['background-color'] = "lightgreen";
            tdout.innerHTML = "✔️Correct";
        } else {
            tdout.style['background-color'] = "lightpink";
            tdout.innerHTML = "✖️Please try again";
        }
    }

    // Inspried by https://web.dev/drag-and-drop/
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
        //let items = this.shadowRoot.querySelectorAll('div.box');
        let items = document.querySelector(`q-orderoptions[data-qid='${this.qid}']`).shadowRoot.querySelectorAll('div.box');
        items.forEach(item => { item.classList.remove('over'); });
    }
}
customElements.define("q-orderoptions", QOrderOptions);

// ---------------------------------------------------------------  
// 6. Matching Problem
class QMatching extends HTMLElement {
    static get observedAttributes() { return ['data-qid']; }
    
    // Constructor
    constructor(qid, qtitle, prompt, config) {
        super();
        this.qid    = qid    || "Q##";
        this.qtitle = qtitle || 'Matching';
        this.prompt = prompt || "<p>Match the left column with the right column</p>";
        this.config = config || {};
        this.dragSrcEl = null;

        // Create and build up shadow DOM
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <style>
            .container {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                gap: 0px;
            }
            .box {
                cursor: move;
                border: 1px solid #EEE;
                border-radius: .3em;
                background-color: whitesmoke;
                padding: 10px;
            }
            .box.over {
                background-color: white;
                /* border: 2px dotted #666; */
            }
            .source {
                background-color: gold;
            }
            .target {
                background-color: lightblue;
            }
            [draggable] {
                user-select: none;
            }
            pre {
                background-color: whitesmoke;
                margin: 0;
                padding: 0 0 0 10px;
            }
            code, .hljs {
                font-family: 'Courier New', Courier, monospace !important;
                font-weight: bold;
                line-height: 1.5em;
            }
            button#bReset, button#bCheck {
                width: 50px;
            }
            .hljs-number   { color: brown; }
            .hljs-string   { color: #444; }
            .hljs-type     { color: darkred; }
            .hljs-comment  { color: darkgreen; }
            .hljs-keyword, .hljs-operator { color: darkblue; }
        </style>
        <div id="prob">
        <div id="title" style="font-weight:bold;"></div>
        <div id="prompt"></div>

        <table><tr>
        <td id="dragcol" valign="top" style="min-width:200px; background-color:whitesmoke; border: solid gold 2px; border-radius: 5px;">
        <td id="dropcol" valign="top" style="min-width:250px; border: solid lightblue 2px; border-radius: 5px;">
        </tr><tr>
        <td id="buttons" style="vertical-align:top; padding:10px; min-width:200px;">
        <button id="bCheck">Check</button> 
        <button id="bReset">Reset</button> 
        <!-- button id="bResp">Response</button --></td>
        <td id="soln" style="vertical-align:top; padding:10px; border-radius: 5px;"></td>
        </tr></table>

        </div>`;
    }

    // Config element after inserted to DOM
    connectedCallback() {
        // Ensure data-qid attribute is et on shadowRoot host node
        this.shadowRoot.host.setAttribute('data-qid', this.qid);

        // Do later, after everything loaded and hydrated
        // Get element content, wrap and substitute
        setTimeout( () => {

            // Get config, which is script type="application/json" node added by user to <q-matching> element
            let scriptNode = [...this.childNodes].find(node => node.nodeName === 'SCRIPT');
            if (scriptNode) { this.config = JSON.parse(scriptNode.textContent); }
            const conf = this.config;

            // Get container, which was inserted into shadowDOM by constructor
            const cont = this.shadowRoot.querySelector('#prob');    // Container is a div

            // Setup question title
            let qtitle = this.shadowRoot.querySelector('#title');
            if (conf.title) {
                qtitle.innerHTML = `${this.qid}) ${conf.title}`;
            } else {
                qtitle.innerHTML = `${this.qid}) ${this.qtitle}`;
            }
            // Add title
            //cont.querySelector("#title").innerHTML = `${this.qid}) Matching`;

            // Get prompt HTML, which is all non-script nodes added by user to <q-matching> element
            let promptNodes = [...this.childNodes].filter(node => node.nodeName !== 'SCRIPT' && node.textContent.trim().length > 0);

            // Replace all prompt nodes in prompt element under shadowRoot
            let prompt = this.shadowRoot.querySelector('#prompt');
            if (promptNodes.length > 0) {
                prompt.replaceChildren(...promptNodes);
            } else {
                prompt.innerHTML = this.prompt;
            }

            // Build and inject problem nodes into shadowDOM container
            let tmpElement = document.createElement('div');
            
            // Add dragcol elements
            let html = ['<div class="container">'];
            const keys = Object.keys(this.config.data);
            keys.forEach(key => html.push(`<div draggable="true" class="box source">${key}</div>`));
            html.push('</div></td>');
            tmpElement.innerHTML = html.join('\n');
            cont.querySelector("#dragcol").append(...tmpElement.childNodes);

            // Add dropcol elements
            html = ['<div class="container">'];
            
            // Randomize and add all values to first column
            const vals = Object.values(this.config.data);
            shuffle(vals);
            vals.forEach(val => html.push(`<div class="box target">${val}</div>`));
            html.push('</div>');

            // Add to dropcol
            tmpElement.innerHTML = html.join('\n');
            cont.querySelector("#dropcol").append(...tmpElement.childNodes);
            
            // Add dragging events to all boxes
            let dragitems = cont.querySelectorAll('td#dragcol > div.container > div.box');
            dragitems.forEach( (item) => {
                item.addEventListener('dragstart', this.doDragStart.bind(this), false);
                //item.addEventListener('dragenter', this.doDragEnter.bind(this), false);
                item.addEventListener('dragover',  this.doDragOver.bind(this),  false);
                item.addEventListener('dragleave', this.doDragLeave.bind(this), false);
                item.addEventListener('drop',      this.doDrop.bind(this),      false);
                item.addEventListener('dragend',   this.doDragEnd.bind(this),   false);
            });

            let dropitems = cont.querySelectorAll('td#dropcol > div.container > div.box');
            dropitems.forEach( (item) => {
            //    item.addEventListener('dragstart', this.doDragStart.bind(this), false);
            //    item.addEventListener('dragenter', this.doDragEnter.bind(this), false);
                item.addEventListener('dragover',  this.doDragOver.bind(this),  false);
                item.addEventListener('dragleave', this.doDragLeave.bind(this), false);
                item.addEventListener('drop',      this.doDrop.bind(this),      false);
            //    item.addEventListener('dragend',   this.doDragEnd.bind(this),   false);
            });

            const tddragcol = cont.querySelector('td#dragcol');
            tddragcol.addEventListener('dragover', this.doDragOver.bind(this),  false);
            tddragcol.addEventListener('drop',     this.doDrop.bind(this),      false);

            // Set event handler for [Check] and [Reset] buttons
            this.shadowRoot.querySelector("button#bCheck").addEventListener("click", this.onCheck.bind(this));
            this.shadowRoot.querySelector("button#bReset").addEventListener("click", this.onReset.bind(this));
            // this.shadowRoot.querySelector("button#bResp").addEventListener("click", (function() { console.log(this.response); }).bind(this));
            
            // Highlight individual lines of code
            //const blocks = cont.querySelectorAll('div[draggable] code')
            //blocks.forEach( block => hljs.highlightElement(block) );
        });
    }
    // Handle attributes
    attributeChangedCallback(attrName, oldVal, newVal) {
        //console.log(`attributeChangedCallback ${attrName} ${newVal}`);
        switch (attrName) {
            case 'data-qid':
                this.qid = newVal;
                break;
        }
    }
    // Get the current response as assigned
    get response() {
        // Get the DIV holding all div.box's in the dropcol
        const targets = this.shadowRoot.querySelectorAll('td#dropcol > div.container > div.box');
        
        let resp = {};
        // For all target boxes
        for (let targ of targets) {
            // Get the first text element in the target box
            let val = [...targ.childNodes].find(el => el.nodeType === Node.TEXT_NODE);
            
            let box = targ.querySelector('div.box.source'); // Get source box contained within, if any
            
            if (box) {                                      // Extract text from source box, if one found
                resp[box.textContent] = val.textContent;    // Add to response object
            }
        }
        return resp;
    }
    onReset() {
        // Reset the problem
        let dragcol = document.querySelector(`q-matching[data-qid='${this.qid}']`).shadowRoot.querySelector('td#dragcol div.container');

        // Get all source elements in the dropcol and move back to the dragcol
        let dropcol = document.querySelector(`q-matching[data-qid='${this.qid}']`).shadowRoot.querySelector('td#dropcol div.container');
        let srcs = dropcol.querySelectorAll('div.target div.source');
        let sarr = [...srcs];   // Spread NodeList into Array
        shuffle(sarr)           // Randomize order and move back to dragcol
        sarr.forEach(src => dragcol.appendChild(src));

        let items = document.querySelector(`q-matching[data-qid='${this.qid}']`).shadowRoot.querySelectorAll('div.box');
        items.forEach(item => { 
            item.classList.remove('over');
            item.style.opacity = '1';
        });

        // Output element
        let tdout = this.shadowRoot.querySelector('td#soln');
        tdout.style['background-color'] = "";
        tdout.innerHTML = "";
    }
    // Method to handle click event by comparing solution set options to entered values.
    onCheck() {
        const soln  = this.config.data;
        const resp  = this.response;

        // Check that every key in solution has key in response
        // and that every response key-value matches value in solution
        let matches  = true;
        let complete = true;

        if (Object.keys(soln).length !== Object.keys(resp).length) {
            complete = false;
        } else {
            for (let k of Object.keys(soln)) {
                if (!resp.hasOwnProperty(k)) { matches = false; break; }
                if (resp[k] !== soln[k]) { matches = false; break; }
            }
        }

        // Output element
        let tdout = this.shadowRoot.querySelector('td#soln');

        // Indicate result
        if (!complete) {
            tdout.style['background-color'] = "lightpink";
            tdout.innerHTML = "✖️Please answer all questions";
        } else if (!matches) {
            tdout.style['background-color'] = "lightpink";
            tdout.innerHTML = "✖️Please try again";
        } else {
            tdout.style['background-color'] = "lightgreen";
            tdout.innerHTML = "✔️Correct";
        }
    }

    // Inspried by https://web.dev/drag-and-drop/
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
    //doDragEnter(e) {
        //console.log(`doDragEnter: ${e.currentTarget.innerText}`);
        //e.currentTarget.closest('.box').classList.add('over');
        //this.dragSrcEl.classList.add('over');
    //}
    doDragLeave(e) {
        //console.log(`doDragLeave: ${e.currentTarget.innerText}`);
        e.currentTarget.closest('.box').classList.remove('over');
        this.dragSrcEl.closest('.box').classList.remove('over');
    }
    doDrop(e) {
        //console.log(`doDropTarget: ${e.currentTarget.innerText}`);
        //console.log(e.currentTarget.tagName,
        //    e.currentTarget.innerText,
        //    e.currentTarget.classList.contains('target'));
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
        let items = document.querySelector(`q-matching[data-qid='${this.qid}']`).shadowRoot.querySelectorAll('div.box');
        items.forEach(item => { item.classList.remove('over'); });
    }
}
customElements.define("q-matching", QMatching);

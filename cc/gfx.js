// gfx.js

// TODO:
// Polygon
// Polyline
// Path
// TextPath (textPath)
// TSpan (tspan)

// =========================================================================
// Helper Functions

// Convert event object clientX and clientY to coordinates of owner SVG
function _svgCoords(ev) {
    let svg = ev.target.ownerSVGElement;        // Get SVG element
    if (!svg) svg = ev.target;                  // If null, probably the target itself is the svg element
    let pt = svg.createSVGPoint();              // Create an SVGPoint
    pt.x = ev.clientX; pt.y = ev.clientY;       // Init point
    const ctm = svg.getScreenCTM().inverse();   // Get the inverse of the Screen CTM
    const svgPt = pt.matrixTransform(ctm);      // Transform the point to SVG space
    return {x:svgPt.x, y:svgPt.y};              // Return plain object so serializes to JSON
};

// =========================================================================
// Graphic classes

// Canvas class 
class Canvas {
    // private fields
    #propagateEvents    = true;
    #domousedown        = null;         // Custom event callback
    #domouseup          = null;
    #domousemove        = null;
    #domouseenter       = null;
    #domouseleave       = null;

    _root               = null;         // Base SVG Group element
    data                = new Map();    // Custom data properties

    constructor(id='_cvs') {
        this._root = document.getElementById(id);
        if (!this._root) { throw new Error(`SVG container with id "${id}" not found.`); }

        // Set mouse events for this object by setting mouse events for underlying group, 
        // with default behavior followed by callback function invocation, if any.
        this._root.onmousedown = function(ev) {
            if (this.#domousedown) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousedown(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseup = function(ev) {
            if (this.#domouseup) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseup(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseenter = function(ev) {
            if (this.#domouseenter) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseenter(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseleave = function(ev) {
            if (this.#domouseleave) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseleave(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmousemove = function(ev) {
            if (this.#domousemove) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousemove(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);

        // Suppress contect menu
        this._root.addEventListener("contextmenu", (ev) => { ev.preventDefault(); });  // No context menu
    }

    // Getters and Setters
    // Sets boolean flag to indicate if this element should allow or stop event bubbling 
    // up the element hierarchy after capture.
    set propagateEvents(b)  { this.#propagateEvents = b; }
    get propagateEvents()   { return this.#propagateEvents; }

    // Setters for mouse event custom callbacks
    set onmousedown(cb)     { this.#domousedown = cb; };
    set onmouseup(cb)       { this.#domouseup = cb; };
    set onmouseenter(cb)    { this.#domouseenter = cb; };
    set onmouseleave(cb)    { this.#domouseleave = cb; };
    set onmousemove(cb)     { this.#domousemove = cb; };

    // Methods
    clear() { this._root.replaceChildren(); }                   // Deletes all SVG elementss
};
// Graphic is abstract superclass for all graphic SVG elements
class Graphic {
    constructor() {};

    // Add this element to a Canvas.
    // Provides subclass opportunity to override to add custom behavior
    addTo( cvs ) { cvs._root.appendChild( this._root ); }

    // Move this element to the back of the stack
    toBack() {
        this._root.ownerSVGElement.insertBefore(this._root, this._root.ownerSVGElement.firstChild);
    }
}
// Group Class - Groups other shape classes
class Group extends Graphic {
    // private fields
    #propagateEvents    = true;
    #domousedown        = null;         // Custom event callback
    #domouseup          = null;
    #domousemove        = null;
    #domouseenter       = null;
    #domouseleave       = null;
    // public fields
    _root               = null;         // Base SVG Group element
    children            = [];           // Array of contained SVG elements
    data                = new Map();    // Custom data properties

    constructor(id) {
        super();

        // Base element
        this._root = document.createElementNS("http://www.w3.org/2000/svg", "g");
        if (id) this._root.setAttributeNS(null, "id", id);

        // Set mouse events for this object by setting mouse events for underlying group, 
        // with default behavior followed by callback function invocation, if any.
        this._root.onmousedown = function(ev) {
            if (this.#domousedown) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousedown(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseup = function(ev) {
            if (this.#domouseup) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseup(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseenter = function(ev) {
            if (this.#domouseenter) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseenter(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseleave = function(ev) {
            if (this.#domouseleave) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseleave(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmousemove = function(ev) {
            if (this.#domousemove) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousemove(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
    }

    // Getters and Setters
    set fill(c)         { for (const child of this.children) { child.fill = c; } }
    set fillOpacity(o)  { for (const child of this.children) { child.fillOpacity = o; } }
    set stroke(s)       { for (const child of this.children) { child.stroke = s; } }
    set strokeWidth(w)  { for (const child of this.children) { child.strokeWidth = w; } }

    // Sets boolean flag to indicate if this element should allow or stop event bubbling 
    // up the element hierarchy after capture.
    set propagateEvents(b)  { this.#propagateEvents = b; }
    get propagateEvents()   { return this.#propagateEvents; }

    // Setters for mouse event custom callbacks
    set onmousedown( cb )   { this.#domousedown = cb; };
    set onmouseup( cb )     { this.#domouseup = cb; };
    set onmouseenter( cb )  { this.#domouseenter = cb; };
    set onmouseleave( cb )  { this.#domouseleave = cb; };
    set onmousemove (cb )   { this.#domousemove = cb; };

    // Methods

    // Add element to SVG group and internal array
    add(ob) {
        this.children.push(ob);
        this._root.appendChild(ob._root);
    }

    // Removes underlying SVG elements. 
    // No destructors so mush call before losing reference to object.
    remove() {
        this.children = [];
        this._root.remove(); 
    };

    // scale(sx, sy) {
    //     for (const child of this.children) { child.scale(sx, sy); }
    // };

    // Get the bounding box of the element after transformations applied in SVG coordinates
    getTransformedBBox() {
        // 1. Get the untransformed local bounding box
        const bbox = this._root.getBBox();

        // 2. Parent <svg> element
        const svg = this._root.ownerSVGElement;
        if (!svg) return;

        // 3. Compute the transformation matrix from the element to the screen
        const elementCTM = this._root.getScreenCTM();

        // 4. Compute the transformation matrix from the root SVG to the screen
        const svgCTM = svg.getScreenCTM();

        // 5. Calculate the relative matrix: Element -> Screen -> Root SVG
        const matrix = svgCTM.inverse().multiply(elementCTM);

        // 6. Create points for all 4 corners of the local bounding box
        const points = [
            svg.createSVGPoint(),
            svg.createSVGPoint(),
            svg.createSVGPoint(),
            svg.createSVGPoint()
        ];

        points[0].x = bbox.x; points[0].y = bbox.y;
        points[1].x = bbox.x + bbox.width; points[1].y = bbox.y;
        points[2].x = bbox.x + bbox.width; points[2].y = bbox.y + bbox.height;
        points[3].x = bbox.x; points[3].y = bbox.y + bbox.height;

        // 7. Transform each corner point and track the true min/max bounds
        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;

        points.forEach(pt => {
            const transformedPt = pt.matrixTransform(matrix);
            if (transformedPt.x < minX) minX = transformedPt.x;
            if (transformedPt.x > maxX) maxX = transformedPt.x;
            if (transformedPt.y < minY) minY = transformedPt.y;
            if (transformedPt.y > maxY) maxY = transformedPt.y;
        });

        // 8. Return the final transformed coordinates
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    };

    // Tell each each member of group to save current location as the start location of the drag.
    _dragStart() { 
        for (const child of this.children) { child._dragStart(); }
     };

    // Move to the relative location of start + offset
    _dragOffset(dx, dy) {
        for (const child of this.children) { child._dragOffset(dx, dy); }
    }
};
// Ellipse Class
class Ellipse extends Graphic {
    // private fields
    #propagateEvents    = true;
    #domousedown        = null;         // Custom callback
    #domouseup          = null;
    #domousemove        = null;
    #domouseenter       = null;
    #domouseleave       = null;

    _root               = null;         // Base SVG Ellipse element
    data                = new Map();    // Custom data properties

    // Constructor
    constructor(cx, cy, rx, ry, id) {
        super();

        // Root ellipse element
        this._root = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        if (id) this._root.setAttributeNS(null, "id", id);
        this.cx = cx;
        this.cy = cy;
        this.rx = rx;
        this.ry = ry;
        this.fill = "white";
        this.stroke = "black";

        // Set mouse events for this object by setting mouse events for underlying rect, 
        // with default behavior steps followed by callback function invocation, if any.
        this._root.onmousedown = function(ev) {
            if (this.#domousedown) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousedown(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseup = function(ev) {
            if (this.#domouseup) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseup(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseenter = function(ev) {
            if (this.#domouseenter) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseenter(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseleave = function(ev) {
            if (this.#domouseleave) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseleave(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmousemove = function(ev) {
            if (this.#domousemove) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousemove(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
    };
    // Getters and Setters
    set cx(x)           { this._root.setAttributeNS(null, "cx", x); }
    get cx()            { return parseFloat(this._root.getAttributeNS(null, "cx")); }
    set cy(y)           { this._root.setAttributeNS(null, "cy", y); }
    get cy()            { return parseFloat(this._root.getAttributeNS(null, "cy")); }
    set rx(_r)          { this._root.setAttributeNS(null, "rx", _r); }
    get rx()            { return parseFloat(this._root.getAttributeNS(null, "rx")); }
    set ry(_r)          { this._root.setAttributeNS(null, "ry", _r); }
    get ry()            { return parseFloat(this._root.getAttributeNS(null, "ry")); }
    set width(w)        { this._root.setAttributeNS(null, "width", w); }
    get width()         { return parseFloat(this._root.getAttributeNS(null, "width")); }
    set height(h)       { this._root.setAttributeNS(null, "height", h); }
    get height()        { return parseFloat(this._root.getAttributeNS(null, "height")); }
    set fill(c)         { this._root.setAttributeNS(null, "fill", c); }
    get fill()          { return this._root.getAttributeNS(null, "fill"); }
    set fillOpacity(o)  { this._root.setAttributeNS(null, "fill-opacity", o); }
    get fillOpacity()   { return this._root.getAttributeNS(null, "fill-opacity"); }
    set stroke( s )     { this._root.setAttributeNS(null, "stroke", s); }
    get stroke()        { return this._root.getAttributeNS(null, "stroke"); }
    set strokeWidth(w)  { this._root.setAttributeNS(null, "stroke-width", w); }
    get strokeWidth()   { return this._root.getAttributeNS(null, "stroke-width"); }

    // Sets boolean flag to indicate if this element should allow or stop event bubbling 
    // up the element hierarchy after capture.
    set propagateEvents(b)  { this.#propagateEvents = b; }
    get propagateEvents()   { return this.#propagateEvents; }

    // Setters for mouse event custom callbacks
    set onmousedown(cb)     { this.#domousedown = cb; };
    set onmouseup(cb)       { this.#domouseup = cb; };
    set onmouseenter(cb)    { this.#domouseenter = cb; };
    set onmouseleave(cb)    { this.#domouseleave = cb; };
    set onmousemove(cb)     { this.#domousemove = cb; };

    // Methods
    remove() { this._root.remove(); };

    // Get the bounding box of the element after transformations applied in SVG coordinates
    getTransformedBBox() {
        // 1. Get the untransformed local bounding box
        const bbox = this._root.getBBox();

        // 2. Parent <svg> element
        const svg = this._root.ownerSVGElement;

        // 3. Compute the transformation matrix from the element to the screen
        const elementCTM = this._root.getScreenCTM();

        // 4. Compute the transformation matrix from the root SVG to the screen
        const svgCTM = svg.getScreenCTM();

        // 5. Calculate the relative matrix: Element -> Screen -> Root SVG
        const matrix = svgCTM.inverse().multiply(elementCTM);

        // 6. Create points for all 4 corners of the local bounding box
        const points = [
            svg.createSVGPoint(),
            svg.createSVGPoint(),
            svg.createSVGPoint(),
            svg.createSVGPoint()
        ];

        points[0].x = bbox.x; points[0].y = bbox.y;
        points[1].x = bbox.x + bbox.width; points[1].y = bbox.y;
        points[2].x = bbox.x + bbox.width; points[2].y = bbox.y + bbox.height;
        points[3].x = bbox.x; points[3].y = bbox.y + bbox.height;

        // 7. Transform each corner point and track the true min/max bounds
        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;

        points.forEach(pt => {
            const transformedPt = pt.matrixTransform(matrix);
            if (transformedPt.x < minX) minX = transformedPt.x;
            if (transformedPt.x > maxX) maxX = transformedPt.x;
            if (transformedPt.y < minY) minY = transformedPt.y;
            if (transformedPt.y > maxY) maxY = transformedPt.y;
        });

        // 8. Return the final transformed coordinates
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    };

    // Caches the start location of this shape when dragging starts.
    _dragStart() { this.__dragStart = {cx:this.cx, cy:this.cy} };

    // Received the offset from the drag start location and moves shape relative to it's start. 
    _dragOffset(dx, dy) {
        let dst = this.__dragStart;
        this.cx = dst.cx + dx;
        this.cy = dst.cy + dy;
    }
};
// Circle Class
class Circle extends Graphic {
    // private fields
    #propagateEvents    = true;
    #domousedown        = null;         // Custom callback
    #domouseup          = null;
    #domousemove        = null;
    #domouseenter       = null;
    #domouseleave       = null;

    _root               = null;         // Base SVG Circle element
    data                = new Map();    // Custom data properties

    // Constructor
    constructor(cx, cy, r, id) {
        super();

        // Root circle element
        this._root = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        if (id) this._root.setAttributeNS(null, "id", id);
        this.cx = cx;
        this.cy = cy;
        this.r  = r;
        this.fill = "white";
        this.stroke = "black";

        // Set mouse events for this object by setting mouse events for underlying rect, 
        // with default behavior steps followed by callback function invocation, if any.
        this._root.onmousedown = function(ev) {
            if (this.#domousedown) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousedown(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseup = function(ev) {
            if (this.#domouseup) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseup(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseenter = function(ev) {
            if (this.#domouseenter) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseenter(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseleave = function(ev) {
            if (this.#domouseleave) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseleave(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmousemove = function(ev) {
            if (this.#domousemove) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousemove(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
    };
    // Getters and Setters
    set cx( x )         { this._root.setAttributeNS(null, "cx", x); }
    get cx()            { return parseFloat(this._root.getAttributeNS(null, "cx")); }
    set cy(y)           { this._root.setAttributeNS(null, "cy", y); }
    get cy()            { return parseFloat(this._root.getAttributeNS(null, "cy")); }
    set r(r)            { this._root.setAttributeNS(null, "r", r); }
    get r()             { return parseFloat(this._root.getAttributeNS(null, "r")); }
    set width(w)        { this._root.setAttributeNS(null, "width", w); }
    get width()         { return parseFloat(this._root.getAttributeNS(null, "width")); }
    set height(h)       { this._root.setAttributeNS(null, "height", h); }
    get height()        { return parseFloat(this._root.getAttributeNS(null, "height")); }
    set fill(c)         { this._root.setAttributeNS(null, "fill", c); }
    get fill()          { return this._root.getAttributeNS(null, "fill"); }
    set fillOpacity(o)  { this._root.setAttributeNS(null, "fill-opacity", o); }
    get fillOpacity()   { return this._root.getAttributeNS(null, "fill-opacity"); }
    set stroke( s )     { this._root.setAttributeNS(null, "stroke", s); }
    get stroke()        { return this._root.getAttributeNS(null, "stroke"); }
    set strokeWidth(w)  { this._root.setAttributeNS(null, "stroke-width", w); }
    get strokeWidth()   { return this._root.getAttributeNS(null, "stroke-width"); }

    // Sets boolean flag to indicate if this element should allow or stop event bubbling 
    // up the element hierarchy after capture.
    set propagateEvents(b)  { this.#propagateEvents = b; }
    get propagateEvents()   { return this.#propagateEvents; }

    // Setters for mouse event custom callbacks
    set onmousedown(cb)     { this.#domousedown = cb; };
    set onmouseup(cb)       { this.#domouseup = cb; };
    set onmouseenter(cb)    { this.#domouseenter = cb; };
    set onmouseleave(cb)    { this.#domouseleave = cb; };
    set onmousemove(cb)     { this.#domousemove = cb; };

    // Methods
    remove() { this._root.remove(); };

    // Get the bounding box of the element after transformations applied in SVG coordinates
    getTransformedBBox() {
        // 1. Get the untransformed local bounding box
        const bbox = this._root.getBBox();

        // 2. Parent <svg> element
        const svg = this._root.ownerSVGElement;
        if (!svg) return;

        // 3. Compute the transformation matrix from the element to the screen
        const elementCTM = this._root.getScreenCTM();

        // 4. Compute the transformation matrix from the root SVG to the screen
        const svgCTM = svg.getScreenCTM();

        // 5. Calculate the relative matrix: Element -> Screen -> Root SVG
        const matrix = svgCTM.inverse().multiply(elementCTM);

        // 6. Create points for all 4 corners of the local bounding box
        const points = [
            svg.createSVGPoint(),
            svg.createSVGPoint(),
            svg.createSVGPoint(),
            svg.createSVGPoint()
        ];

        points[0].x = bbox.x; points[0].y = bbox.y;
        points[1].x = bbox.x + bbox.width; points[1].y = bbox.y;
        points[2].x = bbox.x + bbox.width; points[2].y = bbox.y + bbox.height;
        points[3].x = bbox.x; points[3].y = bbox.y + bbox.height;

        // 7. Transform each corner point and track the true min/max bounds
        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;

        points.forEach(pt => {
            const transformedPt = pt.matrixTransform(matrix);
            if (transformedPt.x < minX) minX = transformedPt.x;
            if (transformedPt.x > maxX) maxX = transformedPt.x;
            if (transformedPt.y < minY) minY = transformedPt.y;
            if (transformedPt.y > maxY) maxY = transformedPt.y;
        });

        // 8. Return the final transformed coordinates
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    };

    // Caches the start location of this shape when dragging starts.
    _dragStart() { this.__dragStart = {cx:this.cx, cy:this.cy} };

    // Received the offset from the drag start location and moves shape relative to it's start. 
    _dragOffset(dx, dy) {
        let dst = this.__dragStart;
        this.cx = dst.cx + dx;
        this.cy = dst.cy + dy;
    }
    // // Scale this element about its center
    // scale(sx, sy) {
    //     if (!sy) sy = sx;       // Allow one scale factor argument

    //     let bb = this.getTransformedBBox();
    //     let hw = 0.5*bb.width;
    //     let hh = 0.5*bb.height;

    //     // Create an isolated SVG transform object
    //     const cvs = this._root.ownerSVGElement;
    //     const xfrm = cvs.createSVGTransform();

    //     // Configure it to translate
    //     xfrm.setTranslate(-hw, -hh);
    //     xfrm.setScale(sx, sy);
    //     xfrm.setTranslate(hw, hh);

    //     // Append the new matrix operation to the element's existing transform list
    //     this._root.transform.baseVal.appendItem(xfrm);
    // }
};
// Rectangle Wrapper Class
class Rectangle extends Graphic {
    // private fields
    #propagateEvents    = true;
    #domousedown        = null;         // Custom callback
    #domouseup          = null;
    #domousemove        = null;
    #domouseenter       = null;
    #domouseleave       = null;

    _root               = null;         // Rect element
    data                = new Map();    // Custom data properties

    // Constructor
    constructor(x, y, w, h, id) {
        super();

        // Rectangle
        this._root = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        if (id) this._root.setAttributeNS(null, "id", id);
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.fill = "white";
        this.stroke = "black";

        // Set mouse events for this object by setting mouse events for underlying rect, 
        // with default behavior steps followed by callback function invocation, if any.
        this._root.onmousedown = function(ev) {
            if (this.#domousedown) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousedown(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseup = function(ev) {
            if (this.#domouseup) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseup(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseenter = function(ev) {
            if (this.#domouseenter) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseenter(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseleave = function(ev) {
            if (this.#domouseleave) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseleave(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmousemove = function(ev) {
            if (this.#domousemove) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousemove(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
    };
    // Getters and Setters

    // Sets boolean flag to indicate if this element should allow or stop event bubbling 
    // up the element hierarchy after capture.
    set propagateEvents(b)  { this.#propagateEvents = b; }
    get propagateEvents()   { return this.#propagateEvents; }

    // Setters for mouse event custom callbacks
    set onmousedown(cb)     { this.#domousedown = cb; };
    set onmouseup(cb)       { this.#domouseup = cb; };
    set onmouseenter(cb)    { this.#domouseenter = cb; };
    set onmouseleave(cb)    { this.#domouseleave = cb; };
    set onmousemove(cb)     { this.#domousemove = cb; };

    // Rectangle specific
    set x(_x)           { this._root.setAttributeNS(null, "x", _x); }
    get x()             { return parseFloat(this._root.getAttributeNS(null, "x")); }
    set y(_y)           { this._root.setAttributeNS(null, "y", _y); }
    get y()             { return parseFloat(this._root.getAttributeNS(null, "y")); }
    set rx(_rx)         { this._root.setAttributeNS(null, "rx", _rx); }
    get rx()            { return parseFloat(this._root.getAttributeNS(null, "rx")); }
    set ry(_ry)         { this._root.setAttributeNS(null, "ry", _ry); }
    get ry()            { return parseFloat(this._root.getAttributeNS(null, "ry")); }
    set width(w)        { this._root.setAttributeNS(null, "width", w); }
    get width()         { return parseFloat(this._root.getAttributeNS(null, "width")); }
    set height(h)       { this._root.setAttributeNS(null, "height", h); }
    get height()        { return parseFloat(this._root.getAttributeNS(null, "height")); }
    set fill(c)         { this._root.setAttributeNS(null, "fill", c); }
    get fill()          { return this._root.getAttributeNS(null, "fill"); }
    set fillOpacity(o)  { this._root.setAttributeNS(null, "fill-opacity", o); }
    get fillOpacity()   { return this._root.getAttributeNS(null, "fill-opacity"); }
    set stroke(_s )     { this._root.setAttributeNS(null, "stroke",_s); }
    get stroke()        { return this._root.getAttributeNS(null, "stroke"); }
    set strokeWidth(w)  { this._root.setAttributeNS(null, "stroke-width", w); }
    get strokeWidth()   { return this._root.getAttributeNS(null, "stroke-width"); }

    // Methods
    remove() { this._root.remove(); };
};
// Line Wrapper Class
class Line extends Graphic {
    // private fields
    #propagateEvents    = true;
    #domousedown        = null;         // Custom callback
    #domouseup          = null;
    #domousemove        = null;
    #domouseenter       = null;
    #domouseleave       = null;

    _root               = null;         // Rect element
    data                = new Map();    // Custom data properties

    // Constructor
    constructor(x1, y1, x2, y2, id) {
        super();

        // Rectangle
        this._root = document.createElementNS("http://www.w3.org/2000/svg", "line");
        if (id) this._root.setAttributeNS(null, "id", id);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.stroke = "black";

        // Set mouse events for this object by setting mouse events for underlying rect, 
        // with default behavior steps followed by callback function invocation, if any.
        this._root.onmousedown = function(ev) {
            if (this.#domousedown) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousedown(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseup = function(ev) {
            if (this.#domouseup) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseup(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseenter = function(ev) {
            if (this.#domouseenter) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseenter(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseleave = function(ev) {
            if (this.#domouseleave) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseleave(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmousemove = function(ev) {
            if (this.#domousemove) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousemove(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
    };
    // Getters and Setters

    // Sets boolean flag to indicate if this element should allow or stop event bubbling 
    // up the element hierarchy after capture.
    set propagateEvents(b)  { this.#propagateEvents = b; }
    get propagateEvents()   { return this.#propagateEvents; }

    // Setters for mouse event custom callbacks
    set onmousedown(cb)     { this.#domousedown = cb; };
    set onmouseup(cb)       { this.#domouseup = cb; };
    set onmouseenter(cb)    { this.#domouseenter = cb; };
    set onmouseleave(cb)    { this.#domouseleave = cb; };
    set onmousemove(cb)     { this.#domousemove = cb; };

    // Rectangle specific
    set x1(_x)          { this._root.setAttributeNS(null, "x1", _x); }
    get x1()            { return parseFloat(this._root.getAttributeNS(null, "x1")); }
    set y1(_y)          { this._root.setAttributeNS(null, "y1", _y); }
    get y1()            { return parseFloat(this._root.getAttributeNS(null, "y1")); }
    set x2(_x)          { this._root.setAttributeNS(null, "x2", _x); }
    get x2()            { return parseFloat(this._root.getAttributeNS(null, "x2")); }
    set y2(_y)          { this._root.setAttributeNS(null, "y2", _y); }
    get y2()            { return parseFloat(this._root.getAttributeNS(null, "y2")); }
    set fill(c)         { this._root.setAttributeNS(null, "fill", c); }
    get fill()          { return this._root.getAttributeNS(null, "fill"); }
    set fillOpacity(o)  { this._root.setAttributeNS(null, "fill-opacity", o); }
    get fillOpacity()   { return this._root.getAttributeNS(null, "fill-opacity"); }
    set stroke(_s )     { this._root.setAttributeNS(null, "stroke",_s); }
    get stroke()        { return this._root.getAttributeNS(null, "stroke"); }
    set strokeWidth(w)  { this._root.setAttributeNS(null, "stroke-width", w); }
    get strokeWidth()   { return this._root.getAttributeNS(null, "stroke-width"); }

    // Methods
    remove() { this._root.remove(); };
};
// Text Wrapper Class
class Text extends Graphic {
    // private fields
    #propagateEvents    = true;
    #domousedown        = null;         // Custom callback
    #domouseup          = null;
    #domousemove        = null;
    #domouseenter       = null;
    #domouseleave       = null;

    _root               = null;         // Text element
    data                = new Map();    // Custom data properties

    // Constructor
    constructor(text, x, y, id) {
        super();

        // Text
        this._root = document.createElementNS("http://www.w3.org/2000/svg", "text");
        if (id) this._root.setAttributeNS(null, "id", id);
        this._root.style.userSelect= 'none';
        this.x = x;
        this.y = y;
        this.fill = "black";
        this.fontFamily = "sans-serif";
        this.fontSize = "32px";

        // Set mouse events for this object by setting mouse events for underlying rect, 
        // with default behavior steps followed by callback function invocation, if any.
        this._root.onmousedown = function(ev) {
            if (this.#domousedown) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousedown(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseup = function(ev) {
            if (this.#domouseup) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseup(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseenter = function(ev) {
            if (this.#domouseenter) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseenter(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseleave = function(ev) {
            if (this.#domouseleave) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseleave(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmousemove = function(ev) {
            if (this.#domousemove) {
                //ev.preventDefault();  // ?
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousemove(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);

    };
    // Getters and Setters
    // Sets boolean flag to indicate if this element should allow or stop event bubbling 
    // up the element hierarchy after capture.
    set propagateEvents(b)  { this.#propagateEvents = b; }
    get propagateEvents()   { return this.#propagateEvents; }

    // Setters for mouse event custom callbacks
    set onmousedown(cb )    { this.#domousedown = cb; };
    set onmouseup(cb)       { this.#domouseup = cb; };
    set onmouseenter(cb)    { this.#domouseenter = cb; };
    set onmouseleave(cb)    { this.#domouseleave = cb; };
    set onmousemove(cb)     { this.#domousemove = cb; };

    // Text specific
    set x(_x)           { this._root.setAttributeNS(null, "x", _x); }
    get x()             { return parseFloat(this._root.getAttributeNS(null, "x")); }
    set y(_y)           { this._root.setAttributeNS(null, "y", _y); }
    get y()             { return parseFloat(this._root.getAttributeNS(null, "y")); }
    set width(w)        { this._root.setAttributeNS(null, "width", w); }
    get width()         { return parseFloat(this._root.getAttributeNS(null, "width")); }
    set height(h)       { this._root.setAttributeNS(null, "height", h); }
    get height()        { return parseFloat(this._root.getAttributeNS(null, "height")); }
    set fill(c)         { this._root.setAttributeNS(null, "fill", c); }
    get fill()          { return this._root.getAttributeNS(null, "fill"); }
    set fillOpacity(o)  { this._root.setAttributeNS(null, "fill-opacity", o); }
    get fillOpacity()   { return this._root.getAttributeNS(null, "fill-opacity"); }
    set stroke(s)       { this._root.setAttributeNS(null, "stroke", s); }
    get stroke()        { return this._root.getAttributeNS(null, "stroke"); }
    set strokeWidth(w)  { this._root.setAttributeNS(null, "stroke-width", w); }
    get strokeWidth()   { return this._root.getAttributeNS(null, "stroke-width"); }
    set text(txt)       { this._root.innerHTML = txt; }
    get text()          { return this._root.innerHTML; }
    set textLength(r)   { this._root.setAttributeNS(null, "textLength", textLength); }
    get textLength()    { return this._root.getAttributeNS(null, "textLength"); }
    set fontFamily(f)   { this._root.setAttributeNS(null, "font-family", f); }
    get fontFamily()    { return this._root.getAttributeNS(null, "font-family"); }
    set fontSize(sz)    { this._root.setAttributeNS(null, "font-size", sz); }
    get fontSize()      { this._root.getAttributeNS(null, "font-size"); }

    // Methods
    remove() { this._root.remove(); };
};
// Image
class Image extends Graphic {
    // private fields
    #propagateEvents    = true;
    #domousedown        = null;         // Custom callback
    #domouseup          = null;
    #domousemove        = null;
    #domouseenter       = null;
    #domouseleave       = null;

    _root               = null;         // Rect element
    data                = new Map();    // Custom data properties

    // Constructor
    constructor(href, x, y, w, h, id) {
        super();

        // Image
        this._root = document.createElementNS("http://www.w3.org/2000/svg", "image");
        if (id) this._root.setAttributeNS(null, "id", id);
        this.href = href;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;

        // Set mouse events for this object by setting mouse events for underlying rect, 
        // with default behavior steps followed by callback function invocation, if any.
        this._root.onmousedown = function(ev) {
            if (this.#domousedown) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousedown(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseup = function(ev) {
            if (this.#domouseup) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseup(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseenter = function(ev) {
            if (this.#domouseenter) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseenter(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseleave = function(ev) {
            if (this.#domouseleave) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseleave(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmousemove = function(ev) {
            if (this.#domousemove) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousemove(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
    };
    // Getters and Setters

    // Sets boolean flag to indicate if this element should allow or stop event bubbling 
    // up the element hierarchy after capture.
    set propagateEvents(b)  { this.#propagateEvents = b; }
    get propagateEvents()   { return this.#propagateEvents; }

    // Setters for mouse event custom callbacks
    set onmousedown(cb)     { this.#domousedown = cb; };
    set onmouseup(cb)       { this.#domouseup = cb; };
    set onmouseenter(cb)    { this.#domouseenter = cb; };
    set onmouseleave(cb)    { this.#domouseleave = cb; };
    set onmousemove(cb)     { this.#domousemove = cb; };

    // Image specific
    set href(h)         { this._root.setAttributeNS(null, "href", h); }
    get href()          { return this._root.getAttributeNS(null, "href"); }
    set x(_x)           { this._root.setAttributeNS(null, "x", _x); }
    get x()             { return parseFloat(this._root.getAttributeNS(null, "x")); }
    set y(_y)           { this._root.setAttributeNS(null, "y", _y); }
    get y()             { return parseFloat(this._root.getAttributeNS(null, "y")); }
    set width(w)        { this._root.setAttributeNS(null, "width", w); }
    get width()         { return parseFloat(this._root.getAttributeNS(null, "width")); }
    set height(h)       { this._root.setAttributeNS(null, "height", h); }
    get height()        { return parseFloat(this._root.getAttributeNS(null, "height")); }

    // Methods
    remove() { this._root.remove(); };
};

// =========================================================================
// Widgets

// Button Wrapper class
class Button extends Graphic {
    // private fields
    #rect               = null;         // Rect element
    #text               = null;         // Text element for label
    #propagateEvents    = false;
    #domousedown        = null;         // Custom callback
    #domouseup          = null;
    #domousemove        = null;
    #domouseenter       = null;
    #domouseleave       = null;

    _root               = null;         // Button group holding rect and text
    data                = new Map();    // Custom data properties

    constructor(lbl, x, y, w, h, id) {
        super();

        // Group to hold button elements 
        this._root = document.createElementNS("http://www.w3.org/2000/svg", "g");
        if (id) this._root.id = id;
        this._root.setAttributeNS(null, 'transform', `translate(${x},${y})`);
        // let attrs = {'x':x, 'y':y};
        // for (const [key, value] of Object.entries(attrs)) { this._root.setAttributeNS(null, key, value); }    

        // Rectangle
        this.#rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        let attrs = {'x':0, 'y':0, 'rx':10, 'ry':10, 'width':w, 'height':h, 'fill':'lightgray', 'stroke':'black'}
        for (const [key, value] of Object.entries(attrs)) { this.#rect.setAttributeNS(null, key, value); }

        // Label
        this.#text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        this.#text.style.pointerEvents = "none";     // Stop label from receiving any mouse events
        attrs = {'x':0, 'y':h, 'width':w, 'height':h, 'fill':'black', 'stroke':'black'}
        for (const [key, value] of Object.entries(attrs)) { this.#text.setAttributeNS(null, key, value); }
        this.#text.innerHTML = lbl;
        
        // Set mouse events for this object by setting mouse events for underlying group, 
        // with default behavior steps followed by callback function invocation, if any.
        this._root.onmousedown = function(ev) {
            this.fill = "#a3a3a3";
            if (this.#domousedown) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousedown(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseup = function(ev) {
            this.fill = "#bbbbbb";
            if (this.#domouseup) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseup(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseenter = function(ev) {
            this.fill = "#bbbbbb";
            if (this.#domouseenter) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseenter(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmouseleave = function(ev) {
            this.fill = "lightgray";
            if (this.#domouseleave) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domouseleave(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);
        this._root.onmousemove = function(ev) {
            if (this.#domousemove) {
                if (!this.#propagateEvents) ev.stopPropagation();
                const pt = _svgCoords(ev);
                this.#domousemove(pt.x, pt.y, ev.button, this);
            }
        }.bind(this);

        // Append to SVG element for metrics
        this._root.appendChild(this.#rect);
        this._root.appendChild(this.#text);

        // Initial label style
        this.fontFamily = "sans-serif";
        this.fontSize = "32px";
    }

    // Private helper function to layout label
    layout() {
        const rbb = this.#rect.getBBox();
        const tbb = this.#text.getBBox();
        this.#text.setAttributeNS(null, "x", rbb.x + 0.5*rbb.width - 0.5*tbb.width);
        this.#text.setAttributeNS(null, "y", rbb.y + 0.4*rbb.height + 0.5*tbb.height);
    }

    // Getters and Setters
    set x(_x)           { this._root.setAttributeNS(null, "x", _x); }
    get x()             { return parseFloat(this._root.getAttributeNS(null, "x")); }
    set y(_y)           { this._root.setAttributeNS(null, "y", _y); }
    get y()             { return parseFloat(this._root.getAttributeNS(null, "y")); }
    set rx(x)           { this.#rect.setAttributeNS(null, "rx", x); }
    get rx()            { return parseFloat(this.#rect.getAttributeNS(null, "rx")); }
    set ry(y)           { this.#rect.setAttributeNS(null, "ry", y); }
    get ry()            { return parseFloat(this.#rect.getAttributeNS(null, "ry")); }
    set width(w)        { this.#rect.setAttributeNS(null, "width", w); }
    get width()         { return parseFloat(this.#rect.getAttributeNS(null, "width")); }
    set height(h)       { this.#rect.setAttributeNS(null, "height", w); }
    get height()        { return parseFloat(this.#rect.getAttributeNS(null, "height")); }
    set label(l)        { this.#text.innerHTML = l; this.layout(); }
    get label()         { return this.#text.innerHTML; }
    set fontFamily(f)   { this.#text.style.fontFamily = f; this.layout(); }
    get fontFamily()    { return this.#text.style.fontFamily; }
    set fontWeight(w)   { this.#text.style.fontWeight = w; this.layout(); }
    get fontWeight()    { return this.#text.style.fontWeight; }
    set fontSize(s)     { this.#text.style.fontSize = s; this.layout(); }
    get fontSize()      { return this.#text.style.fontSize; }
    set fill(c)         { this.#rect.setAttributeNS(null, "fill", c); }
    get fill()          { return this.#rect.getAttributeNS(null, "fill"); }
    set fillOpacity(o)  { this._root.setAttributeNS(null, "fill-opacity", o); }
    get fillOpacity()   { return this._root.getAttributeNS(null, "fill-opacity"); }
    
    // Sets boolean flag to indicate if this element should allow or stop event bubbling 
    // up the element hierarchy after capture.
    set propagateEvents(b)  { this.#propagateEvents = b; }
    get propagateEvents()   { return this.#propagateEvents; }
    
    // Setters for mouse event custom callbacks
    set onmousedown( cb )   { this.#domousedown = cb; };
    set onmouseup( cb )     { this.#domouseup = cb; };
    set onmouseenter( cb )  { this.#domouseenter = cb; };
    set onmouseleave( cb )  { this.#domouseleave = cb; };
    set onmousemove (cb )   { this.#domousemove = cb; };

    // Methods
    remove() { this._root.remove(); };

    // Add this element to a Canvas.
    // Provides subclass opportunity to override to add custom behavior
    addTo( cvs ) { super.addTo(cvs); this.layout(); }

};

// Wrap a TextArea in a foreignObject to render in an svg
let TextArea  = function(x, y, w, h) {
    // Create the foreignObject element
    const fo = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    fo.setAttributeNS(null, "x", x);
    fo.setAttributeNS(null, "y", y);
    fo.setAttributeNS(null, "width", w);
    fo.setAttributeNS(null, "height", h);

    // Outer div for formatting on all plaatforms
    const div = document.createElement("div");
    div.style.width  = "99%";
    div.style.height = "99%";
    div.style.boxSizing = "border-box";
    div.style.border = "2px black solid";

    // Create the HTML textarea
    const ta = document.createElement("textarea");
    ta.style.width  = "100%";
    ta.style.height = "100%";
    ta.style.boxSizing = "border-box";
    ta.style.resize = "none";
    ta.style.outline = "none";
    ta.style.border = "none";

    // Create a reactive alias for this textarea value property named 'text'
    Object.defineProperty(ta, "text", {
        get() { return this.value; },
        set(txt) { this.value = txt; }
    });

    // Stops the event from reaching parent elements
    ta.addEventListener('mousedown', (ev) => {
        ev.stopPropagation();
    });

    // Add textarea to foreignObject, then to SVG
    div.appendChild(ta);
    fo.appendChild(div);
    // _svg().appendChild(fo);

    return fo;
};

// =========================================================================
// Other classes

// Timer class
class Timer {
    constructor(tps, callback) {
        this.elapsed = 0;           // Seconds eapsed
        this.interval = 1000/tps;   // Interval = milliseconds per tick
        this.id = null;             // ID of the internal timer
        this.running = false;
        this.callback = callback;
    }

    // Starts the timer or resumes it from pause
    start() {
        if (!this.running) {
            this.running = true;
            this.id = setInterval(() => {
                this.elapsed += this.interval;
                if (this.callback) this.callback(this.elapsed);
            }, this.interval);
        }
    }

    // Pauses the timer without resetting the elapsed value.
    pause() {
        if (this.running) {
            clearInterval(this.id);
            this.running = false;
        }
    }

    // Stops and resets the timer to zero.
    // Optionally resets the interval value.
    reset(itv = this.interval) {
        this.pause();
        this.interval = itv;
        this.elapsed = 0;
    }
}
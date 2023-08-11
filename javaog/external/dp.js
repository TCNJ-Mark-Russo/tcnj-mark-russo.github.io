/*
 * MFR 2023/04/23
 * TODO:
 * - Easing and Timeline
 * - Classes: Polyline, Path, Sprite, Sound
 * - implement all nullary constructors for default behavior
 * 
 * - AffineTranform and integration throughout
 * - More stable form of Heron's formula
 * 	 - See https://en.wikipedia.org/wiki/Heron%27s_formula#Numerical_stability
 * - Dimension, Point? No. Too easy to use an array pair
 * - Image setPixel()/getPixel() - No. Too inefficient. Need a different approach where you get a copy of the data in an array, update, and reset.
 * - Layers? Nah. Don't think anyone uses this feature anyway.
 */

/*
 * dp.js - DoodlePad for JavaScript
 * 
 * Author: Mark F. Russo, Ph.D.
 * Copyright (c) 2023-2023 Mark F. Russo
 * 
 * DoodlePad is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * DoodlePad is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with DoodlePad.  If not, see <http://www.gnu.org/licenses/>.
 */

// Utility Color class
class Color {
	constructor(r, g=-1, b=-1, a=255) {
		// When one arg given, create a grayscale color
		g = g >= 0? g: r;	// If no g arg, set to r
		b = b >= 0? b: r;	// If no b arg, set to r
		// Clamp
		this.r = Math.max(Math.min(r,255),0);
		this.g = Math.max(Math.min(g,255),0);
		this.b = Math.max(Math.min(b,255),0);
		this.a = Math.max(Math.min(a/255.0,1.0),0.0);
		
		// Cache string representation of Color
		this._updateStr();
	}

	// Cache string representation of Color
	_updateStr() {
		this._str = `rgba(${this.r},${this.g},${this.b},${this.a})`;
	}
	set red(r) {
		this.r = Math.max(Math.min(r,255),0);
		this._updateStr();
	}
	get red() {
		return this.r;
	}
	set green(g) {
		this.g = Math.max(Math.min(g,255),0);
		this._updateStr();
	}
	get green() {
		return this.g;
	}
	set blue(b) {
		this.b = Math.max(Math.min(b,255),0);
		this._updateStr();
	}
	get blue() {
		return this.b;
	}
	set alpha(a) {
		this.a = Math.max(Math.min(a/255.0,1.0),0.0);
		this._updateStr();
	}
	get alpha() {
		return Math.round(this.a * 255);
	}

	// Return a string representation
	toString() {
		return this._str;
	}
}

// Utility Font class
class Font {
	// Constants 
	static PLAIN  = 0;
	static BOLD   = 1;
	static ITALIC = 2;

	constructor(fontName, style, size) {
		this._fontName = fontName;
		this._style    = style;
		this._size     = size;
		this._updateStr();
	}
	// Cache string representation of Font
	_updateStr() {
		let sty = "", wei = "", siz = "";
		if (this._style === Font.ITALIC) { sty = "italic "; }
		if (this._style === Font.BOLD  ) { wei = "bold "; }
		if (Number.isInteger(this._size)) {
			siz = `${this._size}px `;
		} else {
			siz = `${this._size} `;
		}
		this._str = `${sty}${wei}${siz}${this._fontName}`;
	}
	toString() {
		return this._str;
	}
	get family() {
		return this._fontName;
	}
	set family(fam) {
		this._fontName = fam;
		this._updateStr();
	}
	get style() {
		return this._style;
	}
	set style(sty) {
		this._style = sty;
		this._updateStr();
	}
	get size() {
		return this._size;
	}
	set size(siz) {
		this._size = siz;
		this._updateStr();
	}
}

// Utility Affine Transformation class
class AffineTransform {
	constructor() {

	}
}

// Pad object
class Pad {

	// Creation of default Pad in Browser if does not exist
	// Always returns the same one
	static _padSingleton = null;
	static getPad() {
		if (Pad._padSingleton === null) {
			const cvs = document.createElement('canvas');
			cvs.id = '_dpcvs';
			document.body.appendChild(cvs);
			Pad._padSingleton = new Pad('_dpcvs', 600, 600);
		}
		return Pad._padSingleton;
	}

	constructor(id, width, height) {
		// Get the canvas to be managed by Pad and create drawing context
		this._canvas = document.getElementById(id);
		if (width)  this._canvas.width = width;
		if (height) this._canvas.height = height;		
		this._ctx = this._canvas.getContext("2d");
		this._ctx.lineCap = "round";
		this._ctx.willReadFrequently = true;
		this._canvas.tabIndex = 1;					// Needed to can get focus and receive keyboard events
		this._canvas.focus();

		// Hook up all mouse event managers to canvas events
		this._canvas.onmousemove  = this._mouseMoved.bind(this);
		this._canvas.onmousedown  = this._mousePressed.bind(this);
		this._canvas.onmouseup    = this._mouseReleased.bind(this);
		this._canvas.onclick      = this._mouseClicked.bind(this);
		this._canvas.ondblclick   = this._mouseDoubleClicked.bind(this);
		this._canvas.onmouseenter = this._mouseEntered.bind(this);
		this._canvas.onmouseleave = this._mouseExited.bind(this);
		this._canvas.onkeydown    = this._keyPressed.bind(this);
		this._canvas.onkeyup      = this._keyReleased.bind(this);
		// this._canvas.onkeypress   = this._keyTyped.bind(this);	// Deprecated

		// Off-screen, single-pixel canvas element used for hit testing
		this._hitCvs = new OffscreenCanvas(1, 1);
		// this._hitCvs = document.createElement('canvas');
		// this._hitCvs.width = this._hitCvs.height = 1;
		this._hitCtx = this._hitCvs.getContext("2d");
		this._hitCtx.willReadFrequently = true;
		this._suppressCrossDomainErrors = false;

		this._background    = new Color(255,255,255);
		this._backgroundStr = this._background.toString();
		this._immediateMode = true;
		this._eventsEnabled = true;
		this._lastDelegate  = null;		// WeakRef to last objects delegated mouseMoved event
		this._dragging      = false;	// Current state of dragging

		this._tickRate      = 1.0;		// Save timer ticks per second
        this._tickStart     = 0.0;		// Timestamp when ticking started
		this._intervalId    = null;		// Timer ID. Null if none.

		// Shape drawing list, bottom-to-top
		this.shapes = [];

		// If this is the first Pad object, make it the default
		if (Pad._padSingleton === null) { Pad._padSingleton = this; }
	}

	// Focus the canvas element
	focus() { this._canvas.focus(); }

	// width and height are getters/setters on internal canvas width and height

	get width()     { return this._canvas.width; }
	set width(w)    { this._canvas.width = w; }
	get height()    { return this._canvas.height; }
	set height(h)   { this._canvas.height = h; }

	get background(){ return this._background; }
	set background(clr) {
		if (!(clr instanceof Color)) { throw new Error("The background property accepts only instances of the Color class."); }
		this._background = clr;
		this._backgroundStr = this._background.toString();
	}
	setBackground(r,g,b,a) { this.background = new Color(r,g,b,a); }
	
	// Add a Shape to the end of the draw list
	addShape(s) {
		this.shapes.push(s);
		s._pad = this;
		this.redraw();	// Redraw once right away
	}
	// Add an iterable of Shapes to the draw list
	addShapes(shps) {
		for (let s of shps) {
			this.shapes.push(s);
			s._pad = this;
		}
		this.redraw();	// Redraw once right away
	}
	removeShape(s) {
		let idx = this.shapes.findIndex( (item) => item === s );
		if (idx >= 0) { this.shapes.splice(idx, 1); s._pad = null; 	}
		this.update();
	}

	// Move Shape s to end of draw list
	toFront(s) {
		let idx = this.shapes.findIndex( (item) => item === s );
		if (idx >= 0) {
			this.shapes.splice(idx, 1);
			this.shapes.push( s );
		}
	}

	// Move Shape s to front of draw list
	toBack(s) {
		let idx = this.shapes.findIndex( (item) => item === s );
		if (idx >= 0) {
			this.shapes.splice(idx, 1);
			this.shapes.unshift( s );
		}
	}

	set immediateMode(b) { this._immediateMode = b; this.redraw(); }
	get immediateMode()  { return this._immediateMode; }

	set eventsEnabled(b) { this._eventsEnabled = b; }
	get eventsEnabled()  { return this._eventsEnabled; }

	// Timer methods
	timeStamp()      { return Date.now(); }

    /**
     * Set the rate at which to fire onTick events
     * @param tps Ticks per second
     */
	set tickRate(tps) {
        // Check for validity of tick rate
        if (tps < 0.0) { throw Error("tick rate cannot be less than 0"); }
        
		const restart = this.isRunning();			// Note if running
		this.stopTimer();							// Stop timer as a 
		const tickstart = this._tickStart;			// Cache tickStart
        this._tickRate = tps;						// Set up new timer parameters
		if (restart) this.startTimer(tickstart);	// Restart if was running
	}

	/**
     * Return the current rate at which the timer ticks
     * @return ticks per second.
     */
	get tickRate() { return this._tickRate; }

    /**
     * Start the timer firing onTick events.
	 * Pass an option starting timestamp
     */
    startTimer(tickstart) {
		this.stopTimer();
		this._tickStart = tickstart || Date.now();
		this._intervalId = window.setInterval( this._tick.bind(this), 1000.0/this._tickRate );
	}

    /**
     * Stop timer
     */
    stopTimer() {
        if (this._intervalId) { window.clearInterval(this._intervalId); }
		this._intervalId = null;
	}

    /**
     * Toggle the state of the timer. Started/Stopped.
     */
    toggleTimer() {
		if (this.isRunning()) {
			this.stopTimer();
		} else {
			this.startTimer();
		}
	}

	/**
     * Determine if the timer is running
     * @return true or false indicating if the timer is running.
     */
	isRunning() {
		return this._intervalId !== null;
	}

	/**
     * A private utility method that determines the object to which an event should be delegated
     */
	#_getShapeMouseListener(x, y) {

		// Get hit drawing context and move to where the mouse is located
		// const ctx = this._hitCvs.getContext("2d");
		// ctx.willReadFrequently = true;

		// Reset transform and clear
		this._hitCtx.resetTransform();
		this._hitCtx.clearRect(0, 0, 1, 1);

		// Translate context to mouse location and draw shape
		this._hitCtx.translate(-x, -y);

		// Draw all shapes on hitCvs in reverse order and test for hit
		let hit = null;		// Default to null
		for (let i = this.shapes.length - 1; i >= 0; i--) {
			let s = this.shapes[i];

			// Skip Shapes with events disabled
			if (!s._eventsEnabled) continue;

			// Draw this shape on the hit canvas
			s.draw(this._hitCtx);
	
			try {
				// If a visible component was drawn, update hit reference to shape
				let pxl = this._hitCtx.getImageData(0, 0, 1, 1).data;
				this._hitCtx.clearRect(0, 0, 1, 1);
				if (pxl[3] > 1) {
					hit = s;
					break;
				}
			} catch (e) {
				if (!this._suppressCrossDomainErrors) {
					throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
				}
			}
		}
		// Return final hit Shape ref of top-most shape or null
		return hit;
	}

	// Extract parameters from mouse event object and return
	#_getMouseParameters(ev) {
		// Get the mouse location wrt the canvas
		const bounding = this._canvas.getBoundingClientRect();
		const eX       = ev.clientX - bounding.left;
		const eY       = ev.clientY - bounding.top;
		const buttons  = ev.buttons;

		return [eX, eY, buttons];
	}

	// Deselect all Shapes
	#_deselectAll() {
		for (let s of this.shapes) s.selected = false;
	}

	// Manage mouse events
	_mouseMoved(ev) {
		// Get the mouse location wrt the canvas
		let eX, eY, buts, ld;
		[eX, eY, buts] = this.#_getMouseParameters(ev);

		// If dragging is underway, drag all selected shapes
		if (this._dragging && buts !== 0) {
			for (let ts of this.shapes) {
				ts.doDrag(eX, eY);
				ts.onMouseDragged(eX, eY, buts);
			}
		}

		// Check if there is a shape under the mouse to which the event should be delegated
		const s  = this.#_getShapeMouseListener(eX, eY);	// Does not return Shapes unless _eventsEnabled == true
		
		// Check if there is a last mouseMoved delegate
		ld = null;
		if (this._lastDelegate) ld = this._lastDelegate.deref();				// Get last mouseMoved listener

		// If moving over a shape and shape is not last delegate then delegate mouseEntered event to shape
		if (s !== null && ld !== s) {
			s.onMouseEntered(eX, eY, buts);
		}
		
		// If s is null and ld is not null then delegate mouseEntered to Pad
		if (s == null && ld !== s) {
			this.onMouseEntered(eX, eY, buts);
		}

		// If moving over shape and last delegate is not next delegate then delegate mouseExited to last delegate
		if (ld !== null && ld !== s) { 
			ld.onMouseExited(eX, eY, buts);
		}

		// If last delegate is null, and shape is not null then raise mouseExited on Pad
		if (s !== null && ld == null) {
			this.onMouseExited(eX, eY, buts);
		}

		if (s !== null) {						// If found a Shape, dispatch event to Shape
			s.onMouseMoved(eX, eY, buts);
		} else if (this._eventsEnabled) {		// If no Shape found but Pad events are enabled dispath to Pad
			this.onMouseMoved(eX, eY, buts);
		}

		// Update last mouseMoved event delegate
		if (s) {
			this._lastDelegate = new WeakRef(s);
		} else {
			this._lastDelegate = new WeakRef(this);
		}
	}
	_mousePressed(ev) {
		// Get the mouse location wrt the canvas
		let eX, eY, buts;
		[eX, eY, buts] = this.#_getMouseParameters(ev);

		// Check if there is a shape under the mouse to which the event should be delegated
		const s = this.#_getShapeMouseListener(eX, eY);
		
		if (s !== null) {												// If found a Shape, dispatch event to Shape
			if (!ev.shiftKey && !s.selected) this.#_deselectAll();		// Deselect all if shape is not selected 
			s.selected = true;											// Select shape
			this._dragging = true;										// Indicate that dragging has started
			for (let ts of this.shapes) ts.startDrag(eX, eY);			// Tell all selected shapes to start dragging process
			s.onMousePressed(eX, eY, buts);								// Delegate mousePressed event
		} else if (this._eventsEnabled) {								// If no Shape found but Pad events are enabled
			this.onMousePressed(eX, eY, buts);							// Dispatch to Pad
			if (!ev.shiftKey) this.#_deselectAll();						// Deselect all Shapes
		}
	}
	_mouseReleased(ev) {
		// Get the mouse location wrt the canvas
		let eX, eY, buts;
		[eX, eY, buts] = this.#_getMouseParameters(ev);
		
		// Check if there is a shape under the mouse to which the event should be delegated
		const s = this.#_getShapeMouseListener(eX, eY);

		this._dragging = false;											// Indicate that dragging has stopped
		for (let ts of this.shapes) ts.stopDrag(eX, eY);				// Tell all selected shapes to stop dragging process			

		if (s !== null) {												// If found a Shape, dispatch event to Shape
			s.onMouseReleased(eX, eY, buts);							// Dispatch event
		} else if (this._eventsEnabled) {								// If no Shape but Pad events enabled
			this.onMouseReleased(eX, eY, buts);							// Dispatch event to Pad
		}
	}
	_mouseEntered(ev) {
		// Get the mouse location wrt the canvas
		let eX, eY, buts;
		[eX, eY, buts] = this.#_getMouseParameters(ev);
		
		// Check if there is a shape under the mouse to which the event should be delegated
		const s = this.#_getShapeMouseListener(eX, eY);

		if (s !== null) {						// If found a Shape, dispatch event to Shape
			s.onMouseEntered(eX, eY, buts);
		} else if (this._eventsEnabled) {		// If no Shape found but Pad events are enabled dispath to Pad
			this.onMouseEntered(eX, eY, buts);
		}
	}
	_mouseExited(ev) {
		// Get the mouse location wrt the canvas
		let eX, eY, buts;
		[eX, eY, buts] = this.#_getMouseParameters(ev);
		
		// Check if there is a shape under the mouse to which the event should be delegated
		const s = this.#_getShapeMouseListener(eX, eY);

		if (s !== null) {						// If found a Shape, dispatch event to Shape
			s.onMouseExited(eX, eY, buts);
		} else if (this._eventsEnabled) {		// If no Shape found but Pad events are enabled dispath to Pad
			this.onMouseExited(eX, eY, buts);
		}
	}
	_mouseClicked(ev) {
		// Get the mouse location wrt the canvas
		let eX, eY, buts;
		[eX, eY, buts] = this.#_getMouseParameters(ev);

		// Check if there is a shape under the mouse to which the event should be delegated
		const s = this.#_getShapeMouseListener(eX, eY);

		if (s !== null) {						// If found a Shape, dispatch event to Shape
			s.onMouseClicked(eX, eY, buts);
		} else if (this._eventsEnabled) {		// If no Shape found but Pad events are enabled dispath to Pad
			this.onMouseClicked(eX, eY, buts);
		}
	}
	_mouseDoubleClicked(ev) {
		// Get the mouse location wrt the canvas
		let eX, eY, buts;
		[eX, eY, buts] = this.#_getMouseParameters(ev);

		// Check if there is a shape under the mouse to which the event should be delegated
		const s = this.#_getShapeMouseListener(eX, eY);

		if (s !== null) {						// If found a Shape, dispatch event to Shape
			s.onMouseDoubleClicked(eX, eY, buts);
		} else if (this._eventsEnabled) {		// If no Shape found but Pad events are enabled dispath to Pad
			this.onMouseDoubleClicked(eX, eY, buts);
		}
	}
	// Get the key pressed when canvas has focus
	_keyPressed(ev) {
		if (this._eventsEnabled) {		// If Pad events are enabled dispath to Pad
			this.onKeyPressed(ev.key, ev.shiftKey, ev.ctrlKey, ev.metaKey, ev.altKey);
		}
	}
	// Get the key released when canvas has focus
	_keyReleased(ev) {
		if (this._eventsEnabled) {		// If Pad events are enabled dispath to Pad
			this.onKeyReleased(ev.key, ev.shiftKey, ev.ctrlKey, ev.metaKey, ev.altKey);
		}
	}
	// Utility to calculate time elapsed in milliseconds and invoke overridable method
	_tick() {
		const elapsed = (Date.now() - this._tickStart);
		this.onTick(elapsed);
	}

	toString() { return `Pad: width=${this.width}, height=${this.height}`; }

	// Pad handling of mouse events
	// These may be overridden by a subclass
	onMousePressed(x, y, buttons)       { } // console.log(`mouse pressed on Pad at ${x},${y}`)
	onMouseReleased(x, y, buttons)      { } // console.log(`mouse released on Pad at ${x},${y}`)
	onMouseMoved(x, y, buttons)         { } // console.log(`mouse moved on Pad at ${x},${y},${buttons}`)
	onMouseEntered(x, y, buttons)       { } // console.log(`mouse entered Pad at ${x},${y}`)
	onMouseExited(x, y, buttons)        { } // console.log(`mouse exited Pad at ${x},${y}`)
	onMouseClicked(x, y, buttons)       { } // console.log(`mouse clicked Pad at ${x},${y}`)
	onMouseDoubleClicked(x, y, buttons) { } // console.log(`mouse double-clicked Pad at ${x},${y}`)
	onMouseDragged(x, y, buttons)       { } // console.log(`mouse dragged on Pad at ${x},${y}`)
	onKeyPressed(x, y, buttons)         { } // console.log(`mouse dragged on Pad at ${x},${y}`)
	onKeyReleased(x, y, buttons)        { } // console.log(`mouse dragged on Pad at ${x},${y}`)
	onTick(elapsed) {}

	update() {
		// Only redraw if in immediate mode
		if (!this._immediateMode) return;
		this.redraw();
	}

	// Redraw everything on next refresh
	redraw() {
		window.requestAnimationFrame( () => {
			// Draw background
			this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
			this._ctx.fillStyle = this._backgroundStr;
			this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);

			// Draw all shapes
			for (let s of this.shapes) { s.draw(this._ctx); }
		});
	}
}

// Base Shape class
class Shape {

	constructor(x, y, w, h, pad) {
		this._x = x;
		this._y = y;
		this._width = w;
		this._height = h;

		this._filled = true;
		this._fillColor = new Color(255, 255, 255, 255);

		this._stroked = true;
		this._strokeColor = new Color(0, 0, 0, 255);
		this._strokeWidth = 1;

		this._text = "";
		this._font = new Font("Arial", Font.PLAIN, 24);
		this._textFillColor = new Color(0, 0, 0);

		this._eventsEnabled = true;
		this._selected = false;
		this._selectable = false;
		this._draggable = false;
		this._dragDx = 0.0;
		this._dragDy = 0.0;

		this._pad = pad || Pad.getPad();
		this._pad.addShape(this);
	}
	// Rebuild the internal Path object.
	// Invoked when something causes the Path to change.
	// Abstract method. Must be implemented by derived class.
	_rebuildPath() {
		throw new Error("Required method _rebuildPath() not implemented.");
	}

	get x()   { return this._x; }
	set x(_x) { this._x = _x; this._rebuildPath(); this.update(); }
	get y()   { return this._y; }
	set y(_y) { this._y = _y; this._rebuildPath(); this.update(); }

	setLocation(x, y){ 
		this._x = x || this._x;
		this._y = y || this._y;
		this._rebuildPath(); 
		this.update();
	}
	getLocation()    { return [this._x, this._y]; }
	setCenter(cx, cy){ this.setLocation(cx - 0.5*this._width, cy - 0.5*this._height); }
	getCenter()      { return [this._x + 0.5*this._width, this._y + 0.5*this._height]; }
	move(dx, dy)     { this.setLocation(this._x+dx, this._y+dy); }

	setSize(width, height) { 
		this._width = width; this._height = height;
		this._rebuildPath(); 
		this.update(); 
	}
	getSize()         { return [this._width, this._height]; }
	set width(width)  { this._width = width; this._rebuildPath(); this.update(); }
	get width()       { return this._width; }
	set height(height){ this._height = height; this._rebuildPath(); this.update(); }
	get height()      { return this._height; }

	get area()        { return this._width * this._height; }
	contains(x, y) {
		if (!y) {  // If only one arg, assume it has x and y props and extract.
			x = x.x;
			y = x.y;
		}
		if (x <  this._x)                 { return false; };
		if (x > (this._x + this._width))  { return false; };
		if (y <  this._y)                 { return false; };
		if (y > (this._y + this._height)) { return false; };
		return true;
	}

	set filled(b)     { this._filled = b; }
	get filled()      { return this._filled; }
	set fillColor(clr){
		if (!(clr instanceof Color)) { throw new Error("The fillColor property accepts instances of the Color class only."); }
		this._fillColor = clr;
		this.update();
	}
	get fillColor()   { return this._fillColor; }
	setFillColor(r, g, b, a) { this.fillColor = new Color(r, g, b, a); }

	set fillRed(r)    { this._fillColor.red = r; this.update(); }
	get fillRed()     { return this._fillColor.red; }
	set fillGreen(g)  { this._fillColor.green = g; this.update(); }
	get fillGreen()   { return this._fillColor.green; }
	set fillBlue(b)   { this._fillColor.blue = b; this.update(); }
	get fillBlue()    { return this._fillColor.blue; }
	set fillAlpha(a)  { this._fillColor.alpha = a; this.update(); }
	get fillAlpha()   { return this._fillColor.alpha; }

	set stroked(b)    { this._stroked = b; }
	get stroked()     { return this._stroked; }
	set strokeColor(clr) {
		if (!(clr instanceof Color)) { throw new Error("The strokeColor property accepts instances of the Color class only."); }
		this._strokeColor = clr;
		this.update();
	}
	get strokeColor() { return this._strokeColor; }
	setStrokeColor(r, g, b, a) { this._strokeColor = new Color(r, g, b, a); }

	set strokeRed(r)  { this._strokeColor.red = r; this.update(); }
	get strokeRed()   { return this._strokeColor.red; }
	set strokeGreen(g){ this._strokeColor.green = g; this.update(); }
	get strokeGreen() { return this._strokeColor.green; }
	set strokeBlue(b) { this._strokeColor.blue = b; this.update(); }
	get strokeBlue()  { return this._strokeColor.blue; }
	set strokeAlpha(a){ this._strokeColor.alpha = a; this.update(); }
	get strokeAlpha() { return this._strokeColor.alpha; }

	set strokeWidth(w) { this._strokeWidth = w; this.update(); }
	get strokeWidth()  { return this._strokeWidth; }

	set text(txt)     { this._text = txt; this.update();	}
	get text()		  { return this._text; }
	setTextColor(r,g,b,a) {
		this._textFillColor = new Color(r,g,b,a);
		this.update();
	}
	set textColor(clr) {
		if (!(clr instanceof Color)) { throw new Error("The textColor property accepts only instances of the Color class."); }
		this._textFillColor = clr;
		this.update();
	}
	get textColor()   { return this._textFillColor; }
	set fontFamily(fam) { this._font.family = fam; this.update(); }
	get fontFamily()  { return this._font.family; }
	set fontStyle(sty){ this._font.style = sty; this.update(); }
	get fontStyle()   { return this._font.style; }
	set fontSize(siz) { this._font.size = siz; this.update(); }
	get fontSize()    { return this._font.size; }
	set font(fnt)     { this._font = fnt; this.update(); }
	get font()        { return this._font; }

	toFront() { if (this._pad) { this._pad.toFront(this); } }
	toBack()  { if (this._pad) { this._pad.toBack(this); } }

	set eventsEnabled(b) { this._eventsEnabled = b; }
	get eventsEnabled()  { return this._eventsEnabled; }
	set selected(b)   {
		if (!this._selectable) return;
		if (this._selected === b) return;
		this._selected = b;
		this.onSelectionChanged();
		this.update();
	}
	get selected() { return this._selected; }
	set selectable(b) {
		if (this._selected) this.selected = false;
		this._selectable = b;
	}
	get selectable() { return this._selectable; }
	set draggable(b) {
		this._draggable = b;
		if (b) this.selectable = true;	// Must also be selectable to be draggable
	}
	get draggable() { return this._draggable; }
	startDrag(x, y) { 
		if (this._selected && this._draggable) {
			this._dragDx = this._x - x;
			this._dragDy = this._y - y;
		}
	}
	stopDrag() {
		this._dragDx = 0.0;
		this._dragDy = 0.0;
	}
	doDrag(x, y) {
		if (this._selected && this._draggable) {
			this.setLocation(x + this._dragDx, y + this._dragDy);
		}
	}

	// Default handling of mouse events on Shape
	// These may be overridden by a subclass
	onMousePressed(x, y, buttons)       { } // console.log(`mouse pressed on Shape at ${x},${y},${buttons}`)
	onMouseReleased(x, y, buttons)      { } // console.log(`mouse released on Shape at ${x},${y}`)
	onMouseMoved(x, y, buttons)         { } // console.log(`mouse moved on Shape at ${x},${y}`)
	onMouseEntered(x, y, buttons)       { } // console.log(`mouse entered Shape at ${x},${y}`)
	onMouseExited(x, y, buttons)        { } // console.log(`mouse exited Shape at ${x},${y}`)
	onMouseClicked(x, y, buttons)       { } // console.log(`mouse clicked Shape at ${x},${y}`)
	onMouseDoubleClicked(x, y, buttons) { } // console.log(`mouse double-clicked Shape at ${x},${y}`)
	onMouseDragged(x, y, buttons)       { } // console.log(`mouse dragged on Shape at ${x},${y}`)
	onSelectionChanged()                { }

	toString() { return `Shape: x=${this.x}, y=${this.y}, width=${this._width}, height=${this._height}`; }

	// Delegate update to Pad, if set
	update() {
		if (this._pad) { this._pad.update(); }
	}

	// Draw the Shape to the 2d context ctx
	draw(ctx) {
		// If filled, fill the Shape
		if (this._filled) {
			ctx.fillStyle = this.fillColor.toString();
			ctx.fill(this._path);
			// if (this._path) ctx.fill(this._path);
			// else ctx.fill();
		}
		
		// If there is a stroke width defined, stroke the Shape
		if (this._stroked) {
			ctx.strokeStyle = this.strokeColor.toString();
			ctx.lineWidth   = this._strokeWidth;
			ctx.stroke(this._path)
			// if (this._path) ctx.stroke(this._path);
			// else ctx.stroke();
		}

		// If there is text on the Shape, draw it
		if (this._text) {
			let cx, cy;
			ctx.textAlign = "center";
			[cx, cy] = this.getCenter();
			ctx.fillStyle = this._textFillColor.toString();
			ctx.font = this._font.toString();
			const tm = ctx.measureText(this._text);
			ctx.fillText(this._text, cx, cy+0.4*tm.actualBoundingBoxAscent);
		}

		// If it is selected, draw selrect
		if (this._selected) {
			ctx.beginPath();
			ctx.rect(this._x, this._y, this._width, this._height);
			ctx.strokeStyle = "rgba(127, 127, 127, 0.25)";
			ctx.lineWidth   = 1;
			ctx.stroke();
		}
	}
}

// Oval class
class Oval extends Shape {
	
	constructor(x, y, w, h, pad) {
		super(x, y, w, h, pad);
		this._rx = 0.5*w;
		this._ry = 0.5*h;

		this._rebuildPath();
	}
	
	get area() {
		return Math.PI * this._rx * this._ry;
	}
	
	// Overridden. Return true if this Shape contains the point p
	contains(x, y) {
		if (!y) {  // assume point object passed as single argument. Extract values.
			x = x.x;
			y = x.y;
		}
		// Center point
		let cx, cy;
		[cx, cy] = this.getCenter();
		
		// (x-xc)^2/rx^2 + (y-yc)^2/ry^2 <= 1
		let dx = x - cx;
		let dy = y - cy;
		return ((dx*dx)/(this._rx*this._rx) + (dy*dy)/(this._ry*this._ry)) <= 1.0;
	}
	
	_rebuildPath() {
		const ctx = new Path2D();

		// Center point
		let cx = this._x + this._rx;
		let cy = this._y + this._ry;
		
		ctx.ellipse(cx, cy, this._rx, this._ry, 0, 0, 2*Math.PI);
		ctx.closePath();

		this._path = ctx;
	}

	toString() { return `Oval: x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}`; }

}

// Rectangle class
class Rectangle extends Shape {
	
	constructor(x, y, w, h, pad) {
		super(x, y, w, h, pad);
		this._rebuildPath();
	}

	_rebuildPath() {
		const ctx = new Path2D();
		ctx.rect(this._x, this._y, this._width, this._height);
		this._path = ctx;
	}

	toString() { return `Rectangle: x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}`; }

	// Draw this Shape on the 2d context ctx
	// draw(ctx) {
	// 	ctx.beginPath();
	// 	ctx.rect(this._x, this._y, this._width, this._height);
	// 	super.draw(ctx);
	// }
}

// RoundRect class
class RoundRect extends Shape {
	
	constructor(x, y, w, h, radius, pad) {
		super(x, y, w, h, pad);
		this.radius = radius;
		this._rebuildPath();
	}

	_rebuildPath() {
		const ctx = new Path2D();
		ctx.moveTo(this._x, this._y + this.radius);
		ctx.arcTo(this._x,  this._y + this._height, this._x + this.radius, this._y + this._height, this.radius);
		ctx.arcTo(this._x + this._width, this._y + this._height, this._x + this._width, this._y + this._height - this.radius, this.radius);
		ctx.arcTo(this._x + this._width, this._y, this._x + this._width - this.radius, this._y, this.radius);
		ctx.arcTo(this._x,  this._y, this._x, this._y + this.radius, this.radius);
		this._path = ctx;
	}

	toString() { return `RoundRect: x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}, radius=${this.radius}`; }
	
	// Draw this Shape on the 2d context ctx
	// draw(ctx) {
	// 	ctx.beginPath();
	// 	ctx.moveTo(this.x, this.y + this.radius);
	// 	ctx.arcTo(this.x,  this.y + this._height, this.x + this.radius, this.y + this._height, this.radius);
	// 	ctx.arcTo(this.x + this._width, this.y + this._height, this.x + this._width, this.y + this._height - this.radius, this.radius);
	// 	ctx.arcTo(this.x + this._width, this.y, this.x + this._width - this.radius, this.y, this.radius);
	// 	ctx.arcTo(this.x,  this.y, this.x, this.y + this.radius, this.radius);
	// 	super.draw(ctx);
	// }
}

// Line class
class Line extends Shape {
	
	constructor(x1, y1, x2, y2, pad) {
		super(x1, y1, x2-x1, y2-y1, pad);
		this.fillColor = new Color(0,0,0,0);
		this._filled = false;
		this._rebuildPath();
	}
	
	setPoints(x1, y1, x2, y2) {
        this._x = x1;
        this._y = y1;
        this._width = x2-x1;
        this._height = y2-y1;
		this._rebuildPath();
        this.update();
	}

    toString() { return `Line: x1=${this.x}, y1=${this.y}, x2=${this._x+this.width}, y2=${this._y+this.height}`; }

	_rebuildPath() {
		const ctx = new Path2D();
		ctx.moveTo(this._x, this._y);
		ctx.lineTo(this._x + this._width, this._y + this._height);
		this._path = ctx;
	}

	// Draw this Shape on the 2d context ctx
	// draw(ctx) {
	// 	ctx.beginPath();
	// 	ctx.moveTo(this._x, this._y);
	// 	ctx.lineTo(this._x + this._width, this._y + this._height);
	// 	super.draw(ctx);
	// }
}

// Arc class
class Arc extends Shape {
	constructor(cx, cy, radiusX, radiusY, startAngle, arcAngle, pad) {
		super(cx-radiusX, cy-radiusY, 2*radiusX, 2*radiusY, pad);
		this._cx = cx;
		this._cy = cy;
		this._radiusX = radiusX;
		this._radiusY = radiusY;
		this._startAngle = startAngle;
		this._arcAngle = arcAngle;
		this._filled = false;
		this._rebuildPath();
	}

	setSize(w, h) {
		this._radiusX = 0.5*w;
		this._radiusY = 0.5*h;
		this._rebuildPath();
		this.update(); 
	}

	setLocation(x, y){ 
		this._x = x;
		this._y = y;
		this._cx = x + this._radiusX;
		this._cy = y + this._radiusY;
		this._rebuildPath();
		this.update(); 
	}

	set radiusX(r) {
		this._radiusX = r;
		this._width   = 2*r;
		this._rebuildPath();
		this.update();
	}
	get radiusX() { return this._radiusX; }

	set radiusY(r) {
		this._radiusY = r;
		this._height  = 2*r;
		this._rebuildPath();
		this.update();
	}
	get radiusY() { return this._radiusY; }

	set x(x) {
		this._x = x;
		this._cx = x + this._radiusX;
		this._rebuildPath();
		this.update();
	}

	set y(y) {
		this._y = y;
		this._cy = y + this._radiusY;
		this._rebuildPath();
		this.update();
	}

	set width(w) {
		this._radiusX = 0.5*w;
		this._width = w;
		this._rebuildPath();
		this.update();
	}

	set height(h) {
		this.radiusY = 0.5*h;
		this._height = h;
		this._rebuildPath();
		this.update();
	}

	/**
	 * Returns the start angle for the Arc Shape.
	 * @return start angle (degrees)
	 */
	get startAngle() {
		return this._startAngle;
	}
	
	/**
	 * Sets the start angle for the Arc Shape.
	 * @param angle start angle (degrees)
	 */
	set startAngle(angle) {
		this._startAngle = angle;
		this._rebuildPath();
		this.update();
	}
	
	/**
	 * Returns the arc angle for the Arc Shape.
	 * @return arc angle extent (degrees)
	 */
	get arcAngle() {
		return this._arcAngle;
	}
	
	/**
	 * Sets the arc angle extent for the Arc Shape.
	 * @param angle arc angle extent (degrees)
	 */
	set arcAngle(angle) {
		this._arcAngle = angle;
		this._rebuildPath();
		this.update();
	}

	/**
	 * Builds and returns a string representation of the arc shape that includes position, size and layer.
	 * @return String representation of the arc.
	 */
	toString() { return `Arc: cx=${this._cx}, cy=${this._cy}, radiusX=${this._radiusX}, radiusY=${this._radiusY}, start=${this._startAngle}, arc=${this._arcAngle}`; }
	
	_rebuildPath() {
		const ctx = new Path2D();
		ctx.ellipse(this._cx, this._cy, this._radiusX, this._radiusY, 0, this._startAngle, this._startAngle+this._arcAngle);
		this._path = ctx;
	}
}

// Polygon class
class Polygon extends Shape {
	constructor(xPoints, yPoints, pad) {
		super(0.0, 0.0, 0.0, 0.0, pad);
		if (xPoints.length != yPoints.length) {
			throw new Error("xPoints and yPoints are different lengths. They must be same length.");
		}
		this._xPoints = xPoints.slice(0);
		this._yPoints = yPoints.slice(0);
		this.nPoints = xPoints.length;

        // Update shape
        this._rebuildPath();
        this.#updateBoundingBox();
	}

	/**
     * Generate a representation of the Polygon object.
     * @return String representation
     */
	toString() { return `Polygon: x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}`; }

	setLocation(x, y) {
        // Adjust points in internal arrays to new offsets
        for (let i=0; i<this.nPoints; i++) {
            this._xPoints[i] = this._xPoints[i] - this._x + x;
            this._yPoints[i] = this._yPoints[i] - this._y + y;
        }
        
        // Update shape
        this._rebuildPath();
        this.#updateBoundingBox();
		super.setLocation(x, y);
	}

	setSize(w, h) {
        // Compute the ratio of the current and new width and height
        let rw = 1.0;
        let rh = 1.0;
        if (this._width != 0.0) rw = w/this._width;
        if (this._height != 0.0) rh = h/this._height;
        
        // Adjust points in internal arrays to new offsets
        for (let i=0; i<this.nPoints; i++) {
            xPoints[i] = this._x + rw*(this._xPoints[i] - this._x);
            yPoints[i] = this._y + rh*(this._yPoints[i] - this._y);
        }

        // Reset everything else
        this._rebuildPath();
        this.#updateBoundingBox();
		super.setSize(w, h);
    }

	_rebuildPath() {
		const path = new Path2D();
		if (this.nPoints == 0) return;

        path.moveTo(this._xPoints[0], this._yPoints[0]);
        for (let i=1; i<this.nPoints; i++) {
            path.lineTo(this._xPoints[i], this._yPoints[i]);
        }
        path.closePath();
		this._path = path;
	}

	#updateBoundingBox() {
        // Compute the number of points in the Polygon.
        let nPoints = Math.min(this._xPoints.length, this._yPoints.length);
        
        // Do nothing when no points
        if (nPoints == 0) return;
        
        // Start by finding upper left corner and saving as position
        const minX = Math.min(...this._xPoints);
        const maxX = Math.max(...this._xPoints);
        const minY = Math.min(...this._yPoints);
        const maxY = Math.max(...this._yPoints);

        // Reset bounding box
        this._x = minX;
        this._y = minY;
        this._width  = maxX - minX;
        this._height = maxY - minY;
	}
}

class Polyline extends Shape {

}

class Path extends Shape {

}

class Sprite extends Shape {

}

class Sound {

}

// Text class
class Text extends Shape {
	
	constructor(text, x, y, size="24px", style=Font.PLAIN, fontName="Arial", pad) {
		super(x, y, 0, 0, pad);
		this._text = text;
		this.font = new Font(fontName, style, size);
	}

	get height() {
		if (this._pad._ctx) {		// Recalculate and reassign height
			this._pad._ctx.fillStyle = this._textFillColor.toString();
			this._pad._ctx.font = this._font.toString();
			const tm = ctx.measureText(this._text);
			this._height = tm.actualBoundingBoxAscent;
		}
		return this._height;
	}

	get width() {
		if (this._pad._ctx) {	// Recalculate and reassing width
			this._pad._ctx.fillStyle = this._textFillColor.toString();
			this._pad._ctx.font = this._font.toString();
			const tm = ctx.measureText(this._text);
			this._width = tm.width;
		}
		return this._width;
	}

	_rebuildPath() { /* A no-op to fullfill abstract base class requirement */ }

	toString() { return `Text: x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}, text=${this.text}`; }

	// We must implement a custom draw method because it is not possible to draw to a Path2D
	draw(ctx) {
		// If there is text, draw it
		if (this._text) {
			ctx.textAlign = "left";
			ctx.fillStyle = this._textFillColor.toString();
			ctx.font      = this._font.toString();
			const tm      = ctx.measureText(this._text);
			this._width   = tm.width;					// Update dimensions
			this._height  = tm.actualBoundingBoxAscent+tm.actualBoundingBoxDescent;
			ctx.fillText(this._text, this._x, this._y+tm.actualBoundingBoxAscent);

			// If it is selected, draw selrect
			if (this._selected) {
				ctx.beginPath();
				ctx.rect(this._x, this._y, this._width, this._height);
				ctx.strokeStyle = "rgba(127, 127, 127, 0.25)";
				ctx.lineWidth   = 1;
				ctx.stroke();
			}
		}
	}
}

// Image class
class Img extends Shape {
	
	constructor(imgpath, x, y, width, height, pad) {
		super(x, y, 0, 0, pad);
		this._imgpath = imgpath;
		this._image = new Image();
		this._image.crossorigin="anonymous";

		// Draw the image at least once after load
		this._image.onload = (ev) => {
			this._width  = width || this._image.width;
			this._height = height || this._image.height;
			this._pad.redraw();
		}

		this._image.src = imgpath;
	}
	
	_rebuildPath() { /* A no-op to fullfill abstract base class requirement */ }

	toString() { return `Img: x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}, path=${this._imgpath}`; }

	// We must implement a custom draw method because it is not possible to draw to a Path2D
	draw(ctx) {
		if (this._image.complete) {
			ctx.drawImage(this._image, this._x, this._y, this._width, this._height);

			// If it is selected, draw sel-rect
			if (this._selected) {
				ctx.beginPath();
				ctx.rect(this._x, this._y, this._width, this._height);
				ctx.strokeStyle = "rgba(127, 127, 127, 0.25)";
				ctx.lineWidth   = 1;
				ctx.stroke();
			}
		} else {
			console.log("Cannot draw. Image not yet loaded.")
		}
	}
}

// Private helper function implementing Heron's formula
// area = sqrt(s*(s-a)*(s-b)*(s-c))
// a = length of side 1
// b = length of side 2
// c = length of side 3
// s = semiperimeter = (a+b+c)/2
let _heron = function(p1, p2, p3) {
	let a = Math.sqrt((p2.x-p1.x)*(p2.x-p1.x) + (p2.y-p1.y)*(p2.y-p1.y));
	let b = Math.sqrt((p3.x-p2.x)*(p3.x-p2.x) + (p3.y-p2.y)*(p3.y-p2.y));
	let c = Math.sqrt((p3.x-p1.x)*(p3.x-p1.x) + (p3.y-p1.y)*(p3.y-p1.y));
	let s = (a+b+c)/2;
	return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}

//A Triangle contains a point if the sum of the areas of three subordinate triangles formed 
//by the point and the three sides is approximately equal to the area of the whole triangle.
let _containsPoint = function(p, p1, p2, p3) {
	let area  = _heron(p1, p2, p3);
	let area1 = _heron( p, p1, p2);
	let area2 = _heron( p, p1, p3);
	let area3 = _heron( p, p2, p3);
	return (Math.abs((area1 + area2 + area3) - area ) < 0.0000001);
}

// export {
// 	Pad,
// 	Shape,
// 	Line,
// 	Arc,
// 	Oval,
// 	Rectangle,
// 	RoundRect,
// 	Polygon,
// 	Polyline,
// 	Path,
// 	Sprite,
// 	Sound,
// 	Text,
// 	Img,
// 	Font,
// 	Color,
// 	AffineTransform
// };
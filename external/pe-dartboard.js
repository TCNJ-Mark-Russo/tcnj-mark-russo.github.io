const pad = new Pad("slate-pe-dartboard", "300", "300");
const board = new Rectangle(25, 0, 250, 250);
board.eventsEnabled = false;
const output = new Text("", 25, 260, "16px");
const o1 = new Oval(50, 25, 200, 200);
o1.eventsEnabled = false;
o1.setFillColor(255,255,200);
const o2 = new Oval(75, 50, 150, 150);
o2.eventsEnabled = false;
o2.setFillColor(200,200,255);
const o3 = new Oval(100,75,100,100);
o3.eventsEnabled = false;
o3.setFillColor(200,255,200);
const o4 = new Oval(130,105,40,40);
o4.eventsEnabled = false;
o4.setFillColor(255,200,200);
pad.onMousePressed = function(eX, eY, buts) {
    output.text = `Dart landed at (${Math.round((eX-25)*2.4)}, ${Math.round(eY*2.4)})`;
};
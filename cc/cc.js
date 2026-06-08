// CultivatingCrops Game
// Lessons
// 1. It takes careful timing to plant and harvest a crop
// 2. Crops must be harvested at the right time, 
//    too early and they cannot be sold, too late and they go bad.
// 3. Crops cannot be planted too close to one another because 
//    they compete for resources and do not grow.

// Heat Stress: 
// Accelerates crop growth cycles, causing plants to mature too quickly and miss out on 
// crucial phases of mass accumulation, ultimately reducing overall grain weight.

// Water Availability: 
// Droughts limit water needed for photosynthesis, while erratic, heavy rainfall 
// causes flooding and waterlogging, both of which severely damage root systems 
// and invite disease.

// Elevated CO²: 
// While higher carbon dioxide can stimulate growth in certain crops (like wheat), 
// it often comes at the cost of nutritional density.

// Pests & Disease: 
// Warmer winters allow agricultural pests, weeds, and fungal diseases to survive 
// in wider ranges and reproduce more rapidly, destroying harvests

// Heat Stress & Reduced Head Weight: 
// Lettuce thrives at daytime temperatures of 12°C to 21°C. 
// Warmer environments can reduce overall crop dry weight and head size by 20% to 40%

// Canvas
let cvs = new Canvas('_cvs');

// window.addEventListener("resize", (ev) => { 
//     console.log(window.innerWidth, window.innerHeight);
// });

let field = new Rectangle(0, 0, 1920, 1000);
field.fill = "url(#dirt-pattern)"
field.addTo(cvs);
field.toBack();

// Logo
let logo = new Image("logo.png", 75, 0, 332, 126);
logo.addTo(cvs);

// Track dragging
let _drag = false;

// Game stats
let stats = {
    planted: 0,         // Number of crops planted
    harvested: 0,       // Number of crops harvested
    elapsed: 0,         // Elapsed days
    profit: 0.0         // Amount of profit in dollars
};

// Crops planted
let crops = [];

// Make and return a crop group object
function makeCrop(x, y) {
    let g  = new Group();
    g.propagateEvents = false;
    let c1 = new Circle(x, y, 4);
    let c2 = new Circle(x, y, 4);
    let c3 = new Circle(x, y, 4);
    let c4 = new Circle(x, y, 4);
    g.add(c1);
    g.add(c2);
    g.add(c3);
    g.add(c4);
    g.fill = "green";
    g.fillOpacity = 0.5;
    g.stroke = "none";
    g.data.set("age", 0);

    g.onmousedown = function(x, y, b, target) {
        if (_tmr.running) {                 // If growing...
            if (b == 0) {                   // ... left-clicking
                harvestCrop(g);             // ... is harvesting
            }
        } else {                            // If not growing...
            if (b == 0) {                   // ... left-clicking
                target._dragStart();        // ... starts drag
                _drag = { target  : target, startX  : x, startY  : y };
            } else {                        // ... not left-click
                deleteCrop( g );            // ... deletes crop 
                updatePlanted(-1);          // ... and adjusts display
                updateProfit(0.5);
            }
        }
    };
    g.onmouseup = function(x, y, b, target) {
        _drag = false;
    };
    return g;
}

// Grow the crop
function grow(crop, factor) {
    const c1 = crop.children[0];
    const c2 = crop.children[1];
    const c3 = crop.children[2];
    const c4 = crop.children[3];

    // Get the center of this crop
    let bb = crop.getTransformedBBox()
    let cx = bb.x + 0.5*bb.width;
    let cy = bb.y + 0.5*bb.height;
    
    // Update crop age
    // let age = parseFloat(crop._root.getAttribute('data-age'));
    let age = crop.data.get('age');
    age = age + 0.01;
    crop.data.set('age', age);
    // crop._root.setAttribute('data-age', age);

    // Configure based on age
    c1.cy = cy - age;
    c1.r  = 2*age + 4;
    c2.cy = cy + age;
    c2.r  = 2*age + 4;
    c3.cx = cx - age;
    c3.r  = 2*age + 4;
    c4.cx = cx + age;
    c4.r  = 2*age + 4;

    // Change fill color based on size of crop
    if (bb.width < 75) {
        crop.fill = "green";
    } else if (bb.width > 100) {
        crop.fill = "#6A6E09";
    } else {
        crop.fill = "#00480c";
    }
}

// Cleanly delete the crop group from the game
function deleteCrop(crop) {
    let idx = crops.indexOf(crop);
    if (idx > -1) {
        crops.splice(idx, 1);
        crop.remove();        // Delete the group from the SVG element
    }
}

// Harvest a crop and compute profit
function harvestCrop(crop) {
    let bb = crop.getTransformedBBox();
    
    if (bb.width < 75) {
        txtMsg.text = "Too small. No profit.";
    } else if (bb.width > 100) {
        txtMsg.text = "Too old. No profit.";
    } else {
        txtMsg.text = "You earned $3 profit.";
        updateProfit(3);
        updateHarvestCount(1);
    }
    deleteCrop(crop);
}

// When clicking on the field, plant a crop
field.onmousedown = function(x, y, btn, target) {
    if (btn == 0) { // Left mouse

        // Create a crop
        let crop = makeCrop(x, y);
        crop.addTo(cvs);
        crops.push(crop);

        updatePlanted(1);
        updateProfit(-0.5);                     // Costs $0.50 to grow a head of lettuce.
    }
};
field.onmousemove = function(x, y, b, target) {
    if (_drag && b == 0 && !_tmr.running) {
        // Computes the dragging offset 
        // and asks the shape to move to that offset.
        const dx = x - _drag.startX;
        const dy = y - _drag.startY;
        _drag.target._dragOffset(dx, dy);
    }
};
field.onmouseup = function(x, y, b, target) {
    _drag = false;
};

// Run simulation
function startSimulation() {
    txtStatus.text = "Growing your crops";
    _tmr.start();
};
function pauseSimulation() {
    _tmr.pause();
};
function stepSimulation(elapsed) {
    let elapsedDays = Math.floor(elapsed / 1000);
    // Game over
    if (elapsedDays >= 50) {
        txtMsg.text = "";
        pauseSimulation();
        txtStatus.text = "Growing season is over";
    }
    resetElapsedTime( elapsedDays );

    for(crop of crops) { grow(crop, 1.01); }
};
const _tmr = new Timer(100, stepSimulation);

// Reset the entire game
function resetGame() {
    _tmr.reset();
    txtMsg.text = "";
    txtStatus.text = "Plant your crops";
    resetElapsedTime(0);
    resetProfit(-50);
    resetPlanted(0);
    resetHarvestCount(0);
    while (crops.length > 0) deleteCrop(crops[0]);
};

// Text Displays
let txtStatus = new Text('', 100, 200); // Status
txtStatus.fontSize = 48;
txtStatus.addTo(cvs);

let txtMsg = new Text('', 100, 820);    // Message
txtMsg.fontSize = 48;
txtMsg.addTo(cvs);

let txtPlanted = new Text('', 100, 900);
txtPlanted.fontSize = 48;
txtPlanted.addTo(cvs);

let txtHarvested = new Text('', 400, 900);
txtHarvested.fontSize = 48;
txtHarvested.addTo(cvs);

let txtProfit  = new Text('', 1500, 900);
txtProfit.fontSize = 48;
txtProfit.addTo(cvs);

let txtElapsed = new Text('', 1350, 200);
txtElapsed.fontSize = 48;
txtElapsed.addTo(cvs);

// Add to Planted and display
function updatePlanted(change) {
    stats.planted += change;
    txtPlanted.text = `Planted: ${stats.planted}`;
}
function resetPlanted(total) {
    stats.planted = total;
    txtPlanted.text = `Planted: ${stats.planted}`;
    txtPlanted.fill = "black";
}
function updateHarvestCount(change) {
    stats.harvested += change;
    txtHarvested.text = `Harvested: ${stats.harvested}`;
}
function resetHarvestCount(total) {
    stats.harvested = total;
    txtHarvested.text = `Harvested: ${stats.planted}`;
    txtHarvested.fill = "black";
}
// Add to profit and display
function updateProfit(change) {
    stats.profit += change;
    if (stats.profit < 0.0) {
        txtProfit.text = `Loss: -$${(-stats.profit).toFixed(2)}`;
        txtProfit.fill = "darkred";
    } else {
        txtProfit.text = `Profit: $${stats.profit.toFixed(2)}`;
        txtProfit.fill = "darkgreen";
    }
}
function resetProfit(total) {
    stats.profit = total;
    if (stats.profit < 0.0) {
        txtProfit.text = `Loss: -$${(-stats.profit).toFixed(2)}`;
        txtProfit.fill = "darkred";
    } else {
        txtProfit.text = `Profit: $${stats.profit.toFixed(2)}`;
        txtProfit.fill = "darkgreen";
    }
}
// Reset absolute elapsed time and display
function resetElapsedTime(elapsed) {
    txtElapsed.text = `Elapsed Time: ${elapsed} days`;
    txtElapsed.fill = "black";
}

// Show/hide instructions
function showInstructions() {
    document.getElementById("instructions").style.display = 'block';
};
function hideInstructions() {
    document.getElementById("instructions").style.display = 'none';
};
function toggleInstructions() {
    let disp = document.getElementById("instructions").style.display;
    if (disp == 'none') {
        showInstructions();
    } else {
        hideInstructions();
    }
}

// --- Button Controls
let btnToggle = new Button("Start", 1270, 35, 170, 100);
btnToggle.fontSize = "48px";
btnToggle.addTo(cvs);
btnToggle.onmousedown = function(x, y, b, target) {
    hideInstructions();
    if (btnToggle.label == "Start") {
        startSimulation();
        btnToggle.label = "Pause";
        //document.documentElement.requestFullscreen();
    } else {
        pauseSimulation();
        btnToggle.label = "Start";
        //document.exitFullscreen();
    }
}
let btnReset = new Button("Reset", 1450, 35, 170, 100);
btnReset.fontSize = "48px";
btnReset.addTo(cvs);
btnReset.onmousedown = function(x, y, b, target) { 
    hideInstructions();
    resetGame(); 
}

let btnHelp = new Button("Help", 1630, 35, 170, 100);
btnHelp.fontSize = "48px";
btnHelp.addTo(cvs);
btnHelp.onmousedown = function(x, y, b, target) { toggleInstructions(); }

// --- Start fresh
resetGame();

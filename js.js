// Snake by Adam

// Setup canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
Wkeyispressed = false;
Skeyispressed = false;
Akeyispressed = false;
Dkeyispressed = false;

let onebox = 20;
let SnakeL = onebox;
let SnakeheadX = 400;
let SnakeheadY = 300;
let frameCount = 0;
let snakeXaxismovement = 20;
let snakeYaxismovement = 20;
let XaxisSpawnP = 200;
let YaxisSpawnP = 200;
let YaxisSpawnPspeed = 20;
let XaxisSpawnPspeed = 20;
let XaxisSpawnP2 = 400;
let YaxisSpawnP2 = 400;
let YaxisSpawnPspeed2 = 10;
let XaxisSpawnPspeed2 = 10;
let XaxisSpawnP3 = 600;
let YaxisSpawnP3 = 600;
let YaxisSpawnPspeed3 = 5;
let XaxisSpawnPspeed3 = 5;
let XaxisSpawnP4 = 600;
let YaxisSpawnP4 = 600;
let YaxisSpawnPspeed4 = 20;
let XaxisSpawnPspeed4 = 20;
let Score = 0;

// MAIN ANIMATION LOOP
requestAnimationFrame(draw);



function draw() {
    // LOGIC

    frameCount++;
    if (frameCount % 1 === 0) {
        // if (SnakeheadX < XaxisSpawnP) {
        //     SnakeheadX = SnakeheadX + 20;
        // }
        // if (SnakeheadX > XaxisSpawnP) {
        //     SnakeheadX = SnakeheadX - 20;
        // }
        // if (SnakeheadY < YaxisSpawnP) {
        //     SnakeheadY = SnakeheadY + 20;
        // }
        // if (SnakeheadY > YaxisSpawnP) {
        //     SnakeheadY = SnakeheadY - 20;
        // }

        if (SnakeheadX > XaxisSpawnP) {
            XaxisSpawnP = XaxisSpawnP + XaxisSpawnPspeed;
        }
        if (SnakeheadX < XaxisSpawnP) {
            XaxisSpawnP = XaxisSpawnP - XaxisSpawnPspeed;
        }
        if (SnakeheadY > YaxisSpawnP) {
            YaxisSpawnP = YaxisSpawnP + YaxisSpawnPspeed;
        }
        if (SnakeheadY < YaxisSpawnP) {
            YaxisSpawnP = YaxisSpawnP - YaxisSpawnPspeed;
        }


        if (SnakeheadX > XaxisSpawnP2) {
            XaxisSpawnP2 = XaxisSpawnP2 + XaxisSpawnPspeed2;
        }
        if (SnakeheadX < XaxisSpawnP2) {
            XaxisSpawnP2 = XaxisSpawnP2 - XaxisSpawnPspeed2;
        }
        if (SnakeheadY > YaxisSpawnP2) {
            YaxisSpawnP2 = YaxisSpawnP2 + YaxisSpawnPspeed2;
        }
        if (SnakeheadY < YaxisSpawnP2) {
            YaxisSpawnP2 = YaxisSpawnP2 - YaxisSpawnPspeed2;
        }

        if (SnakeheadX > XaxisSpawnP3 + 20) {
            XaxisSpawnP3 = XaxisSpawnP3 + XaxisSpawnPspeed3;
        }
        if (SnakeheadX < XaxisSpawnP3) {
            XaxisSpawnP3 = XaxisSpawnP3 - XaxisSpawnPspeed3;
        }
        if (SnakeheadY > YaxisSpawnP3) {
            YaxisSpawnP3 = YaxisSpawnP3 + YaxisSpawnPspeed3;
        }
        if (SnakeheadY < YaxisSpawnP3) {
            YaxisSpawnP3 = YaxisSpawnP3 - YaxisSpawnPspeed3;
        }

        if (SnakeheadX > XaxisSpawnP4) {
            XaxisSpawnP4 = XaxisSpawnP4 + XaxisSpawnPspeed4;
        }
        if (SnakeheadX < XaxisSpawnP4) {
            XaxisSpawnP4 = XaxisSpawnP4 - XaxisSpawnPspeed4;
        }
        if (SnakeheadY > YaxisSpawnP4) {
            YaxisSpawnP4 = YaxisSpawnP4 + YaxisSpawnPspeed4;
        }
        if (SnakeheadY < YaxisSpawnP4) {
            YaxisSpawnP4 = YaxisSpawnP4 - YaxisSpawnPspeed4;
        }
    }
    if (frameCount % 1 === 0) {
        if (Wkeyispressed && SnakeheadY > 0) {
            SnakeheadY = SnakeheadY - snakeYaxismovement;
        }
        if (Skeyispressed && SnakeheadY < 580) {
            SnakeheadY = SnakeheadY + snakeYaxismovement;
        }
        if (Akeyispressed && SnakeheadX > 0) {
            SnakeheadX = SnakeheadX - snakeXaxismovement;
        }
        if (Dkeyispressed && SnakeheadX < 780) {
            SnakeheadX = SnakeheadX + snakeXaxismovement;
        }
    }
    if (frameCount % 60 === 0) {
        Score++;
    }



    // Safety 
    if (SnakeheadY > 600) {
        SnakeheadY = 600;
    }
    if (SnakeheadY < 0) {
        SnakeheadY = 0;
    }
    if (YaxisSpawnP > 600) {
        YaxisSpawnP = 600;
    }
    if (YaxisSpawnP < 0) {
        YaxisSpawnP = 0;
    }
    if (SnakeheadX > 800) {
        SnakeheadX = 800;
    }
    if (SnakeheadX < 0) {
        SnakeheadX = 0;
    }
    if (SnakeheadX > 800) {
        SnakeheadX = 800;
    }
    if (XaxisSpawnP < 0) {
        XaxisSpawnP = 0;
    }
    if (SnakeheadX > 800) {
        SnakeheadX = 800;
    }
    if (XaxisSpawnP > 800) {
        XaxisSpawnP = 780;
    }

    // Eating
    if (SnakeheadX < XaxisSpawnP + 20 && SnakeheadX + 20 > XaxisSpawnP && SnakeheadY + 20 > YaxisSpawnP && SnakeheadY < YaxisSpawnP + 20) {
        XaxisSpawnP = Math.floor(Math.random() * 40) * 20;
        console.log(XaxisSpawnP);
        YaxisSpawnP = Math.floor(Math.random() * 30) * 20;
        console.log(YaxisSpawnP);
        Score = 0;
    }
    if (SnakeheadX < XaxisSpawnP2 + 20 && SnakeheadX + 20 > XaxisSpawnP2 && SnakeheadY + 20 > YaxisSpawnP2 && SnakeheadY < YaxisSpawnP2 + 20) {
        XaxisSpawnP2 = Math.floor(Math.random() * 40) * 20;
        console.log(XaxisSpawnP2);
        YaxisSpawnP2 = Math.floor(Math.random() * 30) * 20;
        console.log(YaxisSpawnP2);

    }
    if (SnakeheadX < XaxisSpawnP3 + 40 && SnakeheadX + 20 > XaxisSpawnP3 && SnakeheadY + 20 > YaxisSpawnP3 && SnakeheadY < YaxisSpawnP3 + 40) {
        XaxisSpawnP3 = Math.floor(Math.random() * 40) * 20;
        console.log(XaxisSpawnP3);
        YaxisSpawnP3 = Math.floor(Math.random() * 30) * 20;
        console.log(YaxisSpawnP3);

    }
    if (SnakeheadX < XaxisSpawnP4 + 20 && SnakeheadX + 20 > XaxisSpawnP4 && SnakeheadY + 20 > YaxisSpawnP4 && SnakeheadY < YaxisSpawnP4 + 20) {
        XaxisSpawnP4 = Math.floor(Math.random() * 40) * 20;
        console.log(XaxisSpawnP4);
        YaxisSpawnP4 = Math.floor(Math.random() * 30) * 20;
        console.log(YaxisSpawnP4);

    }

    // DRAWING
    
    // Green Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height)

    // Snake Head
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(SnakeheadX, SnakeheadY, 20, 20)

    // Apple
    ctx.fillStyle = "#ed000c"
    ctx.fillRect(XaxisSpawnP, YaxisSpawnP, 20, 20);
    // Apple2
     ctx.fillStyle = "#cc00cc"
     ctx.fillRect(XaxisSpawnP2, YaxisSpawnP2, 20, 20);
    // Apple3
    ctx.fillStyle = "#00ff00"
    ctx.fillRect(XaxisSpawnP3, YaxisSpawnP3, 40, 40);
    // Apple4
    ctx.fillStyle = "#0000ff"
    ctx.fillRect(XaxisSpawnP4, YaxisSpawnP4, 20, 20);

    // score maybe
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Current Score " + Score, 10, 20);


    requestAnimationFrame(draw);

}

// EVENT STUFF
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
    if (event.keyCode == 87) {
        Wkeyispressed = true;
    }
    if (event.keyCode == 83) {
        Skeyispressed = true;
    }
    if (event.keyCode == 65) {
        Akeyispressed = true;
    }
    if (event.keyCode == 68) {
        Dkeyispressed = true;
    }
}

function keyupHandler(event) {
    if (event.keyCode == 87) {
        Wkeyispressed = false;
    }
    if (event.keyCode == 83) {
        Skeyispressed = false;
    }
    if (event.keyCode == 65) {
        Akeyispressed = false;
    }
    if (event.keyCode == 68) {
        Dkeyispressed = false;
    }
}
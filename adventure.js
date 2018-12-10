var title = document.getElementById("title");
var description = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventoryItem = document.getElementById("inventoryItem");
var gameContainer = document.getElementById("game-container");
var gameButtons = document.getElementById("game-buttons");
var hasKey = false;


// images

var image = document.createElement("img");
description.before(image);
var coin = document.createElement("img");


// arrow images

var right = document.createElement("img");
document.body.append(right);
right.setAttribute("src", "images/leftarrow.png");
right.setAttribute("width", "200px");
right.style.position = "relative";
right.style.right = "600px";
right.style.top = "560px";
right.style.left = "118px";
right.style.cursor = "pointer";
var forward = document.createElement("img");
document.body.append(forward);
forward.setAttribute("src", "images/leftarrow.png");
forward.setAttribute("width", "600px");
forward.style.position = "relative";
forward.style.top = "580px";
var left = document.createElement("img");
document.body.append(left);
left.setAttribute("src", "images/rightarrow.png");
left.setAttribute("width", "200px");
left.style.position = "relative";
left.style.right = "603px";
left.style.top = "560px";
left.style.cursor = "pointer";

right.style.display = "none";
left.style.display = "none";
forward.style.display = "none";

// hand image

var hands = document.createElement("img");
document.body.append(hands);
hands.setAttribute("src", "images/hands.png");
hands.style.bottom = "200px";
hands.style.position = "relative";
hands.style.display = "none";
hands.style.left = "620px";
hands.setAttribute("width", "700px");



function start() {

    title.style.display = "none";
    description.style.display = "inline";
    gameContainer.style.display = "block";
    document.body.style.backgroundImage = "url('images/for.png')";
    button1.style.display = "inline";
    button2.style.display = "none";
    title.innerHTML = "Level 1";
    description.innerHTML = "Everything is blurry you can't move a muscle you can't remember what happened";
    button1.innerHTML = "Continue";
    button3.style.display = "none";
    // image.setAttribute("src", "images/planeCrash.png");
    // image.setAttribute("width", "100%");
    coin.style.display = "none";

    button1.onclick = function () {
        description.innerHTML = "You're trying to remember what happened the last thing you know was that you entered a plane, you tried to open your eyes and saw what just happened";
        button1.onclick = function () {
            document.body.style.backgroundImage = "url('images/planeCrash.png')";
            description.innerHTML = "While you try to regain your footing you notice that the plane crashed and saw many dead bodies and luggages on the ground";
            button1.onclick = function () {
                // image 
                description.innerHTML = "While you're trying to calm yourself down you hear a far away voice it coming closer, you notice it's your friend";
                button1.onclick = function () {
                    loadlevel2();
                }
            }
        }
    }

}

function load() {
    document.body.style.backgroundImage = "url('images/wel.gif')";
    coin.style.display = "none";
    setTimeout(start, 5000);

}

PlaySound = function () {
    var audio = new Audio('sound/insert.wav');
    audio.loop = false;
    audio.play();
}
function startGame() {
    key.style.display="none";
    coin.style.display = "block";
    left.style.display = "none";
    forward.style.display = "none";
    right.style.display = "none";
    gameContainer.style.display = "none";
    coin.setAttribute("src", "images/insertcoin.png");
    coin.setAttribute("width", "400px");
    coin.style.position = "absolute";
    coin.style.top = "400px";
    coin.style.left = "780px"
    coin.style.cursor = "pointer";
    coin.onclick = function () {
        PlaySound();
        load();
    }
    document.body.append(coin);
    title.style.display = "none";
    description.style.display = "none";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    inventoryItem.style.display = "none";
    document.body.style.backgroundImage = "url('images/arcade.png')"
    document.body.style.backgroundRepeat = "no-repeat";
    clicky.style.display = "none"
}





function loadlevel2() {
    playerHealth = 1;
    button2.style.display = "inline"
    button3.style.display = "none"
    // title.innerHTML = "Level 2";
    description.innerHTML = "You see Kevin and you decide to approach him, let's ask him if he knows what happened";
    button1.innerHTML = "How are you holding up?";
    button2.innerHTML = "Do you know where we are?";
    button1.onclick = function (event) {
        description.innerHTML = "I'm glad you made it, I also woke up recently, I'm not sure what to do everyone is dead, there is also no signal my phone isn't picking up anything";
        button1.innerHTML = "How are you feeling?";
        button1.onclick = function (event) {
            description.innerHTML = "I saw so many dead bodies I really don't know what to do anymore"
        };
    };
    button2.onclick = function (event) {
        button1.style.display = "inline";
        description.innerHTML = "It looks like a island I saw some skulls around the lake but I'm not sure if it was real, we could be in deep problems";
        button2.innerHTML = "What will we do from on here?"
        button2.onclick = function (event) {
            description.innerHTML = "We could look for some supplies or look if anyone else survived"
            button1.innerHTML = "Look around if we can find some supplies";
            button2.innerHTML = "Look if anyone else survived";
            button1.onclick = function (event) {
                loadlevel3();
            };
            button2.onclick = function (event) {

                description.innerHTML = "There seems to be no survivors but something is weird, every corpse is missing some body parts, looks like it has been cut";
                loadlevel3();
            };

        }
    };
}
function loadlevel3() {
    button2.style.display = "inline"
    button3.style.display = "none"
    title.innerHTML = "Level 3";
    description.innerHTML = "There is no survivors beside you guys, Some time passes and you guys decide to move";
    button1.innerHTML = "Walk forward";
    button2.style.display = "none";

    button1.onclick = function () {
        gameContainer.style.display = "none";
        button1.style.display = "none";
        right.style.display = "inline";
        right.style.position = "absolute";
        right.style.left = "52%";
        right.style.top = "59%";
        document.body.style.backgroundImage = "url('images/tocave.jpg')";



        right.onclick = function () {
            right.style.display = "none";
            button1.disabled = true;
            loadlevel5();
        }

    }
}

function loadlevel5() {
    button1.disabled = false;
    gameContainer.style.display = "block";
    document.body.style.backgroundImage = "url('images/cave.png')";
    button1.style.display = "inline";
    // button2.style.display = "inline";
    description.innerHTML = "While you guys entered the cave you found a note on the ground do you want to read it?";
    button1.innerHTML = "Read the note";
    button2.innerHTML = "Throw the note away";


    button1.onclick = function () {
        hands.style.display = "block";
        button1.innerHTML = "Continue";

        button1.onclick = function () {
            hands.style.display = "none";
            gameContainer.style.display = "none";
            left.style.display = "inline";
            left.style.width = "200px";
            left.style.position = "absolute";
            left.style.top = "12%";
            left.style.left = "22%";
            forward.style.display = "inline";
            forward.style.position = "absolute";
            forward.style.width = "200px";
            forward.style.top = "29%";
            forward.style.left = "43%";
            forward.style.cursor = "pointer";
            right.style.display = "inline";
            right.style.width = "200px";
            right.style.position = "absolute";
            right.style.top = "27%";
            right.style.left = "65%";

            left.onclick = function () {
                loadlevel6();
            }
            forward.onclick = function () {
                die();
            }
            right.onclick = function () {
                die();
            }
        }



    }
    button2.onclick = function () {

    }




}

function randomizeDoor() {
    var random = parseInt(Math.random() * 3) + 1;
    console.log(random);

    if (random === 1) {
        loadlevel6();
    } else {

        die();
    }


}

function die() {
    document.body.style.backgroundImage = "url('images/gameOver.jpg')";
    setTimeout(startGame, 3000);
    gameContainer.style.display = "none";


}

function loadlevel6() {
    left.style.display = "none";
    document.body.style.backgroundImage = "url('images/cave2.png')";
    button1.style.display = "none";
    forward.style.display = "inline";
    forward.style.position = "absolute";
    forward.style.width = "200px";
    forward.style.top = "75%";
    forward.style.left = "87%";
    forward.style.cursor = "pointer";
    right.style.display = "inline";
    right.style.width = "200px";
    right.style.position = "absolute";
    right.style.top = "27%";
    right.style.left = "65%";
    right.style.transform="rotate(20deg)";
    


    
    forward.onclick = function () {
        die();
    }
    right.onclick = function () {
        loadlevel7();
    }

}

function loadlevel7() {
    document.body.style.backgroundImage = "url('images/cave3.png')";
    forward.style.display = "none";
    left.style.display = "inline";
    left.style.width = "200px";
    left.style.position = "absolute";
    left.style.top = "63%";
    left.style.left = "22%";
    right.style.display = "inline";
    right.style.width = "200px";
    right.style.position = "absolute";
    right.style.top = "48%";
    right.style.left = "86%";


    
    left.onclick = function () {
        loadlevel8();
    }
    
    right.onclick = function () {
        die();
    }
}



var key = document.createElement("img");
key.style.display="none";
key.setAttribute("src", "https://www.emoji.co.uk/files/phantom-open-emojis/objects-phantom/12849-key.png");
key.setAttribute("width", "100px");
key.style.cursor = "pointer";
document.body.append(key);
var itemSrc;




function pickItem(item){
    var itemSrc = item.getAttribute("src");
    inventoryItem.setAttribute("src", itemSrc);
    itemSrc = inventoryItem;

}

function loadlevel8() {
    key.style.display="inline-block";
    gameContainer.style.display = "inline-block";
    inventoryItem.style.display = "inline";
    document.body.style.backgroundImage = "url('images/cave4.jpg')";
    forward.style.display = "inline";
    forward.style.position = "absolute";
    forward.style.width = "200px";
    forward.style.top = "51%";
    forward.style.left = "43%";
    forward.style.cursor = "pointer";
    right.style.display = "inline";
    right.style.width = "200px";
    right.style.position = "absolute";
    right.style.top = "58%";
    right.style.left = "57%";
    left.style.display = "none";
    description.innerHTML = "Hey look there is a key on the ground lets take it, might be useful for later";
    key.style.position = "absolute";
    key.style.bottom = "22%";
    key.style.left="34%";



    
    forward.onclick = function () {
        die();
    }
    right.onclick = function () {

        loadlevel9();
    }
     
   
    }
    key.onclick = function() {
      pickItem(key);
      hasKey = true;
      key.remove();

     
    
      
    }

   


    
   



function loadlevel9() {
    key.style.display="none";
    document.body.style.backgroundImage = "url('images/final.png')";
    left.style.display = "inline";
    left.style.width = "200px";
    left.style.position = "absolute";
    left.style.top = "65%";
    left.style.left = "19%";
    forward.style.display = "none";
    description.innerHTML ="Look there is a keyhole this might be the door to our escape";
    right.style.display="none";
    forward.style.display="none";
    



    left.onclick = function () {
        if(hasKey===true){
            loadlevel10();

        }else if(hasKey===false){
            description.innerHTML ="You don't have the key";
        }
    }

        
        
    
}

function loadlevel10() {
    document.body.style.backgroundImage = "url('images/endgame.png')";
    gameContainer.style.display="none";
    
}


startGame();

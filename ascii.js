var array = new Array();
    array[0] = "Blank";
    array[1] = "Custom";
    array[2] = "Exercise";
    array[3] = "Juggler";
    array[4] = "Bike";
    array[5] = "Dive";
    
window.onload = function(){
    var text = document.getElementById("textarea");
    for(var i = 0; i < array.length; i++){
        text.value += ANIMATIONS[array[i]];
    }
};

var count = 0;
var timer = null;
var moveCount = 0;
var recordPage = 0;
function start(){
    document.getElementById("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;
    document.getElementById("select").disabled = true;
    recordPage++;
    if(count >= 6){
        count = 0;
    }
    var text = document.getElementById("textarea");
    var moveArray = ANIMATIONS[array[count]].split("=====\n");
    if(changeFlags === false){
        if(moveCount < moveArray.length){
            text.value = moveArray[moveCount];
            moveCount++;
        }else{
            moveCount = 0;
            count++;
        }
    }else{
        if(moveCount < moveArray.length){
            text.value = moveArray[moveCount];
            moveCount++;
        }else{
            moveCount = 0;
        }
    }
    

    if(timer === null){
        timer = setInterval("start()", 250);
    }else{
        window.clearInterval(timer);
        if(document.getElementById("checkbox").checked === true){
            timer = setInterval("start()", 50);
        }else{
            timer = setInterval("start()", 250);
        }
    }
}

function stop(){
    window.clearInterval(timer);
    timer = null;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById("select").disabled = false;
}
var changeFlags = false;
function change(){
    changeFlags = true;
    var option = document.getElementById("select");
    var text = document.getElementById("textarea");
    text.value = ANIMATIONS[option.value].split("=====\n")[0];
    switch(option.value){
        case "Blank":
            count = 0;
            break;
        case "Custom":
            count = 1;
            break;
        case "Exercise":
            count = 2;
            break;
        case "Juggler":
            count = 3;
            break;
        case "Bike":
            count = 4;
            break;
        case "Dive":
            count = 5;
            break;
    }
    
}

function textChange(){
    var textInput = document.getElementById("textarea").value;
    ANIMATIONS[array[recordPage % 6 - 1]] = textInput;
}

function sizeChange(){
    var changeSize = document.getElementById("size").value;
    document.getElementById("textarea").style.fontSize = changeSize;
}



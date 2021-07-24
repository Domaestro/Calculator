var num1 = 0;
var num2 = 0;
var WeAreOnNum = 1;
var action = "multi";

function handleEqual() {
    var output = document.getElementById("outwindow");
    if (num2 != null) {
        if (action == "div") {
            output.innerHTML = num1 / num2;
            num1 = num1 / num2;
        } 
        if (action == "multi") {
            output.innerHTML = num1 * num2;
            num1 = num1 * num2;
        } 
        if (action == "minus") {
            output.innerHTML = num1 - num2;
            num1 = num1 - num2;
        } 
        if (action == "plus") {
            output.innerHTML = num1 + num2;
            num1 = num1 + num2;
        } 
    }
}

function handleDiv () {
    WeAreOnNum = 2;
    num2 = 0;
    action = "div";
}

function handleMulti () {
    WeAreOnNum = 2;
    num2 = 0;
    action = "multi";
}

function handleMinus () {
    WeAreOnNum = 2;
    num2 = 0;
    action = "minus";
}

function handlePlus () {
    WeAreOnNum = 2;
    num2 = 0;
    action = "plus";
}

function handleCls () {
    num1 = 0;
    num2 = 0;
    WeAreOnNum = 1;
    action = "multi";
    var output = document.getElementById("outwindow");
    output.innerHTML = num1 * num2;
}

function handleUndo () {
    if (WeAreOnNum == 1) {
        if(num1!=0) {
            num1 = Number(String(num1).substring(0, String(num1).length - 1))
            var output = document.getElementById("outwindow");
            output.innerHTML = num1;
        }
    }
    if (WeAreOnNum == 2) {
        if(num2!=0){
            num2 = Number(String(num2).substring(0, String(num2).length - 1))
            var output = document.getElementById("outwindow");
            output.innerHTML = num2;
        }
    }
}

function handlePoint () {
    if (WeAreOnNum == 1) {
        if (String(num1).indexOf('.') == -1) {
            num1 = String(num1) + ".";
            var output = document.getElementById("outwindow");
            output.innerHTML = num1;
        }
    }
    if (WeAreOnNum == 2) {
        if(String(num2).indexOf('.') == -1){
            num2 = String(num2) + ".";
            var output = document.getElementById("outwindow");
            output.innerHTML = num2;
        }
    }
}

function handleNumBtns(eventObj) {
    var button = eventObj.target;
    var name = button.id;
    name = name.toString().slice(-1);
    if(WeAreOnNum == 1) {
        num1 = Number(String(num1) + name);
        var output = document.getElementById("outwindow");
        output.innerHTML = num1;
    }
    if(WeAreOnNum == 2) {
        num2 = Number(String(num2) + name);
        var output = document.getElementById("outwindow");
        output.innerHTML = num2;
    }
}

window.onload = init;
function init() {
    var equalBtn = document.getElementById("btn_equal");
    var divBtn = document.getElementById("btn_div");
    var multiBtn = document.getElementById("btn_multi");
    var minusBtn = document.getElementById("btn_minus");
    var plusBtn = document.getElementById("btn_plus");
    var clsBtn = document.getElementById("btn_cls");
    var undoBtn = document.getElementById("btn_undo");
    var pointBtn = document.getElementById("btn_point");
	equalBtn.onclick = handleEqual;
    divBtn.onclick = handleDiv;
    multiBtn.onclick = handleMulti;
    minusBtn.onclick = handleMinus;
    plusBtn.onclick = handlePlus;
    clsBtn.onclick = handleCls;
    undoBtn.onclick = handleUndo;
    pointBtn.onclick = handlePoint;

    var numbtns = document.getElementsByTagName("span");
    for (var i = 0; i < numbtns.length; i++) {
        numbtns[i].onclick = handleNumBtns;
    }
}

const display= document.getElementById("display");

function showOnScreen(input){
    display.value += input;
}

function calculate(){
    try{
        display.value =eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function clearScreen (){
    display.value = "";
}

function del(){
    if(display.value.length >0){
        display.value = display.value.slice(0,-1);
    }
}

function percentage(){
    display.value = eval(display.value + "/100");
}


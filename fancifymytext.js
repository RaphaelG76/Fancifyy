function makeBigger(){
    
    document.getElementById("inputText").style.fontSize = "24pt";

}

function makeFancy(){
    document.getElementById("inputText").style.fontWeight = "bold";
    document.getElementById("inputText").style.color = "blue";
    document.getElementById("inputText").style.textDecoration = "underline";
}

function makeBoring(){
    document.getElementById("inputText").style.fontWeight = "normal";
    document.getElementById("inputText").style.color = "black";
    document.getElementById("inputText").style.textDecoration = "none";

}

function makeMoo(){
    var text =document.getElementById("inputText");
    text.value = text.value.toUpperCase();
    var parts = text.value.split(".");
    text.value = parts.join("Moo");
}
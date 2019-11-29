var request = new XMLHttpRequest();
request.open("experements.json");
request.send(null);
jsonexperiments = JSON.parse("request.responseText",false);
console.log(jsonexperiments);

function pasteExperement(){
    leftmenuelem = document.getElementById("block-menu").getElementsByClassName("ul");
    maininfoelem = document.getElementById("right");

}
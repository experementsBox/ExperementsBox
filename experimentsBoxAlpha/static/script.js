leftmenuelem = document.getElementById("inmenu");
maininfoelem = document.getElementById("right");

function createPageForExperiments(data){
    leftmenuelem.innerHTML = " ";
    maininfoelem.innerHTML = "<h2>Нажмите на опыт слева чтобы просмотреть его</h2>";
    for(var key in data){
        var l = document.createElement("li");
        l.innerHTML = data[key]["title"];
        oncl = "pasteExperement('" + key + "')";
        l.setAttribute("onclick",oncl);
        l.setAttribute("id","clickable");
        leftmenuelem.appendChild(l);
    };
    leftmenuelem.appendChild(document.createElement("li"));
};

function createPageAbout(){
    leftmenuelem.innerHTML = " ";
    maininfoelem.innerHTML = "<h2>Нажмите на вкладку слева чтобы просмотреть информацию</h2>";
    for(var key in aboutInfo){
        var l = document.createElement("li");
        l.innerHTML = aboutInfo[key]["title"];
        oncl = "pasteInfo('" + key + "')";
        l.setAttribute("onclick",oncl);
        l.setAttribute("id","clickable");
        leftmenuelem.appendChild(l);
    };
    leftmenuelem.appendChild(document.createElement("li"));
}

function pasteExperement(elem){
    var h = document.createElement("h1");
    h.innerHTML = experimentsInfo[elem]["title"];
    maininfoelem.innerHTML = " ";
    maininfoelem.appendChild(h);
    maininfoelem.innerHTML += experimentsInfo[elem]["text"];
};

function pasteInfo(page){
    var h = document.createElement("h1");
    h.innerHTML = aboutInfo[page]["title"];
    maininfoelem.innerHTML = " ";
    maininfoelem.appendChild(h);
    maininfoelem.innerHTML += aboutInfo[page]["text"];
}
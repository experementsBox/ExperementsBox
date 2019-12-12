leftmenuelem = document.getElementById("inmenu");
maininfoelem = document.getElementById("right");

function init(contex,contab){
    window.experimentsInfo = contex;
    window.aboutInfo = contab;
};

function createPageForExperiments(){
    leftmenuelem.innerHTML = " ";
    maininfoelem.innerHTML = "<h2>Нажмите на опыт слева чтобы просмотреть его</h2>";
    for(var key in window.experimentsInfo){
        var l = document.createElement("li");
        l.innerHTML = window.experimentsInfo[key]["title"];
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
    for(var key in window.aboutInfo){
        var l = window.document.createElement("li");
        l.innerHTML = window.aboutInfo[key]["title"];
        oncl = "pasteInfo('" + key + "')";
        l.setAttribute("onclick",oncl);
        l.setAttribute("id","clickable");
        leftmenuelem.appendChild(l);
    };
    leftmenuelem.appendChild(document.createElement("li"));
}

function pasteExperement(elem){
    var h = document.createElement("h1");
    h.innerHTML = window.experimentsInfo[elem]["title"];
    maininfoelem.innerHTML = " ";
    maininfoelem.appendChild(h);
    maininfoelem.innerHTML += window.experimentsInfo[elem]["text"];
    if (window.experimentsInfo[elem]["imgatr"] != null){
        for(var key = 0; key < window.experimentsInfo[elem]["imgatr"].length; key++){
            var imgstr = `<img src=/static/'${window.experimentsInfo[elem]['imgatr'][key]}' width=690>`;
            maininfoelem.innerHTML += imgstr.replace('\'','').replace('\'','');
        }
    };
};

function pasteInfo(page){
    var h = document.createElement("h1");
    h.innerHTML = window.aboutInfo[page]["title"];
    maininfoelem.innerHTML = " ";
    maininfoelem.appendChild(h);
    maininfoelem.innerHTML += window.aboutInfo[page]["text"];
}
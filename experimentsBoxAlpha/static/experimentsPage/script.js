leftmenuelem = document.getElementById("inmenu");
maininfoelem = document.getElementById("main");

function init(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","/getExperimentsInfo",false);
    xhr.send(null);
    if (xhr.status == 200) window.experimentsInfo = JSON.parse(xhr.responseText);

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
}

function pasteExperement(elem){
    var h = document.createElement("h1");
    h.innerHTML = window.experimentsInfo[elem]["title"];
    maininfoelem.innerHTML = " ";
    maininfoelem.appendChild(h);
    maininfoelem.innerHTML += window.experimentsInfo[elem]["text"];
    if (window.experimentsInfo[elem]["imgatr"] != null){
        for(var key = 0; key < window.experimentsInfo[elem]["imgatr"].length; key++){
            var imgstr = `<img src=static/media/'${window.experimentsInfo[elem]['imgatr'][key]}' class=mediacon>`;
            maininfoelem.innerHTML += imgstr.replace('\'','').replace('\'','');
        }
    };
};
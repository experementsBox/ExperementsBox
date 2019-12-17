leftmenuelem = document.getElementById("inmenu");
maininfoelem = document.getElementById("main");

function init(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","/getAboutInfo",false);
    xhr.send(null);
    if (xhr.status == 200) window.aboutInfo = JSON.parse(xhr.responseText);

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
}

function pasteInfo(page){
    var h = document.createElement("h1");
    h.innerHTML = window.aboutInfo[page]["title"];
    maininfoelem.innerHTML = " ";
    maininfoelem.appendChild(h);
    maininfoelem.innerHTML += window.aboutInfo[page]["text"];
}
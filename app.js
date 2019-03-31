var els=document.getElementsByClassName("btn-download-resume");
$$("btn-down").onmouseover=function () {
    $$("tips").style.display="none";

    for(var i=0;i<els.length;i++){
        els[i].style.display="block";
        els[i].style.textDecoration="none";
    }
};

$$("btn-down").onmouseout=function () {
    $$("tips").style.display="block";
    for(var i=0;i<els.length;i++){
        els[i].style.display="none";
    }
};
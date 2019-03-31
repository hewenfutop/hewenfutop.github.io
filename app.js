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



var mdEls=document.getElementsByClassName("md-btn-download-resume");
$$("md-btn-down").onmouseover=function () {
    // $$("md-tips").style.display="none";

    for(var i=0;i<mdEls.length;i++){
        mdEls[i].style.display="block";
        mdEls[i].style.textDecoration="none";
    }
};

$$("md-btn-down").onmouseout=function () {
    // $$("md-tips").style.display="block";
    for(var i=0;i<mdEls.length;i++){
        mdEls[i].style.display="none";
    }
};
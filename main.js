var bgElems = document.getElementsByClassName("bg");
var count = bgElems.length;
var currElem = 0;
var width = window.innerWidth;
var idInterval;

var changeBg = function () {
    bgElems[currElem].style.opacity = "0";
    if (currElem < count - 1) {
        bgElems[currElem + 1].style.opacity = "1";
        currElem = currElem + 1;
    } 
    else {
        bgElems[0].style.opacity = "1";
        currElem = 0;
    }
};

idInterval = setInterval(changeBg, 10000);

document.querySelector(".nav-prev").onclick = function () {
    clearInterval(idInterval);
    bgElems[currElem].style.opacity = "0";
    if (currElem > 0) {
        bgElems[currElem - 1].style.opacity = "1";
        currElem = currElem - 1;
    }
    else {
        bgElems[count - 1].style.opacity = "1";
        currElem = count - 1;
    }
    idInterval = setInterval(changeBg, 10000);
};

document.querySelector(".nav-next").onclick = function () {
    clearInterval(idInterval);
    bgElems[currElem].style.opacity = "0";
    if (currElem < count - 1) {
        bgElems[currElem + 1].style.opacity = "1";
        currElem = currElem + 1;
    }
    else {
        bgElems[0].style.opacity = "1";
        currElem = 0;
    }
    idInterval = setInterval(changeBg, 10000);
};

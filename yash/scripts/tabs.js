document.getElementById("btn-1").style.borderBottom = "2px solid gray"
document.getElementById("btn-4").style.borderBottom = "2px solid gray"
document.getElementById("btn-8").style.borderBottom = "2px solid gray"
document.getElementById("btn-11").style.border = "2px solid gray"
document.getElementById("btn-15").style.border = "2px solid gray"

function openCity(tabName, id) {
    var i;
    var x = document.getElementsByClassName("tab-1");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("btn-1").style.border = "none"
    document.getElementById("btn-2").style.border = "none"
    document.getElementById("btn-3").style.border = "none"
    if (tabName === "Founder") {
        document.getElementById(tabName).style.display = "flex";
    } else {
        document.getElementById(tabName).style.display = "block";
    }
    document.getElementById(id).style.borderBottom = "2px solid gray"

}

function openCity1(tabName, id) {
    var i;
    var x = document.getElementsByClassName("tab-2");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("btn-4").style.border = "none"
    document.getElementById("btn-5").style.border = "none"
    document.getElementById("btn-6").style.border = "none"
    document.getElementById("btn-7").style.border = "none"
    document.getElementById(tabName).style.display = "block";
    document.getElementById(id).style.borderBottom = "2px solid gray"
}

function openCity2(tabName, id) {
    var i;
    var x = document.getElementsByClassName("tab-3");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("btn-8").style.border = "none"
    document.getElementById("btn-9").style.border = "none"
    document.getElementById("btn-10").style.border = "none"
    document.getElementById(tabName).style.display = "block";
    document.getElementById(id).style.borderBottom = "2px solid gray"
}

function openCity3(tabName, id) {
    var i;
    var x = document.getElementsByClassName("tab-4");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("btn-11").style.border = "none"
    document.getElementById("btn-12").style.border = "none"
    document.getElementById("btn-13").style.border = "none"
    document.getElementById("btn-14").style.border = "none"
    document.getElementById(id).style.border = "2px solid gray"
    document.getElementById(tabName).style.display = "block";
}

function openCity4(tabName, id) {
    var i;
    var x = document.getElementsByClassName("tab-5");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("btn-15").style.border = "none"
    document.getElementById("btn-16").style.border = "none"
    document.getElementById("btn-17").style.border = "none"
    document.getElementById("btn-18").style.border = "none"
    document.getElementById(id).style.border = "2px solid gray"
    document.getElementById(tabName).style.display = "block";
}
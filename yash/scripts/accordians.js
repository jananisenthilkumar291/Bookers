function toggle(id) {
    var symbol = document.getElementsByClassName("symbol");
    ele = document.getElementById(id).childNodes
    if (ele[1].childNodes[1].innerText === "+")
        ele[1].childNodes[1].innerText = "-"
    else
        ele[1].childNodes[1].innerText = "+"
}
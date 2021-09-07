

function semafor() {
var boje = document.getElementsByClassName ('boje');
boje[0].style.background= 'red';
boje[1].style.background= 'gray';
boje[2].style.background= 'gray';




function changeToYellow() {
    boje[1].style.background= 'yellow';
}


function changeToGreen() {
    boje[0].style.background= 'grey';
    boje[1].style.background= 'grey';
    boje[2].style.background= 'green';  
}

var x = setTimeout (changeToYellow, 5000);
var x = setTimeout (changeToGreen, 7000);
var start = setInterval (semafor, 10000);
}

semafor();
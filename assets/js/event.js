var t = document.getElementsByClassName('persen-munber')[0];
var d = 0;
var time = setInterval(function() {
    if (d > 58) clearInterval(time);
    d++;
    t.innerHTML = d;
}, 20);
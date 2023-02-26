function iniciar(){
    var canvas = document.getElementById("lienzo");
    var ctx = canvas.getContext("2d");
    fondo= document.getElementById('fondo');
    ctx.drawImage(fondo, 12,0,1330, 605);
}

window.addEventListener('load', iniciar, false);

const d = document;
const fondo = d.getElementById("fondo");
const canvas = d.getElementById("lienzo");
const btn = d.getElementById("playAgain");

function iniciar(){
    let ctx = canvas.getContext("2d");
    ctx.drawImage(fondo, 90, 0, 1200, 805);

    var f = new FontFace('Font name', 'url(../fonts/FontsFree.ttf)');
    f.load().then(function(font){
        // Comprobación de la fuente cargada
        console.log("Fuente Cargada");
        // Añadimos la fuente
        document.fonts.add(font);
        ctx.font = "45px Font name";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(`MUCHAS FELICIDADES ${localStorage.actualPlayer}`, canvas.width/2, 100);

        // Título más grande
        ctx.font = "50px Font name";
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.fillText("Eres una SUPERESTRELLA :D", canvas.width/2, 500);
        
    })

    const bluey = d.getElementById("bluey");
    const dingo = d.getElementById("dingo");

    ctx.drawImage(bluey, 100, 210, 300, 300);
    ctx.drawImage(dingo, 1000, 120, 180, 250);

    setTimeout(()=>{
        btn.style.display = "inline-block";
    }, 2000)
}

d.addEventListener("DOMContentLoaded", ()=>{
    iniciar();
})

d.addEventListener("click", (e)=>{
    if(e.target.matches("#playAgain")){
        window.location.href = "../../pantallaJuego/index.html"
    }
    if(e.target.matches("#volver")){
        window.location.href = "../../pantallaDatos/data.html";
    }
})
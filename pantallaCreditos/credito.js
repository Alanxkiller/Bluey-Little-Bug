
function iniciar(){
    var canvas = document.getElementById("lienzo");
    var ctx = canvas.getContext("2d");

    const fondo= document.getElementById('fondo');
    const logo = document.getElementById('logo');

    ctx.drawImage(fondo, 12,0,1330, 605);
    // Pa el logo 
    ctx.drawImage(logo, canvas.width/10, 20, 400, 350)
    // Cambié el nombre de la fuente ya que parecía que eso era lo que daba problemas
    var f = new FontFace('Font name', 'url(fonts/FontsFree.ttf)');
    f.load().then(function(font){
        // Comprobación de la fuente cargada
        console.log("Fuente Cargada");
        // Añadimos la fuente
        document.fonts.add(font);
        ctx.font = "40px Font name";
        ctx.shadowBlur= 0;
        ctx.shadowColor = "";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("BLUEY LITTLE BUG", canvas.width/4, 210);


        //universidad
        ctx.font = "25px Font name";
        ctx.fillStyle = "#FFDEAD";
        ctx.textAlign = "center";
        ctx.shadowBlur= 40;
        ctx.shadowColor = "black";
        ctx.fillText("Universidad Autonoma de Aguascalientes", canvas.width/1.5, 90);

        //carrera
        ctx.font = "25px Font name";
        ctx.fillStyle = "#FFDEAD";
        ctx.textAlign = "center";
        ctx.fillText("Ingeniería en Sistemas", canvas.width/1.5, 130);

        //semestre
        ctx.font = "25px Font name";
        ctx.fillStyle = "#FFDEAD";
        ctx.textAlign = "center";
        ctx.fillText("6° Semestre", canvas.width/1.5, 180);

        //materia
        ctx.font = "25px Font name";
        ctx.fillStyle = "#FFDEAD";
        ctx.textAlign = "center";
        ctx.fillText("Tecnologías Web", canvas.width/1.5, 230);

        //integrantes
        ctx.font = "25px Font name";
        ctx.fillStyle = "#FF8C00";
        ctx.textAlign = "center";
        ctx.fillText("Sergio Enrique Galvan Barrios", canvas.width/1.5, 280);

        ctx.font = "25px Font name";
        ctx.fillStyle = "#FF8C00";
        ctx.textAlign = "center";
        ctx.fillText("Alan Axel Escobar Calzada", canvas.width/1.5, 325);

        ctx.font = "25px Font name";
        ctx.fillStyle = "#FF8C00";
        ctx.textAlign = "center";
        ctx.fillText("Claudia Margarita Sandoval Chávez", canvas.width/1.5, 370);

        ctx.font = "25px Font name";
        ctx.fillStyle = "#FF8C00";
        ctx.textAlign = "center";
        ctx.fillText("Josue Emmanuel Uranga Calzada", canvas.width/1.5, 415);

        

        //fecha
        ctx.font = "25px Font name";
        ctx.fillStyle = "#FFDEAD";
        ctx.textAlign = "center";
        ctx.fillText("04 de Marzo de 2023", canvas.width/1.5, 465);

        //ciudad
        ctx.font = "25px Font name";
        ctx.fillStyle = "#FFDEAD";
        ctx.textAlign = "center";
        ctx.fillText("Aguascalientes, Ags", canvas.width/1.3, 510);
        
    })
    // Fuentes.
    playMusic();
}

window.addEventListener('load', iniciar, false);

document.addEventListener("click", (e)=>{
    if(e.target.matches("#volver")){
        window.location.href = "../pantallaDatos/data.html"
    }
    if(e.target.matches("#table")){
        window.location.href = "../pantallaJugadores/players.html"
    }
})

function playMusic(){
    let audio = document.getElementById("audioCredits");
    audio.volume = 0.3;
    audio.play();
}
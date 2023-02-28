function iniciar(){
    var canvas = document.getElementById("lienzo");
    var ctx = canvas.getContext("2d");
    const fondo= document.getElementById('fondo');
    const logo = document.getElementById('logo');

    ctx.drawImage(fondo, 12,0,1330, 605);
    // Pa el logo 
    ctx.drawImage(logo, canvas.width/4.8, 20, 800, 360)
    // Cambié el nombre de la fuente ya que parecía que eso era lo que daba problemas
    var f = new FontFace('Font name', 'url(fonts/FontsFree.ttf)');
    f.load().then(function(font){
        // Comprobación de la fuente cargada
        console.log("Fuente Cargada");
        // Añadimos la fuente
        document.fonts.add(font);
        ctx.font = "40px Font name";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Little Bug", canvas.width/2, 220);
        
    })
    // Fuentes.
}



window.addEventListener('load', iniciar, false);

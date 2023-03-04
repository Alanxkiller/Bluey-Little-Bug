
function iniciar(){
    var canvas = document.getElementById("lienzo");
    var ctx = canvas.getContext("2d");
    var canvas2 = document.getElementById("lienzo2");
    var ctx2 = canvas2.getContext("2d");
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
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("BLUEY LITTLE BUG", canvas.width/4, 210);
        
    })
    // Fuentes.

    var segs = 0;

        function pad(val) {
            return val > 9 ? val : "0" + val;
        }
        function pad2(val2) {
            return val2 > 9 ? val2 : "0" + val2;
        }
        setInterval(function() {
            ctx2.clearRect(0, 0, canvas.width, canvas.height);
            var segundos = pad(++segs % 60);
            var minutos = pad(parseInt(segs / 60, 10));
            const seg= document.getElementById("segundos").innerHTML = segundos;
            const min=document.getElementById("minutos").innerHTML = minutos+":";
            f.load().then(function(font){
                // Comprobación de la fuente cargada
                console.log("Fuente Cargada");
                // Añadimos la fuente
                document.fonts.add(font);
                ctx2.font = "40px Font name";
                ctx2.fillStyle = "white";
                ctx2.textAlign = "center";
                ctx2.fillText(seg, 1150, 30);

                document.fonts.add(font);
                ctx2.font = "40px Font name";
                ctx2.fillStyle = "white";
                ctx2.textAlign = "center";
                ctx2.fillText(min, 1100, 30);
            })
        }, 1000);
}



window.addEventListener('load', iniciar, false);






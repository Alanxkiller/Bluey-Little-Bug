
function iniciar(){
    var canvas = document.getElementById("lienzo");
    var ctx = canvas.getContext("2d");
    fondo= document.getElementById('fondo');
    ctx.drawImage(fondo, 12,0,1330, 605);

    mySound = new sound("");
    myMusic = new sound("media/intro.mp3");
    myMusic.play();
    
}

var f = new FontFace('Font name', 'url(FontsFree-Net-Hello-Headline-W00-Regular.ttf)');
    f.load().then(function (font) {

        // Ready to use the font in a canvas context
        console.log('font ready');

        // Add font on the html page
        document.fonts.add(font);
        var canvas = document.getElementById("lienzo");
        var ctx = canvas.getContext("2d");
        ctx.font = '48px Font name';
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Little Bug", canvas.width/2, 100);

    });

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}






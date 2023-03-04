var puntos = 0;
let ganar = 0;
var segs = 0;

function pad(val) {
  return val > 9 ? val : "0" + val;
}
function pad2(val2) {
  return val2 > 9 ? val2 : "0" + val2;
}

function iniciar() {
  var canvasCron = document.getElementById("cronometro");
  var ctxCron = canvasCron.getContext("2d");
  var f = new FontFace('Font name', 'url(fonts/FontsFree.ttf)');

  setInterval(function () {
    ctxCron.clearRect(0, 0, canvasCron.width, canvasCron.height);
    var segundos = pad(++segs % 60);
    var minutos = pad(parseInt(segs / 60, 10));
    const seg = document.getElementById("segundos").innerHTML = segundos;
    const min = document.getElementById("minutos").innerHTML = minutos + ":";
    f.load().then(function (font) {
      // Añadimos la fuente
      document.fonts.add(font);
      ctxCron.font = "40px Font name";
      ctxCron.fillStyle = "white";
      ctxCron.textAlign = "center";
      ctxCron.fillText("Puntos: " + puntos, 500, 30);

      document.fonts.add(font);
      ctxCron.font = "40px Font name";
      ctxCron.fillStyle = "white";
      ctxCron.textAlign = "center";
      ctxCron.fillText(seg, 1350, 30);

      document.fonts.add(font);
      ctxCron.font = "40px Font name";
      ctxCron.fillStyle = "white";
      ctxCron.textAlign = "center";
      ctxCron.fillText(min, 1300, 30);
    })
  }, 1000);

  var imagenes = document.querySelectorAll("#cajaimagenes > img");
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("dragstart", arrastrado, false);
    imagenes[i].addEventListener("dragend", finalizado, false);
  }

  setTimeout(function () {
    $("#cajaimagenes").html($("#cajaimagenes .imagenes").sort(function () {
      return Math.random() - 0.5;
    }));

    $(".contenedor").html($(".contenedor .soltar").sort(function () {
      return Math.random() - 0.5;
    }));

    var snd = new Audio("music/Pop.mp3"); // buffers automatically when created
    snd.play();
  }, 500);


  soltar1 = document.getElementById("Mollete1");
  lienzo1 = soltar1.getContext("2d");
  soltar1.addEventListener("dragenter", eventoEnter1, false);
  soltar1.addEventListener("dragover", eventoOver1, false);
  soltar1.addEventListener("drop", soltado1, false);
  f.load().then(function (font) {
    // Añadimos la fuente
    document.fonts.add(font);
    lienzo1.font = "30px Font name";
    lienzo1.fillStyle = "black";
    lienzo1.textAlign = "center";
    lienzo1.fillText("Bandit", 90, 70);
  })
  var maderita = document.getElementById("maderita");
  lienzo1.drawImage(maderita, 10, 10);

  soltar2 = document.getElementById("Mollete2");
  lienzo2 = soltar2.getContext("2d");
  soltar2.addEventListener("dragenter", eventoEnter2, false);
  soltar2.addEventListener("dragover", eventoOver2, false);
  soltar2.addEventListener("drop", soltado2, false);
  f.load().then(function (font) {
    // Añadimos la fuente
    document.fonts.add(font);
    lienzo2.font = "30px Font name";
    lienzo2.fillStyle = "black";
    lienzo2.textAlign = "center";
    lienzo2.fillText("Chilli", 90, 70);
  })
  var maderita = document.getElementById("maderita");
  lienzo2.drawImage(maderita, 10, 10);

  soltar3 = document.getElementById("Mollete3");
  lienzo3 = soltar3.getContext("2d");
  soltar3.addEventListener("dragenter", eventoEnter3, false);
  soltar3.addEventListener("dragover", eventoOver3, false);
  soltar3.addEventListener("drop", soltado3, false);
  f.load().then(function (font) {
    // Añadimos la fuente
    document.fonts.add(font);
    lienzo3.font = "30px Font name";
    lienzo3.fillStyle = "black";
    lienzo3.textAlign = "center";
    lienzo3.fillText("Bingo", 90, 70);
  })
  var maderita = document.getElementById("maderita");
  lienzo3.drawImage(maderita, 10, 10);

  soltar4 = document.getElementById("Mollete4");
  lienzo4 = soltar4.getContext("2d");
  soltar4.addEventListener("dragenter", eventoEnter4, false);
  soltar4.addEventListener("dragover", eventoOver4, false);
  soltar4.addEventListener("drop", soltado4, false);
  f.load().then(function (font) {
    // Añadimos la fuente
    document.fonts.add(font);
    lienzo4.font = "30px Font name";
    lienzo4.fillStyle = "black";
    lienzo4.textAlign = "center";
    lienzo4.fillText("Bluey", 90, 70);
  })
  var maderita = document.getElementById("maderita");
  lienzo4.drawImage(maderita, 10, 10);


  soltar5 = document.getElementById("Mollete5");
  lienzo5 = soltar5.getContext("2d");
  soltar5.addEventListener("dragenter", eventoEnter5, false);
  soltar5.addEventListener("dragover", eventoOver5, false);
  soltar5.addEventListener("drop", soltado5, false);
  f.load().then(function (font) {
    // Añadimos la fuente
    document.fonts.add(font);
    lienzo5.font = "30px Font name";
    lienzo5.fillStyle = "black";
    lienzo5.textAlign = "center";
    lienzo5.fillText("Muffin", 90, 70);
  })
  var maderita = document.getElementById("maderita");
  lienzo5.drawImage(maderita, 10, 10);

  soltar6 = document.getElementById("Mollete6");
  lienzo6 = soltar6.getContext("2d");
  soltar6.addEventListener("dragenter", eventoEnter6, false);
  soltar6.addEventListener("dragover", eventoOver6, false);
  soltar6.addEventListener("drop", soltado6, false);
  f.load().then(function (font) {
    // Añadimos la fuente
    document.fonts.add(font);
    lienzo6.font = "25px Font name";
    lienzo6.fillStyle = "black";
    lienzo6.textAlign = "center";
    lienzo6.fillText("Pom Pom", 92, 65);
  })
  var maderita = document.getElementById("maderita");
  lienzo6.drawImage(maderita, 10, 10);

  /*cPuntaje = document.getElementById("cPuntaje");
  ctxPts = cPuntaje.getContext("2d");
  ctxPts.font = "30px Arial";
  ctxPts.fillText("Puntos: ",0,30);*/

}



function eventoEnter1(e) {
  console.log(
    "soy el evento dragenter" +
    e.pageX -
    soltar1.offsetLeft +
    "posy " +
    e.pageY -
    soltar1.offsetTop
  );
  e.preventDefault();
}

function eventoOver1(e) {
  e.preventDefault();
}

function eventoEnter2(e) {
  e.preventDefault();
}

function eventoOver2(e) {
  e.preventDefault();
}

function eventoEnter3(e) {
  e.preventDefault();
}

function eventoOver3(e) {
  e.preventDefault();
}

function eventoEnter4(e) {
  e.preventDefault();
}

function eventoOver4(e) {
  e.preventDefault();
}

function eventoEnter5(e) {
  e.preventDefault();
}

function eventoOver5(e) {
  e.preventDefault();
}

function eventoEnter6(e) {
  e.preventDefault();
}

function eventoOver6(e) {
  e.preventDefault();
}

function finalizado(e) {
  if (ganar == 6) {
    console.log("GANASTEE! con: " + puntos + " puntos");
    var congratz = new Audio("music/Congratulaciones.mp3");
    congratz.play();
    alert("GANASTEE! con: " + puntos + " puntos");

  }
  elemento = e.target;
  //elemento.style.visibility = 'hidden';
}

function arrastrado(e) {
  elemento = e.target;
  e.dataTransfer.setData("Text", elemento.getAttribute("id"));
  e.dataTransfer.setDragImage(e.target, 0, 0);
}

function soltado1(e) {
  e.preventDefault();
  var id = e.dataTransfer.getData("Text");
  var elemento = document.getElementById(id);
  var getPerrito = e.target.getAttribute("name");
  var posx = e.pageX - soltar1.offsetLeft; // coordenada x para el soltado /*https://developer.mozilla.org/es/docs/Web/API/HTMLElement/offseLeft*/
  var posy = e.pageY - soltar1.offsetTop; // coordenada y para el soltado /*https://developer.mozilla.org/es/docs/Web/API/HTMLElement/offseTop*/
  if (id == getPerrito) {
    ganar++;
    puntos++;
    console.log("Bien!, llevas: " + puntos + " puntoss");
    elemento.style.visibility = "hidden";
    lienzo1.drawImage(elemento, posx - 20, posy - 50);
    var bandit = new Audio("music/Bandit.mp3");
    bandit.play();
  }
  else {
    puntos--
    console.log("Chin!, llevas: " + puntos + " puntoss");
    var error = new Audio("music/error.mp3");
    error.play();
  }

  console.log(id + " en " + getPerrito);
}

function soltado2(e) {
  e.preventDefault();
  var id = e.dataTransfer.getData("Text");
  var elemento = document.getElementById(id);
  var getPerrito = e.target.getAttribute("name");
  var posx = e.pageX - soltar2.offsetLeft; // coordenada x para el soltado /*https://developer.mozilla.org/es/docs/Web/API/HTMLElement/offseLeft*/
  var posy = e.pageY - soltar2.offsetTop; // coordenada y para el soltado /*https://developer.mozilla.org/es/docs/Web/API/HTMLElement/offseTop*/
  if (id == getPerrito) {
    ganar++;
    puntos++;
    console.log("Bien!, llevas: " + puntos + " puntoss");
    elemento.style.visibility = "hidden";
    lienzo2.drawImage(elemento, posx - 20, posy);
    var chilli = new Audio("music/Chilli.mp3");
    chilli.play();
  }
  else {
    puntos--
    console.log("Chin!, llevas: " + puntos + " puntoss");
    var error = new Audio("music/error.mp3");
    error.play();
  }
  console.log(id + " en " + getPerrito);
}

function soltado3(e) {
  e.preventDefault();
  var id = e.dataTransfer.getData("Text");
  var elemento = document.getElementById(id);
  var getPerrito = e.target.getAttribute("name");
  var posx = e.pageX - soltar3.offsetLeft; // coordenada x para el soltado /*https://developer.mozilla.org/es/docs/Web/API/HTMLElement/offseLeft*/
  var posy = e.pageY - soltar3.offsetTop; // coordenada y para el soltado /*https://developer.mozilla.org/es/docs/Web/API/HTMLElement/offseTop*/
  if (id == getPerrito) {
    ganar++;
    puntos++;
    console.log("Bien!, llevas: " + puntos + " puntoss");
    elemento.style.visibility = "hidden";
    lienzo3.drawImage(elemento, posx - 20, posy);
    var bingo = new Audio("music/Bingo.mp3");
    bingo.play();
  }
  else {
    puntos--
    console.log("Chin!, llevas: " + puntos + " puntoss");
    var error = new Audio("music/error.mp3");
    error.play();
  }
  console.log(id + " en " + getPerrito);
}
function soltado4(e) {
  e.preventDefault();
  var id = e.dataTransfer.getData("Text");
  var elemento = document.getElementById(id);
  var getPerrito = e.target.getAttribute("name");
  var posx = e.pageX - soltar4.offsetLeft; // coordenada x para el soltado /*https://developer.mozilla.org/es/docs/Web/API/HTMLElement/offseLeft*/
  var posy = e.pageY - soltar4.offsetTop; // coordenada y para el soltado /*https://developer.mozilla.org/es/docs/Web/API/HTMLElement/offseTop*/
  if (id == getPerrito) {
    ganar++;
    puntos++;
    console.log("Bien!, llevas: " + puntos + " puntoss");
    elemento.style.visibility = "hidden";
    lienzo4.drawImage(elemento, posx - 20, posy);
    var bluey = new Audio("music/Bluey.mp3");
    bluey.play();
  }
  else {
    puntos--
    console.log("Chin!, llevas: " + puntos + " puntoss");
    var error = new Audio("music/error.mp3");
    error.play();
  }
  console.log(id + " en " + getPerrito);
}

function soltado5(e) {
  e.preventDefault();
  var id = e.dataTransfer.getData("Text");
  var elemento = document.getElementById(id);
  var getPerrito = e.target.getAttribute("name");
  var posx = e.pageX - soltar5.offsetLeft; // coordenada x para el soltado /*https://developer.mozilla.org/es/docs/Web/API/HTMLElement/offseLeft*/
  var posy = e.pageY - soltar5.offsetTop; // coordenada y para el soltado /*https://developer.mozilla.org/es/docs/Web/API/HTMLElement/offseTop*/
  if (id == getPerrito) {
    ganar++;
    puntos++;
    console.log("Bien!, llevas: " + puntos + " puntoss");
    elemento.style.visibility = "hidden";
    lienzo5.drawImage(elemento, posx - 20, posy);
    var muffin = new Audio("music/Muffin.mp3");
    muffin.play();
  }
  else {
    puntos--
    console.log("Chin!, llevas: " + puntos + " puntoss");
    var error = new Audio("music/error.mp3");
    error.play();
  }
  console.log(id + " en " + getPerrito);
}

function soltado6(e) {
  e.preventDefault();
  var id = e.dataTransfer.getData("Text");
  var elemento = document.getElementById(id);
  var getPerrito = e.target.getAttribute("name");
  var posx = e.pageX - soltar6.offsetLeft; // coordenada x para el soltado /*https://developer.mozilla.org/es/docs/Web/API/HTMLElement/offseLeft*/
  var posy = e.pageY - soltar6.offsetTop; // coordenada y para el soltado /*https://developer.mozilla.org/es/docs/Web/API/HTMLElement/offseTop*/
  if (id == getPerrito) {
    ganar++;
    puntos++;
    console.log("Bien!, llevas: " + puntos + " puntoss");
    elemento.style.visibility = "hidden";
    lienzo6.drawImage(elemento, posx - 20, posy);
    var pompom = new Audio("music/Pom-Pom.mp3");
    pompom.play();
  }
  else {
    puntos--
    console.log("Chin!, llevas: " + puntos + " puntoss");
    var error = new Audio("music/error.mp3");
    error.play();
  }
  console.log(id + " en " + getPerrito);
}

window.addEventListener("load", iniciar, false);

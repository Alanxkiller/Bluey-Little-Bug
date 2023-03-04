var puntos = 0;

function iniciar() {
  var mover = document.querySelector('.Mollete1');
  mover.style.color = "red";


  var imagenes = document.querySelectorAll("#cajaimagenes > img");
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("dragstart", arrastrado, false);
    imagenes[i].addEventListener("dragend", finalizado, false);
  }

  soltar1 = document.getElementById("Mollete1");
  lienzo1 = soltar1.getContext("2d");
  soltar1.addEventListener("dragenter", eventoEnter1, false);
  soltar1.addEventListener("dragover", eventoOver1, false);
  soltar1.addEventListener("drop", soltado1, false);

  soltar2 = document.getElementById("Mollete2");
  lienzo2 = soltar2.getContext("2d");
  soltar2.addEventListener("dragenter", eventoEnter2, false);
  soltar2.addEventListener("dragover", eventoOver2, false);
  soltar2.addEventListener("drop", soltado2, false);

  soltar3 = document.getElementById("Mollete3");
  lienzo3 = soltar3.getContext("2d");
  soltar3.addEventListener("dragenter", eventoEnter3, false);
  soltar3.addEventListener("dragover", eventoOver3, false);
  soltar3.addEventListener("drop", soltado3, false);

  soltar4 = document.getElementById("Mollete4");
  lienzo4 = soltar4.getContext("2d");
  soltar4.addEventListener("dragenter", eventoEnter4, false);
  soltar4.addEventListener("dragover", eventoOver4, false);
  soltar4.addEventListener("drop", soltado4, false);

  soltar5 = document.getElementById("Mollete5");
  lienzo5 = soltar5.getContext("2d");
  soltar5.addEventListener("dragenter", eventoEnter5, false);
  soltar5.addEventListener("dragover", eventoOver5, false);
  soltar5.addEventListener("drop", soltado5, false);

  soltar6 = document.getElementById("Mollete6");
  lienzo6 = soltar6.getContext("2d");
  soltar6.addEventListener("dragenter", eventoEnter6, false);
  soltar6.addEventListener("dragover", eventoOver6, false);
  soltar6.addEventListener("drop", soltado6, false);
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
  console.log("soy el evento dragover");
  e.preventDefault();
}

function eventoEnter2(e) {
  console.log("soy el evento dragenter2");
  e.preventDefault();
}

function eventoOver2(e) {
  console.log("soy el evento dragover2");
  e.preventDefault();
}

function eventoEnter3(e) {
  console.log("soy el evento dragenter3");
  e.preventDefault();
}

function eventoOver3(e) {
  console.log("soy el evento dragover3");
  e.preventDefault();
}

function eventoEnter4(e) {
  console.log("soy el evento dragenter4");
  e.preventDefault();
}

function eventoOver4(e) {
  console.log("soy el evento dragover4");
  e.preventDefault();
}

function eventoEnter5(e) {
  console.log("soy el evento dragenter5");
  e.preventDefault();
}

function eventoOver5(e) {
  console.log("soy el evento dragover5");
  e.preventDefault();
}

function eventoEnter6(e) {
  console.log("soy el evento dragenter6");
  e.preventDefault();
}

function eventoOver6(e) {
  console.log("soy el evento dragover6");
  e.preventDefault();
}

function finalizado(e) {
  if (puntos == 6) {
    console.log("GANASTE PERRO!");
    alert("GANASTE PERRO! Ya ponganos 10 alv");
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
    puntos++;
    console.log("Bien!, llevas: " + puntos + " puntoss");
    elemento.style.visibility = "hidden";
    lienzo1.drawImage(elemento, posx - 35, posy - 60);
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
    puntos++;
    console.log("Bien!, llevas: " + puntos + " puntoss");
    elemento.style.visibility = "hidden";
    lienzo2.drawImage(elemento, posx - 35, posy - 60);
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
    puntos++;
    console.log("Bien!, llevas: " + puntos + " puntoss");
    elemento.style.visibility = "hidden";
    lienzo3.drawImage(elemento, posx - 35, posy - 60);
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
    puntos++;
    console.log("Bien!, llevas: " + puntos + " puntoss");
    elemento.style.visibility = "hidden";
    lienzo4.drawImage(elemento, posx - 35, posy - 60);
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
    puntos++;
    console.log("Bien!, llevas: " + puntos + " puntoss");
    elemento.style.visibility = "hidden";
    lienzo5.drawImage(elemento, posx - 35, posy - 60);
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
    puntos++;
    console.log("Bien!, llevas: " + puntos + " puntoss");
    elemento.style.visibility = "hidden";
    lienzo6.drawImage(elemento, posx - 35, posy - 60);
  }
  console.log(id + " en " + getPerrito);
}

window.addEventListener("load", iniciar, false);

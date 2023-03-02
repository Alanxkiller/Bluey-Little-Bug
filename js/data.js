// Constantes del DOM
const d = document;
const formName = d.getElementById("nombre");
const btn = d.getElementById("ingresar");
const form = d.getElementById("player-form");
const startGame = d.getElementById("start-game");

// Variables del Local Storage
let playerNames = localStorage.getItem("playerNames");
playerNames = JSON.parse(playerNames);
if (playerNames == null) playerNames = [];
// Cuando cargue el documento
d.addEventListener("DOMContentLoaded", () => {
    iniciar();
})

function iniciar() {
    // Todo el dibujado del canvas
    const fondo = d.getElementById('fondo');
    var canvas = d.getElementById("lienzo");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(fondo, 90, 0, 1200, 805);
}


d.addEventListener("click", (e) => {
    if (e.target.matches("#ingresar")) { // Verifica si presionamos el botón
        e.preventDefault();
        let name = formName.value;
        verify(name);
    }
})

function verify(name) {

    let existentPlayer;
    let match = false;
    // Verficando si existe el nombre
    for (let i = 0; i < playerNames.length; i++) {
        let playerName = JSON.parse(playerNames[i]);
        if (name == playerName.nombre) {
            existentPlayer = playerName;
            match = true;
            break;
        }
    }

    if (!match) { // En caso de que sea un nuevo jugador
        let newPlayer = JSON.stringify({
            nombre: name,
            puntos: 0,
            tiempo: 0
        });

        playerNames.push(newPlayer);
        localStorage.setItem("playerNames", JSON.stringify(playerNames));
        startScreen(existentPlayer, name);
    } else { // Y si no
        startScreen(existentPlayer, name);
    }

}       

// Pantalla para iniciar Juego
function startScreen(playerName, name){
    form.style.display = "none";
    startGame.style.display = "inline-flex"
    if(playerName == undefined){
        let content = `
            <p>Bienvenid@. Disfruta!</p>
            <p>Nombre: ${name}</p>
            <p>Mejor Puntaje: 0</p>
            <p>Mejor Tiempo: 0</p>
            
        `;
        startGame.innerHTML = content;
        const play = d.createElement("button");
        play.setAttribute("id", "playBtn");
        play.innerHTML = `
        <span class="material-symbols-outlined">
            play_circle
        </span>
        
        `
        setTimeout(()=>{
            startGame.append(play);

        }, 2000)
    }else{
        let content = `
            <p>Bienvenid@ de Vuelta</p>
            <p>Nombre: ${playerName.nombre}</p>
            <p>Mejor Puntaje: ${playerName.puntos}</p>
            <p>Mejor Tiempo: ${playerName.tiempo}</p>
        `
        startGame.innerHTML = content;
        const play = d.createElement("button");
        play.setAttribute("id", "playBtn");
        play.innerHTML = `
        <span class="material-symbols-outlined">
            play_circle
        </span>
        `

        setTimeout(()=>{
            startGame.append(play);
        }, 2000)
    }
}
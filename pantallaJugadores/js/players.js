// Variables del DOM
const d = document;
const canvas = d.getElementById("lienzo");
const fondo = d.getElementById("fondo");
const tablaJugadores = d.getElementById("players-table");

// Variables del LocalStorage

let playerNames = localStorage.getItem("playerNames");
playerNames = JSON.parse(playerNames);
console.log(playerNames);

if(playerNames == null) playerNames == [];

let orderedPlayerNames = [];

d.addEventListener("DOMContentLoaded", ()=>{
    iniciar();
})

d.addEventListener("click", (e)=>{
    if(e.target.matches("#volver")){
        window.location.href = "../../pantallaDatos/data.html";
    }
    if(e.target.matches("#credits")){
        window.location.href = "../../pantallaCreditos/Creditos.html"
    }
})

function iniciar(){
    // Todo el dibujado del canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(fondo, 90, 0, 1200, 805);
    // ordenarJugadores();
    mostrarJugadores()    
}

function mostrarJugadores(){
    // Los metemos a un nuevo array para "parsear" sus elementos y así poder ordenarlos con el método de sort
    for(let i in playerNames){
        let player = JSON.parse(playerNames[i]);
        orderedPlayerNames.push(player);
    }    
    // Para ordenar los jugadores
    orderedPlayerNames = orderedPlayerNames.sort((x, y) => x.tiempo - y.tiempo);
    
    for(let i in orderedPlayerNames){
        let player = orderedPlayerNames[i];
        tablaJugadores.innerHTML += `
            <tr>
                <td>${player.nombre}</td>
                <td>${player.puntos}</td>
                <td>${player.tiempo}</td>
            </tr>
        `;
    }
}
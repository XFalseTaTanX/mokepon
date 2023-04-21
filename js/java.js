var tit = document.title;
var c = 0;
function writetitle()
{
    document.title = tit.substring(0,c);
    if(c==tit.length)
{

    c = 0;
    setTimeout("writetitle()", 1000)
}

else
{
    c++;
    setTimeout("writetitle()", 200)
}
}

writetitle()

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function seleccionarMacostaJugador() {

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block '

    let inputSquirtle = document.getElementById('Squirtle')
    let inputLanduros = document.getElementById('Landuros')
    let inputCharizard = document.getElementById('Charizard')
    let spanMascotaJugador = document.getElementById('Mascota-Jugador')

    if (inputSquirtle.checked) {
        spanMascotaJugador.innerHTML = 'Squirtle'
    } else if (inputLanduros.checked){
        spanMascotaJugador.innerHTML = 'Landuros'
    } else if (inputCharizard.checked){
        spanMascotaJugador.innerHTML = 'Charizard'
    } else{
        alert('Seleciona una Mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let MascotaAleatorio = aletorio(1,3)
    let spanMascotaEnemigo = document.getElementById('Mascota-Enemigo')

    if (MascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Squirtle'
    } else if (MascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Landuros'
    } else {
        spanMascotaEnemigo.innerHTML = 'Charizard'
    }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo() 
}
function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo() 
}
function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo() 
}

function ataqueAleatorioEnemigo() {
    let ataqueAleaorio = aletorio(1,3)

    if (ataqueAleaorio == 1) {
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleaorio == 2){
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }

    Combate()
}

function Combate() {
    let spanVidasJugador = document.getElementById('vidas-Jugador')
    let spanVidasEnemigo = document.getElementById('vidas-Enemigo')

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje ("Empate")
         
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 

    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 
        
    } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo   
        
    } else{
        crearMensaje ("Perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador 
        
    }

    revisarvidas()
}

function revisarvidas() {
    if (vidasEnemigo == 0){
        crearMensajeFinal("¡Felicitaciones! Ganaste 🎉😁")
    } else if (vidasJugador == 0){
        crearMensajeFinal("¡Mis Condolencias! Perdiste 😥😩")
    } 
}

function crearMensaje(Resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + '-' + Resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(ResultadoFinal) { 
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = ResultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego  = document.getElementById('boton-fuego')
        botonFuego.disabled = true 
    let botonAgua = document.getElementById('boton-agua')
        botonAgua.disabled = true 
    let botonTierra = document.getElementById('boton-tierra')
        botonTierra.disabled = true 

    let sectionReinicar = document.getElementById('reiniciar')
    sectionReinicar.style.display = 'block'
 
}


function aletorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

function reinicarJuego() {
    location.reload()
}

let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
sectionSeleccionarAtaque.style.display = 'none'

let sectionReinicar = document.getElementById('reiniciar')
sectionReinicar.style.display = ('none')

let botonMascotaJugador = document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMacostaJugador)

let botonFuego  = document.getElementById('boton-fuego')
botonFuego.addEventListener('click', ataqueFuego)
let botonAgua = document.getElementById('boton-agua')
botonAgua.addEventListener('click', ataqueAgua)
let botonTierra = document.getElementById('boton-tierra')
botonTierra.addEventListener('click', ataqueTierra)

let botonReiniciar = document.getElementById('boton-reiniciar')
botonReiniciar.addEventListener('click', reinicarJuego)
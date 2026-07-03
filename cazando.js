let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTO_GATO = 100;
const ANCHO_GATO = 200;
const ALTO_COMIDA = 80;
const ANCHO_COMIDA= 80;

let gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
let gatoY = (canvas.height / 2) - (ALTO_GATO / 2);
let comidaX = canvas.width - ANCHO_COMIDA;;
let comidaY = canvas.height - ALTO_COMIDA;
let puntaje=0;
let tiempo=10;
let intervaloTiempo=3500;
intervalo=0;

function graficarGato(){

    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, '#f47fb9'); 
}

function graficarComida(){
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, '#7fc9f4');
}

function graficarRectangulo (x, y, alto, ancho, color){
    ctx.fillStyle=color;
    ctx.fillRect(x, y, alto, ancho);
}

function iniciarJuego(){
    graficarGato();
    graficarComida();
    intervalo=setInterval(restarTiempo,intervaloTiempo);
    
    
}

function limpiarCanva(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
}

function moverIzquierda(){
    gatoX=gatoX-10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}
function moverDerecha(){
    gatoX=gatoX+10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}
function moverArriba(){
    gatoY=gatoY-10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}
function moverAbajo(){
    gatoY=gatoY+10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision(){
    if(gatoX+ANCHO_GATO>comidaX &&
        gatoX<comidaX+ANCHO_COMIDA && gatoY+ALTO_GATO>comidaY &&
        gatoY<comidaY+ALTO_COMIDA){
            //alert("atrapado"); 
            aparecerComida();
            puntaje=puntaje+1;
            mostrarEnSpan("puntos",puntaje);
        }
}

function aparecerComida(){
    comidaX=generarAleatorio(0,canvas.width-ALTO_COMIDA);
    comidaY=generarAleatorio(0,canvas.height-ANCHO_COMIDA);
}

function restarTiempo(){
    tiempo=tiempo-1;
    mostrarEnSpan("tiempo",tiempo); 
    detectarColision();     
}

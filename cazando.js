let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTO_GATO = 100;
const ANCHO_GATO = 200;
const ALTO_COMIDA = 80;
const ANCHO_COMIDA= 80;

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
let puntaje=0;
let tiempo=10;
let intervaloTiempo=1000;
let intervalo=0;

function iniciarJuego(){
    gatoX = (canvas.width - ANCHO_GATO) / 2;     
    gatoY = (canvas.height - ALTO_GATO) / 2;
    aparecerComida();
    limpiarCanva();
    graficarGato();
    graficarComida();
    intervalo=setInterval(restarTiempo,intervaloTiempo); 
}
function aparecerComida(){
    comidaX=generarAleatorio(0,canvas.width-ALTO_COMIDA);
    comidaY=generarAleatorio(0,canvas.height-ANCHO_COMIDA);
}

function graficarGato(){
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, '#f47fb9'); 
}

function graficarComida(){
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, '#7fc9f4');
}

function graficarRectangulo (x, y, ancho, alto, color){
    ctx.fillStyle=color;
    ctx.fillRect(x, y, ancho, alto);
}

function limpiarCanva(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
}
function moverIzquierda(){
    gatoX=gatoX-10;
    actualizarPantalla();
}
function moverDerecha(){
    gatoX=gatoX+10;
    actualizarPantalla();
}
function moverArriba(){
    gatoY=gatoY-10;
    actualizarPantalla();
}
function moverAbajo(){
    gatoY=gatoY+10;
    actualizarPantalla();
}

function actualizarPantalla(){
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}


function detectarColision(){
    if(gatoX+ANCHO_GATO>comidaX &&
        gatoX<comidaX+ANCHO_COMIDA && 
        gatoY+ALTO_GATO>comidaY &&
        gatoY<comidaY+ALTO_COMIDA){
            //alert("atrapado"); 
            puntaje=puntaje+1;
            mostrarEnSpan("puntos",puntaje);
            aparecerComida();
            limpiarCanva();
            graficarGato();
            graficarComida();            
        }
    if(puntaje===2){
        alert("ERES EL GANADOR, GENIAL :D");      
        clearInterval(intervalo); // detenemos el setInterval
    }
    
}



function restarTiempo(){
    tiempo=tiempo-1;
    mostrarEnSpan("tiempo",tiempo); 
    
    if(tiempo===0){
        alert("GAME OVER :/");      
        clearInterval(intervalo); // detenemos el setInterval

    }    
}

function reiniciar(){
    // poenmos las variables a su valor inicial
    puntaje = 0;
    tiempo = 10;
    // pintamos en pantalla las variables en los span correspondientes
    mostrarEnSpan("puntos", puntaje);
    mostrarEnSpan("tiempo", tiempo);

    //limpiamos cualquier intervalo viejo por seguridad antes de arrancar
    clearInterval(intervalo);
    iniciarJuego(); // invocamos a la funcion iniciar
    
   
}




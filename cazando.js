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



// 4. Dibujar el rectángulo
function graficarGato(){
    ctx.fillStyle="#f47fb9";
    ctx.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}

//5. Dibujar el cuadrado
function graficarComida(){
    ctx.fillStyle="#7fc9f4";
    ctx.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}

function iniciarJuego(){
    graficarGato();
    graficarComida();
}
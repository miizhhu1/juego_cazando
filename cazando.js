let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

// 2. Definir el tamaño del rectángulo
const anchoRect = 200;
const altoRect = 100;

// 3. Calcular la posición X e Y exacta para el centro
const x = (canvas.width / 2) - (anchoRect / 2);
const y = (canvas.height / 2) - (altoRect / 2);

// 4. Dibujar el rectángulo
function graficarGato (){
    ctx.fillStyle="#f47fb9";
    ctx.fillRect(x, y, anchoRect, altoRect);
}
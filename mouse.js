/* NOTA:
cuando hago clic en otro lado q no es la ventana del contenido
de la pagina, no reconoce los click, solo los ve cuando
presiono en la ventana html
*/
var c = document.getElementById('canvas');  //<--traigo el canvas
var papel = c.getContext("2d");            //<--del canvas selecciono el lienzo
//coordenadas
var x;
var y;
var i=0;  // <-- i es indicador de si esta arriba o abajo el boton
var colorcito = "green";


//*****************inicializamoseventos***************
document.addEventListener("mousemove",mouse_dibuja);  /*<-movimiento (mouse)  */
document.addEventListener("mousedown",mouseD);       /*<-boton pulsado(mouse)*/
document.addEventListener("mouseup",mouseU);        /*<-boton arriba(mouse)*/
//*****************************************************

function dibujarLinea(color,xi,yi,xf,yf,lienzo){//<--funcion dibujar linea
  lienzo.beginPath();                           //<-pone el lapiz en el papel
  lienzo.strokeStyle = color;                   //<-color de trazo
  lienzo.lineWidth = 5;                         //<-tamaño del plumon
  lienzo.moveTo(xi, yi);                        //<-posicion inicial, mover a
  lienzo.lineTo(xf, yf);                        //<-posicion final del trazo
  lienzo.stroke();                              //<-dibuja el trazo
  lienzo.closePath();                           //<-retira el lapiz del papel
}

function mouse_dibuja(e){//<---------------------------funcion q llama a dibujar
  //console.log(e);
  if(i == 1){/*<---si el boton izquierdo del mouse esta presionado, llama funcion*/
    dibujarLinea(colorcito,x,y,e.layerX,e.layerY,papel);//<-dibujar linea
  }/*los parametros son, color, posicion x,y inicial, y posicion final evento recorrido*/
  x = e.layerX; //<-- se actualiza x, y a la posicion final para que el trazo
  y = e.layerY;// quede justo donde quedo la posicion final del mouse.
}
function mouseU(e){//  <--- funcion click suelto
    //console.log("suelto");
    i = 0;  /*<-- coloca indicador mouse 0, levantado*/
    x = e.layerX;//<--actualiza posiciones x, y
    y = e.layerY;
}
function mouseD(e){ //  <--- funcion click presionado
    //console.log("presionado");
    i = 1;   /*<-- coloca indicador mouse 1, levantado*/
    x = e.layerX;//<--actualiza posiciones x, y
    y = e.layerY;
}
/*--------lineas de al rededor del lienzo para poder ver area de dibujo-------*/
dibujarLinea("black",0,0,0,500,papel);//<--linea vertical izquierda
dibujarLinea("black",500,0,500,500,papel);//<--linea vertical derecha
dibujarLinea("black",0,0,500,0,papel);//<--linea horizontal arriba
dibujarLinea("black",0,500,500,500,papel);//<--linea horizontal abajo

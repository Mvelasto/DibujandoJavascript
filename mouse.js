/* NOTA:
cuando hago clic en otro lado q no es la ventana del contenido
de la pagina, no reconoce los click, solo los ve cuando
presiono en la ventana html
*/
var c = document.getElementById('canvas');  //<--traigo el canvas
var papel = c.getContext("2d");            //<--del canvas selecciono el lienzo
//coordenadas (x,y) del mouse - cambian a medida que se traza un dibujo
var x;
var y;
var i=0;  // <-- i es indicador de si esta arriba o abajo el boton del mouse
/*****************************************************************************/
/*****************************************************************************/
/*ESTA AREA SE MANEJA EL TAMAÑO DEL PLUMON (LOS 3 BOTONES DE HTML, 3 TAMAÑOS)*/
var plumon=3; //<--plumon predeterminado (el mas pqueño)
var p = document.getElementById('p');//<---obtiene el boton 1 del html
p.addEventListener("click",peque);// <--si presiona el boton1 va a funcion peque
var m = document.getElementById('m');//<---obtiene el boton 2 del html
m.addEventListener("click",medio);// <--si presiona el boton2 va a funcion medio
var g = document.getElementById('g');//<---obtiene el boton 3 del html
g.addEventListener("click",grande);//<--si presiona el boton3 va a funcion grande
/******AQUI DESARROLLAMOS LAS FUNCIONES Q CAMBIAN EL TAMAÑO DEL PLUMON*********/
function peque(){
  plumon = 3; //<--tamaño del plumon pequeño
}
function medio(){
  plumon = 10;  //<--tamaño del plumon mediano
}
function grande(){
  plumon = 15;  //<--tamaño del plumon grande
}
//*****************************************************************************
//*****************************************************************************
/************AQUI SE CAMBIA EL COLOR DEL PLUMON EN TIEMPO REAL***************/
function cambiarcolor(){//<---funcion la llamo en el html
  var col = document.getElementById("col").value;//<-obtiene col del id colorHtml
  //document.getElementById("espacio").style.color = col; //<--linea de prueba
  papel.strokeStyle = col;// <-- asigna el color obtenido, al lapiz o plumon
}
//**************************************************************************
//***************************************************************************

//*****************inicializamoseventos***************
document.addEventListener("mousemove",mouse_dibuja);  /*<-movimiento (mouse)  */
document.addEventListener("mousedown",mouseD);       /*<-boton pulsado(mouse)*/
document.addEventListener("mouseup",mouseU);        /*<-boton arriba(mouse)*/
//*****************************************************

function dibujarLinea(color,xi,yi,xf,yf,lienzo,plumon){//<--funcion dibujar linea
  lienzo.beginPath();                           //<-pone el lapiz en el papel
  lienzo.strokeStyle = color;                   //<-color de trazo
  lienzo.lineWidth = plumon;                         //<-tamaño del plumon
  lienzo.moveTo(xi, yi);                        //<-posicion inicial, mover a
  lienzo.lineTo(xf, yf);                        //<-posicion final del trazo
  lienzo.stroke();                              //<-dibuja el trazo
  lienzo.closePath();                           //<-retira el lapiz del papel
}

function mouse_dibuja(e){//<---------------------------funcion q llama a dibujar
  //console.log(e);
  if(i == 1){/*<---si el boton izquierdo del mouse esta presionado, llama funcion*/
    dibujarLinea(col,x,y,e.layerX,e.layerY,papel,plumon);//<-dibujar linea
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

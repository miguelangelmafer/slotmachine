
//Hacemos que el archivo JavaScript comience a ejecutarse una vez cargado el HTML
window.onload=inicio;


//Declareamos las variables que vamos a utilizar
var imagenes = ["aguacate.png","ajo.png","cebolla.png","pepino.png","puerro.png","tomate.png","zanahoria.png"];
var saldo=0;
var numeros_tirada=[];
var numero_jugada= 1;
var activo=true;

//Con la función inicio, damos funcionalidad de botones a los divs que hemos creado.
function inicio(){
	document.getElementById("tirar").onclick=tirar;
	document.getElementById("add_coins").onclick=add_coins;
	document.getElementById("salir").onclick=salir;
}

//Esta función se activará cuando el saldo sea superior a 0, restará saldo, e irán enlazada con las funciones de historial y comparar.
function tirar(){
	if(saldo>0){
	activo=false;
	numeros_tirada=[];
	for (let k=0; k<3; k++){
		numeros_tirada.push(aleatorio(""));
		mostrar_imagen(k,numeros_tirada[k]);
	}
	document.getElementById("dinero").innerHTML=--saldo;	
	historial();
	++numero_jugada;
	comparar()
	}
}

//Generamos un numero aleatorio entre 0 y 6 (longitud del array)
function aleatorio(){
	var azar=Math.floor(Math.random()*imagenes.length);
	return azar;
}

//Esta función permitirá cambiar las imagenes del fichero HTML
function mostrar_imagen(num,im){
	document.getElementsByClassName("imagen")[num].getElementsByTagName("img")[0].src="img/"+imagenes[im];
}

//Esta función permitirá reinicar el programa y nos mostrará el saldo actual
function salir(){
if(saldo>=0){
activo=true;
alert("Te quedan un total de: " + saldo + "€");
document.getElementById("dinero").innerHTML= saldo = 0;
}
}

//En este punto añadirmos las monedas al HTML siempre que no hayamos pulsado el botón tirar
function add_coins(){
	if(activo==true){
document.getElementById("dinero").innerHTML=++saldo;
	}
}


//esta función enlazara con la function tirar y irá añadiendo un historial.
function historial () {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Jugada número: " + numero_jugada +  " = " + numeros_tirada);
  node.appendChild(textnode);
  document.getElementById("listado").appendChild(node);
}

//este bloque comparara los premios

function comparar(){
if(numeros_tirada[0] == numeros_tirada[1] && numeros_tirada[1] == numeros_tirada[2]){
	alert("Has ganado 10 monedas");
}

}
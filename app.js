// Ejercicio 1

/*

alert('Bienvenido a adivina el superheroe!');

alert(
	'Bienvenidx! Adivinaré a tu Superheroe entre Supergirl, WonderWoman, Batman, Superman, Aquaman y Flash!'
);

let sexo = prompt('Es hombre o mujer?');
let cabello;
let capa;
let superpoderes;
let velocidad;

if (sexo == 'mujer') {
	cabello = prompt('Su cabello es rubio u oscuro?');
	if (cabello == 'rubio') {
		alert('Tu superheroe es Supergirl');
	} else if (cabello == 'oscuro') {
		alert('Tu superheroe es Wonder Woman');
	} else {
		alert('Ingrese una opción válida');
	}
} else if (sexo == 'hombre') {
	capa = confirm('Tiene capa?');
	if (capa === true) {
		superpoderes = confirm('Tiene superpoderes?');
		if (superpoderes === true) {
			alert('Tu superheroe es Superman');
		} else {
			alert('Tu superheroe es Batman');
		}
	} else if (capa === false) {
		velocidad = confirm('Su superpoder es la velocidad?');
		if (velocidad === true) {
			alert('Tu superheroes es Flash');
		} else {
			alert('Tu superheroe es Aquaman');
		}
	} else {
		alert('Ingrese una opción válida');
	}
} else {
	alert('Ingrese una opción válida');
}

// Ejercicio 2

do {
	var delito = prompt('Que caso es?');
	var reduccion = 5;
	var agravado;

	if (delito == 'homicidio') {
		var pena = 20;
		agravado = confirm('El homicidio es agravado por el vinculo?');
		if (agravado == true) {
			alert('La condena es cadena perpetua');
		} else {
			let otravez = confirm('Es reincidente?');
			if (otravez == true) {
                pena = pena - reduccion;
				alert(`Le corresponde ${pena} años`);
			} else {
				alert('Le corresponde 20 años');
            }
		}
	} else if (delito == 'robo') {
		var pena = 10;
		let otravez = confirm('Es reincidente?');
		if (otravez == true) {
			pena = pena - reduccion;
			alert(`Le corresponde ${pena} años`);
		} else {
			alert(`Le corresponde ${pena} años`);
		}
	} else if (delito == 'evasion') {
		var pena = 8;
		let otravez = confirm('Es reincidente?');
		if (otravez == true) {
			pena = pena - reduccion;
			alert(`Le corresponde ${pena} años`);
		} else {
			alert(`Le corresponde ${pena} años`);
		}
	} else {
		pena = pena - reduccion;
		alert(`Le corresponde ${pena} años`);
		alert = 'Ingrese otro';
	}
	var hayMas = confirm('Tienes otro caso?');
} while (hayMas == true);

// Ejercicio 3

let globos = ["jirafa", "elefante","perro","gato","ardilla","pato","leon","serpiente","rana", "pájaro","camello"];
let fila1 = ["Santino","Micaela","Rebeca","Ariel","Patricia"];
let fila2 = ["Claudia","Marcelo","Gervasio","Beatriz","Carmen"];
let x = 0
let y = 0

for (let i = 0; i < 5; i++) {
    if(fila2[x] == "Gervasio"){
        console.log(`${fila2[x]} se lleva el globo ${globos[y]} y ${globos[y+1]}`);
        x += 1
        y += 2
    } else{
        console.log(`${fila1[x]} se lleva el globo ${globos[y]}`);
        y += 1
        console.log(`${fila2[x]} se lleva el globo ${globos[y]}`);
        x += 1
        y += 1
    }
}

// Ejercicio 4

function numRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
let jugador1 = prompt('Nombre del jugador 1');
let jugador2 = prompt('Nombre del jugaor 2');
let puntajeJugador1 = numRandom(1, 36);
let puntajeJugador2 = numRandom(1, 36);
puntajeJugador1 = puntajeJugador1 + numRandom(1, 36);
puntajeJugador2 = puntajeJugador2 + numRandom(1, 36);
puntajeJugador1 = puntajeJugador1 + numRandom(1, 36);
puntajeJugador2 = puntajeJugador2 + numRandom(1, 36);
if (puntajeJugador1 > puntajeJugador2) {
	console.log(
		`El ganador es ${jugador1}, su puntaje fue ${puntajeJugador1} mientras que el puntaje de ${jugador2} fue ${puntajeJugador2}`
	);
} else if (puntajeJugador2 > puntajeJugador1) {
	console.log(
		`El ganador es ${jugador2}, su puntaje fue ${puntajeJugador2} mientras que el puntaje de ${jugador1} fue ${puntajeJugador1}`
	);
} else {
	console.log('El resultado es un empate');
}

*/

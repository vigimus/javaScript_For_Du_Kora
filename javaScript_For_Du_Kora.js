// Gör en funktion med en bil utan nycklar!

var alder = prompt("Hur gammal är du?");

if (Number(alder) < 18) {
	alert("Tyvärr du är för ung för att köra bil. Powering off");
} else if (Number(alder) > 18) {
	alert("Powering On. Njut av färden!");
} else if (Number(alder) === 18) {
	alert("Grattis till din första resa. Njut av färden!");
}

//1. Skapa en funktion med namnet checkDriverAge(). När du kallar på funktionen, behöver du ange din ålder. Använd Function Declaration för denna funktion när du skapar den.
function checkDriverAge() {
var alder = prompt("Vad är din ålder?");
if (Number(alder) < 18) {
	alert("Tyvärr du är för ung för att köra bil. Powering off");
} else if (Number(alder) > 18) {
	alert("Powering On. Njut av färden!");
} else if (Number(alder) === 18) {
	alert("Grattis till din första resa. Njut av färden!");
}
}
checkDriverAge();

//2. Skapa en annan funktion som gör samma sak som, heter checkDriverAge2() istället med Function Expression.
var kollaAlder = function() {
var alder = prompt("Hur gammal är du?");
if (Number(alder) < 18) {
	alert("Tyvärr du är för ung för att köra bil. Powering off");
} else if (Number(alder) > 18) {
	alert("Powering On. Njut av färden!");
} else if (Number(alder) === 18) {
	alert("Grattis till din första resa. Njut av färden!");
}	
}

kollaAlder();

//BONUS: Istället för att använda prompt. Nu, använd istället console.log och få checkDriverAge() funktionen att accept argument av ålder, so that if you enter:
var kollaAlder = function(alder) {
var alder = console.log("Hur gammal är du?");
if (Number(alder) < 18) {
	alert("Tyvärr du är för ung för att köra bil. Powering off");
} else if (Number(alder) > 18) {
	alert("Powering On. Njut av färden!");
} else if (Number(alder) === 18) {
	alert("Grattis till din första resa. Njut av färden!");
}	
}

kollaAlder();
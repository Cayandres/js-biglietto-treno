const numeroKilometri = prompt("Quanti kilometri devi percorrere?")
const etàPassegero = prompt("Quanti anni hai?")

console.log(numeroKilometri,etàPassegero);

let prezzoAlKm = 0.21;

let calcoloKm = (numeroKilometri) * prezzoAlKm;

const scontoVenti = (calcoloKm) / 100 * 20;
console.log(scontoVenti)

const scontoQuaranta = (calcoloKm) / 100 * 40;
console.log(scontoQuaranta)

const minorenne = 18;

const anzianità = 65;




let scontoGiovani = (calcoloKm) - scontoVenti;

console.log(scontoGiovani);

let scontoAnziani = (calcoloKm) - scontoQuaranta;
console.log(scontoAnziani);

let outputmessage = "" ;

if(etàPassegero < minorenne){
  outputmessage = scontoGiovani
}else if  (etàPassegero > anzianità){
  outputmessage = scontoAnziani
}



document.getElementById("header").innerHTML = outputmessage.toFixed(2);






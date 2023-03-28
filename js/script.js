const numeroKilometri = prompt("Quanti kilometri devi percorrere?")
const age = prompt("Quanti anni hai?")

let prezzoAlKm = 0.21;

let calcoloKm = numeroKilometri * prezzoAlKm;

const scontoVenti = calcoloKm / 100 * 20;
console.log(scontoVenti)

const scontoQuaranta = calcoloKm / 100 * 40;
console.log(scontoQuaranta)

if(age < 18){

  scontoGiovani = calcoloKm - scontoVenti;  
  outputmessage = scontoGiovani

} else if  (age >= 65){
  
  scontoAnziani = calcoloKm - scontoQuaranta;
  outputmessage = scontoAnziani

} else {
  outputmessage = calcoloKm
}

if(age < 18){

  message = `Hai usufruito dello sconto giovani. Devi pagare <br>
  ${scontoGiovani. toFixed(2)}`

} else if  (age >= 65){
  
  message = `Hai usufruito dello sconto senior. Devi pagare <br> ${scontoAnziani. toFixed(2)}`

} else {
  message = `Non hai l'età per beneficiare dello sconto, il costo del tuo biglietto è <br> ${calcoloKm. toFixed(2)}`
}


document.getElementById("header").innerHTML = message;
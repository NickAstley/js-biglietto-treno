/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Formula per il calcolo: km * 0.21 = prezzoBiglietto
Stampare in HTML una lista con eta inserità, km inseriti ed il prezzo finale
eta: 50
km: 120
prezzzo: 24,50
BONUS:
validare/ controllare i dati inseriti
età è un numero?
età è stata inserita
km è un numero valido?
posso inserire un minimo / massimo di km possibili? */

const prezzoPerKM = 0.21;
const scontoMinorenni = 0.2;
const scontoOver = 0.4;
const etaPasseggero = parseInt(prompt("Qual è la sua età?"));
const km = parseInt(prompt("Quanti chilometri vuole percorrere?"));

let prezzoBiglietto = km * prezzoPerKM;

const divInfoBiglietto = document.getElementById("prezzoBiglietto");

if (isNaN(etaPasseggero) || etaPasseggero < 0) {
    divInfoBiglietto.innerHTML = `L'età inserita non è valida`;
} else if (etaPasseggero >= 125) {
    divInfoBiglietto.innerHTML = `Sicuro di essere vivo?`;
} else {
    if (isNaN(km) || km >= 1000 || km <= 0) {
        divInfoBiglietto.innerHTML = `La lunghezza del tragitto non è valida`;
    } else {
        if (etaPasseggero <= 18) {
            prezzoBiglietto = prezzoBiglietto * (1 - scontoMinorenni);
        } else if (etaPasseggero >= 65) {
            prezzoBiglietto = prezzoBiglietto * (1 - scontoOver);
        }
        
        prezzoBiglietto = ( Math.round(prezzoBiglietto * 100) ) / 100;
            
        divInfoBiglietto.innerHTML = `  <ul>
                                            <li>Età: ${etaPasseggero}</li>
                                            <li>Km da percorrere: ${km}</li>
                                            <li>Prezzo del biglietto: ${prezzoBiglietto}</li>
                                        <ul>`;
    }
} 
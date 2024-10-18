// turno de la computadora
import { crearCartaHTML } from "./crear-deck-html";
import { pedirCarta } from "./pedir-deck";
import { valorCarta } from "./valor-deck";

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que requiere la pc para ganar 
 * @param {HTMLElement} puntosHTML  ELEMENTO HTML PARA MOSTRAR PUNTOS   
 * @param {divCartasComputadora} divCartasComputadora   elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora,deck = []) => {

    if (!puntosMinimos) throw new Error('puntos minimos son necesarios')
    if (!deck) throw new Error('el Deck es necesario')
    if (!puntosHTML) throw new Error('el argumento puntosHTML es necesario')
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;


        const imgCarta = crearCartaHTML(carta);
       
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}
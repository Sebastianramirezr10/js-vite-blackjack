


/**
 *  Esta función me permite tomar una carta
 * @param {Array<String>} deck arregñp de string
 * @returns {String} regresa una carta del deck 
 */



export const pedirCarta = (deck) => {

    if (deck.length === 0) throw new error('No hay cartas en el deck')

   const carta = deck.pop();
    return  carta;
}


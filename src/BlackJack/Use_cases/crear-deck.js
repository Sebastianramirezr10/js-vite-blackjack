import _ from 'underscore';
/**
 * 
 * @param {Array<String>} tiposDeCarta ejemplo ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ejemplo ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposDeCarta es obligatorio como un arreglo de String')
    if (!tiposDeCarta || tiposEspeciales.length === 0) throw new Error('TiposEspeciales es obligatorio como un arreglo de String')


    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    return deck;
}
//se exporta de manera "por defecto"
//export default crearDeck;
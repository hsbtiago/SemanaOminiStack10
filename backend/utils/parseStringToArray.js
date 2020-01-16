module.exports = function parseStringToArray(texto) {
    return texto.split(',').map(a => a.trim());
}

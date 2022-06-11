const soma = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers!')
    }
    return a + b;
}
// console.log(soma('1','1'));

module.exports = { soma }
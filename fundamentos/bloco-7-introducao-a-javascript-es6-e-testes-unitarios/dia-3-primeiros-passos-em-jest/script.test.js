const { soma, myRemove } = require('./script')

describe('Exercício 1', () => {
    it('A função retorma o resultado da soma!', () => {
        expect(soma(4, 5)).toBe(9);
        expect(soma(0, 0)).toBe(0);
    });
    it('A Função não aceita inputs diferente de numeros', () => {
        expect(() => soma(4, '5')).toThrowError('parameters must be numbers');
    });
});

describe('Exercício 2', () => {
    it('A Função remove um numero do array!', () => {
        expect(myRemove([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 4, 5]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    });
});
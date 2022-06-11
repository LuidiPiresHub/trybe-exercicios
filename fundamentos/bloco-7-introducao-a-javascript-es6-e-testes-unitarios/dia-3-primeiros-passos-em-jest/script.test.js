const { soma } = require('./script')

describe('Exercício 1', () => {
    it('A função retorma o resultado da soma!', () => {
        expect(soma(4, 5)).toBe(9);
        expect(soma(0, 0)).toBe(0);
    });
    it('A Função não aceita inputs diferente de numeros', () => {
        expect(() => soma(4, '5')).toThrowError('parameters must be numbers');
    });
});
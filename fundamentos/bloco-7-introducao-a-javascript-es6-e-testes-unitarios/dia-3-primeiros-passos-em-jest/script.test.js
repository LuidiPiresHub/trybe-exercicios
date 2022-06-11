const { soma, myRemove, myFizzBuzz, encode, decode } = require('./script')

describe('Exercício 1', () => {
    it('A Função retorma o resultado da soma', () => {
        expect(soma(4, 5)).toBe(9);
        expect(soma(0, 0)).toBe(0);
    });
    it('A Função não aceita inputs diferente de numeros', () => {
        expect(() => soma(4, '5')).toThrowError('parameters must be numbers');
    });
});

describe('Exercício 2', () => {
    it('A Função remove um numero do array', () => {
        expect(myRemove([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 4, 5]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    });
});

describe('Exercício 3', () => {
    it('A Função tem o retorno esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
    });
    it('A Função testa inputs improvaveis', () => {
        expect(myFizzBuzz(2)).toBe(2);
        expect(myFizzBuzz('string')).toBe(false);
    });
});

describe('Exercício 4', () => {
    it('Verfica se encode e decode são funções', () => {
        expect(typeof encode).toBe('function')
        expect(typeof decode).toBe('function')
    })
    it('Verifica a criptografia', () => {
        expect(encode('aeiou')).toBe('12345')
    })
    it('Verifica a descriptografia', () => {
        expect(decode('12345')).toBe('aeiou')
    })
    it('Verifica a quantidade de caracteres no input e output', () => {
        expect(decode('teste').length).toBe(5)
    })
})
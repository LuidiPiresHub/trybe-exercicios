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
    it('Verifica se A é convertido em 1', () => {
        expect(encode('a')).toBe('1')
    })
    it('Verifica se E é convertido em 2', () => {
        expect(encode('e')).toBe('2')
    })
    it('Verifica se I é convertido em 3', () => {
        expect(encode('i')).toBe('3')
    })
    it('Verifica se O é convertido em 4', () => {
        expect(encode('o')).toBe('4')
    })
    it('Verifica se U é convertido em 5', () => {
        expect(encode('u')).toBe('5')
    })
    it('Verifica a descriptografia', () => {
        expect(decode('12345')).toBe('aeiou')
    })
    it('Verifica se 1 é convertido em A', () => {
        expect(decode('1')).toBe('a')
    })
    it('Verifica se 2 é convertido em E', () => {
        expect(decode('2')).toBe('e')
    })
    it('Verifica se 3 é convertido em I', () => {
        expect(decode('3')).toBe('i')
    })
    it('Verifica se 4 é convertido em O', () => {
        expect(decode('4')).toBe('o')
    })
    it('Verifica se 5 é convertido em U', () => {
        expect(decode('5')).toBe('u')
    })
    it('Verifica a quantidade de caracteres no input e output', () => {
        expect(decode('teste').length).toBe(5)
    })
})
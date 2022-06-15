const { soma, myRemove, myFizzBuzz, encode, decode, techList, hydrate } = require('./script')

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
describe('Exercício 5', () => {
    it('Testa se a função techList é definida', () => {
        expect(techList).toBeDefined();
    });
    it('Testa se techList é uma função', () => {
        expect(typeof techList).toBe('function');
    });
    it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
        expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
            {
                tech: 'CSS',
                name: 'Lucas'
            },
            {
                tech: 'HTML',
                name: 'Lucas'
            },
            {
                tech: 'JavaScript',
                name: 'Lucas'
            },
            {
                tech: 'Jest',
                name: 'Lucas'
            },
            {
                tech: 'React',
                name: 'Lucas'
            }
        ]);
    });
    it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
        expect(techList([], 'Lucas')).toBe('Vazio!');
    });
});
describe('Testa a função hydrate', () => {
    it('Testa se a função hydrate é definida', () => {
      expect(hydrate).toBeDefined();
    });
    it('Testa se hydrate é uma função', () => {
      expect(typeof hydrate).toBe('function');
    });
    it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
      expect(hydrate('1 cerveja')).toBe('1 copo de água');
      expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
      expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
      expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
      expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    });
  });
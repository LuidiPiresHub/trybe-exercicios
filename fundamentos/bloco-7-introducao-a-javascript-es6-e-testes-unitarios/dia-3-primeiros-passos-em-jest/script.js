const soma = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers!')
    }
    return a + b;
}

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

function encode(string) {
    const string2 = string.toLowerCase()
    let stringCoded = ''
    for (let word of string2) {
        switch (word) {
            case 'a':
                stringCoded += 1
                break;
            case 'e':
                stringCoded += 2
                break;
            case 'i':
                stringCoded += 3
                break;
            case 'o':
                stringCoded += 4
                break;
            case 'u':
                stringCoded += 5
                break;

            default:
                stringCoded += word
                break;
        }
    }
    return stringCoded
}

function decode(encodedString) {
    let stringDecoded = ''
    for (let word of encodedString) {
        switch (word) {
            case '1':
                stringDecoded += 'a'
                break;
            case '2':
                stringDecoded += 'e'
                break;
            case '3':
                stringDecoded += 'i'
                break;
            case '4':
                stringDecoded += 'o'
                break;
            case '5':
                stringDecoded += 'u'
                break;

            default:
                stringDecoded += word
                break;
        }
    }
    return stringDecoded
}

function techList(array, string) {
    let objectArray = []
    if (array.length === 0) {
        return 'Vazio!'
    } else {
        let arrayOrdenada = array.sort()
        for (let techs of arrayOrdenada) {
            let objeto = {
                tech: techs,
                name: string,
            }
            objectArray.push(objeto)
        }
    }
    return objectArray
}

function hydrate(string) {
    let cups = 0
    for (let number of string) {
        const number2 = parseInt(number)
        if (number2) {
            cups += number2
        }
    }
    if (cups === 1) {
        return `${cups} copo de água`
    }
    return `${cups} copos de água`
}

module.exports = { soma, myRemove, myFizzBuzz, encode, decode, techList, hydrate }
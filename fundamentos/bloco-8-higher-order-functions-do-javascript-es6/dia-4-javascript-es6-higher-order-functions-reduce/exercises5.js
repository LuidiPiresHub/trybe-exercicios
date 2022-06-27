const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (array) => {
    return array.reduce((acc, curr) =>
    acc + curr.split('').reduce((acumulator, current) => {
       if (current === 'a' || current === 'A') return acumulator + 1;
       return acumulator;
    }, 0), 0);
}

console.log(containsA(names));
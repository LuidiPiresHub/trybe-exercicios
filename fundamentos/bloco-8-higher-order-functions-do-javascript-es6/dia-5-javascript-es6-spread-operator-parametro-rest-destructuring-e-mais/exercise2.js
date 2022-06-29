const sum = (...numbers) => {
    total = 0 ;
    numbers.forEach((num) => {
        total += num;
    });
    return total;
};
console.log(sum(10, 50, 20, 549));

// OU

const sum2 = (...numbers) => numbers.reduce(((total, number) => total + number), 0)
console.log((sum2(10, 50, 20, 549)));

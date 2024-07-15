const MUL = [
    [3, 'Fizz'],
    [5, 'Buzz'],
    [7, 'Bazz'],
];
const fizzBuzz = (n) => {
    let result = '';
    for (const [key, value] of MUL) {
        if (n % key === 0)
            result += value;
    }
    return result || n.toString();
};
for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
}

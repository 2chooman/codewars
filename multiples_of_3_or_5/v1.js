// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution (number) {
    let sumOfNumbers = 0;
    for (let i = 0; i < number; i++) {
        let pushed = false;
        if (i % 3 === 0) {
            sumOfNumbers += i;
            pushed = true;
        };
        if (i % 5 === 0 && pushed === false) sumOfNumbers += i;
    };
    return sumOfNumbers;
}

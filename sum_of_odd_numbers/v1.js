// sum_of_odd_numbers https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

function rowSumOddNumbers(n) {
    let triangle = [[1]];
    let row = [];
    let rowSum = 0;
    for (let i = 3; triangle.length < n; i++) {
        if (i % 2 !== 0) {
            if (row.length > triangle.length) {
                triangle.push(row);
                if (triangle.length === n) {
                    return rowSum
                };
                row = [];
                rowSum = 0;
            };
            row.push(i);
            rowSum += i;
        }
    };
    return rowSum = 1;
}

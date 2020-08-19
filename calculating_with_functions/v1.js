// calculating_with_functions https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function Element(num) {
    return function(op) {
        switch (op ? op.operation : '') {
            case 'plus':
                return num + op.number;
            case 'times':
                return num * op.number;
            case 'minus':
                return num - op.number;
            case 'dividedBy':
                return ~~(num / op.number);
            default:
                return num;
        }
    }
}

function Operation(op) {
    return function(num) {
        return { 'operation': op, 'number': num }
    }
}

let numbers = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
let operations = [ 'plus', 'times', 'minus', 'dividedBy' ];

for (let i = 0; i < numbers.length; i++) {
    let numberVar = `${numbers[i]} = Element(${i})`;
    eval(numberVar);
}

for (let i = 0; i < operations.length; i++) {
    let operationVar = `${operations[i]} = Operation('${operations[i]}')`;
    eval(operationVar);
}

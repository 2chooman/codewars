// does_my_number_look_big_in_this https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
    return [...String(value)].reduce((acc, cur) => Number(acc) + Math.pow(Number(cur), String(value).length), 0) === value;
}

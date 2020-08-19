// tic-tac-toe_checker https://www.codewars.com/kata/525caa5c1bf619d28c000335

function isSolved(board) {
    let zero = false;
    let diag1 = '';
    let diag2 = '';
    for (i = 0; i < 3; i++) {
        let col = '';
        for (k = 0; k < 3; k++) {
            col += board[k][i];
            if (i === k) diag1 += board[i][k];
            if (i + k === 2) diag2 += board[i][k];
        };
        if (/1{3}/.test(board[i].join('')) || /1{3}/.test(col) || /1{3}/.test(diag1) || /1{3}/.test(diag2)) return 1;
        if (/2{3}/.test(board[i].join('')) || /2{3}/.test(col) || /2{3}/.test(diag1) || /2{3}/.test(diag2)) return 2;
        if ((/0{1,}/.test(board[i].join('')) || /0{1,}/.test(col) || /0{1,}/.test(diag1) || /0{1,}/.test(diag2)) && !zero) zero = true;
    };
    if (zero) return -1;
    return 0;
}

// sum_strings_as_numbers https://www.codewars.com/kata/5324945e2ece5e1f32000370

function sumStrings(a,b) { 
    a = a.replace(/^0{1,}/, '');
    b = b.replace(/^0{1,}/, '');
    let A, B;
    if (a.length >= b.length) {
        A = [...a];
        B = [...b];
    } else {
        A = [...b];
        B = [...a];
    };
    let C = [];
    B = Array(A.length - B.length).fill(0).concat(B)
    let plusRank = false;
    for (i = A.length - 1; i >= 0; i--) {
        let sum = 0;
        sum = Number(A[i]) + Number(B[i]);
        plusRank ? sum += 1 : sum;
        if (sum > 9) {
            sum = sum.toString()[1];
            plusRank = true;
        } else {
            plusRank = false;
        };
        C.push(sum);
        if (i === 0 && plusRank) C.push(1);
    }
    return C.reverse().join('');
}

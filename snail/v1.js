// snail https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

snail = function(array) {
    if (array[0].length === 0) return [];
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length; k++) {
            array[i][k] = { 'value': array[i][k] }
        }
    };
    let array_90 = [];
    let array_180 = [];
    let array_270 = [];
    for (let k = array[0].length - 1; k >= 0; k--) {
        let array_row = [];
        for (let i = 0; i < array.length; i++) {
            array_row[i] = array[i][k];
        };
        array_90.push(array_row);
    };
    for (let i = array.length - 1; i >=0; i--) {
        let array_row = [];
        for (let k = array[0].length - 1; k >=0; k--) {
            array_row[k] = array[i][k];
        };
        array_180.push(array_row.reverse());
    };
    for (let k = 0; k < array[0].length; k++) {
        let array_row = [];
        for (let i = array.length - 1; i >= 0; i--) {
            array_row[i] = array[i][k];
        };
        array_270.push(array_row.reverse());
    };
    let array_4 = [
        array, array_90, array_180, array_270
    ];
    let array_line = [];
    for (let i = 0; i < array_4[0].length; i++) {
        for (let p = 0; p < array_4.length; p++) {
            for (let k = 0; k < array_4[0][0].length; k++) {
                if (array_4[p][i][k]['value'] !== 'f') {
                    array_line.push(array_4[p][i][k]['value']);
                    array_4[p][i][k]['value'] = 'f';
                }
            }
        }
    }
    return array_line
}

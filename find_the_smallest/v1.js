// find_the_smallest https://www.codewars.com/kata/573992c724fc289553000e95

function smallest(n) {
    let arr_push = [];
    for (let i = 0; i < n.toString().length; i++) {
        let arr = [...n.toString()];
        let pop = arr.splice(i, 1);
        for (let k = 0; k <= arr.length; k++) {
            let obj_push = k === 0 ? pop.concat(arr) : k === arr.length ? arr.concat(pop) : arr.slice(0, k).concat(pop, arr.slice(k));
            arr_push.push([ 
                parseInt(obj_push.join('')), i, k
            ]);
        }
    };
    arr_push.sort((a, b) => {
        return a[0] - b[0] || a[1] - b[1] || a[2] - b[2]
    });
    return arr_push[0]
}

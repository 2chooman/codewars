// double_cola https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0

function whoIsNext(names, n){
    let k = 0;
    let i = 0;
    let m = 0;
    let m_prev = 0;
    let nameNum = names.length;
    while (m < n) {
        m_prev = m;
        m = nameNum * (k + 1);
        i++;
        k += Math.pow(2, i);
    };
    let len = m - m_prev;
    let nq = ((n - m_prev) / len);
    let p = Math.pow(2, i - 1);
    let s = 0;
    while (p <= len) {
        if (nq <= (p / len)) return names[s];
        p += Math.pow(2, i - 1);
        s++;
    };
}

// first_non-repeating_character https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
    let t = s.toLowerCase();
    for (let i = 0; i < t.length; i++) {
        if (t.substring(i + 1).indexOf(t[i]) === -1 && t.substring(0, i).indexOf(t[i]) === -1) {
            return s[i]
        }
    }
    return ''
}

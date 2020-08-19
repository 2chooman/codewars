// jaden_casing_strings https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
    let strArray = this.toLowerCase().split(' ');
    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substr(1)
    };
    return strArray.join(' ');
};

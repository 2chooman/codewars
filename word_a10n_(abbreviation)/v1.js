// word_a10n_(abbreviation) https://www.codewars.com/kata/5375f921003bf62192000746

function abbreviate(string) {
    if (string.length <= 3) {
        return string;
    } else {
        let arrayStrSpace = string.split(' ');
        for (let i = 0; i < arrayStrSpace.length; i++) {
            let arrayStrHyphen = arrayStrSpace[i].split('-');
            for (let k = 0; k < arrayStrHyphen.length; k++) {
                arrayStrHyphen[k].length > 3 ? arrayStrHyphen[k][arrayStrHyphen[k].length - 1] !== ',' ?
                    arrayStrHyphen[k] = arrayStrHyphen[k][0] + (arrayStrHyphen[k].length - 2) + arrayStrHyphen[k][arrayStrHyphen[k].length - 1] :
                    arrayStrHyphen[k] = arrayStrHyphen[k][0] + (arrayStrHyphen[k].length - 3) + arrayStrHyphen[k][arrayStrHyphen[k].length - 2] + arrayStrHyphen[k][arrayStrHyphen[k].length - 1] : 
                    arrayStrHyphen[k];
            };
            arrayStrSpace[i] = arrayStrHyphen.join('-');
        };
        string = arrayStrSpace.join(' ');
        return string;
    }
}

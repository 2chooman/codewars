// format_a_string_of_names_like_bart_lisa_&_maggie https://www.codewars.com/kata/53368a47e38700bd8300030d

function list(names){
    let namesArray = [''];
    for (let i = names.length - 1; i >= 0; i--) {
        namesArray[i] = names.length !== 1 ? (i === names.length - 1 ? ' & ' : i !== 0 ? ', ' : '') + names[i].name : names[i].name;
    };
    return namesArray.join('')
}

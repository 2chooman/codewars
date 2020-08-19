// unique_in_order https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder = function(iterable) {
    let uniqueArray = [];
    if (iterable.length !== 0) {
        let iterableArray = [...iterable];
        uniqueArray.push(iterableArray[0]);
        for (let i = 1; i < iterableArray.length; i++) {
            if (iterableArray[i] !== iterableArray[i-1]) uniqueArray.push(iterableArray[i]);
        };
    };    
    return uniqueArray;    
}

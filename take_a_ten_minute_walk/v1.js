// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk (walk) {
    if (walk.length !== 10) return false;
    let steps = { x: 0, y: 0 };
    walk.forEach(function (direction) {
        let step = { x: 0, y: 0 };
        switch(direction) {
            case 'n':
                step.y = 1;
                break;
            case 'e':
                step.x = 1;
                break;
            case 's':
                step.y = -1;
                break;
            case 'w':
                step.x = -1;
                break;
            default:
                step.x, step.y = 0;
        };
        steps.x += step.x;
        steps.y += step.y;
    });
    if (steps.x === 0 && steps.y === 0) return true;
    return false;
}

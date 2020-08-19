// ip_validation https://www.codewars.com/kata/515decfd9dcfc23bb6000006

function isValidIP(str) {
    let strArray = str.split('.');
    if (strArray.length === 4) {
        for (const element of strArray) {
            if (/^([0-9]{1}|[1-9][0-9]*)$/.test(element) && element >= 0 && element <= 255) continue;
            return false;
        };
        return true;
    };
    return false
}

// regex_validate_pin_code https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN (pin) {
    return /^[0-9]{4}$|^[0-9]{6}$/.exec(pin) !== null ? true : false;
}

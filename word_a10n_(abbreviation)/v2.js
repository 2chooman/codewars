// word_a10n_(abbreviation) https://www.codewars.com/kata/5375f921003bf62192000746

function abbreviate(string) {
    return string.replace(/\w{4,}/gi, function(match) {
        return match[0] + (match.length - 2) + match[match.length - 1];
    });
}

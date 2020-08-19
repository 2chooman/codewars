// extract_the_domain_name_from_a_url https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url){
    let domain = "";
    if (url.indexOf("http") !== -1) {
        if (url.indexOf("www") !== -1) { 
            domain = url.match(/(?<=^http:\/\/www\.|^https:\/\/www\.)[\w\d\-]*(?=\.)/i)
        } else {
            domain = url.match(/(?<=^http:\/\/|^https:\/\/)[\w\d\-]*(?=\.)/i)
        }
    } else {
        if (url.indexOf("www") !== -1) {
            domain = url.match(/(?<=^www\.)[\w\d\-]*(?=\.)/i)
        } else {
            domain = url.match(/[\w\d\-]*(?=\.)/i)
        }
    }
    return domain.join('');
}

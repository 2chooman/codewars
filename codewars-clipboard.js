// ==UserScript==
// @name     codewars.com clipboard
// @version  1
// @grant    GM.setClipboard
// ==/UserScript==

if (window.location.href.indexOf('codewars.com') !== -1) {    
    document.querySelectorAll(".list-item.solutions").forEach((elem) => {
        let divItemTitleChild = document.createElement("div");
        const divItemTitleChildAttr = {
            "class": "btn is-inline",
            "border": false,
            "style": "margin-left: 15px"
        };
        for (const property in divItemTitleChildAttr) {
            divItemTitleChild.setAttribute(property, divItemTitleChildAttr[property])
        };

        let divItemTitleChildInner = document.createElement("div");
        const divItemTitleChildInnerAttr = {
            "class": "is-extra-wide"
        };
        for (const property in divItemTitleChildInnerAttr) {
            divItemTitleChildInner.setAttribute(property, divItemTitleChildInnerAttr[property])
        };

        let divItemTitleChildInnerSpan = document.createElement("span");
        divItemTitleChildInnerSpan.innerText = "Copy";
        divItemTitleChildInner.appendChild(divItemTitleChildInnerSpan);
        
        divItemTitleChild.appendChild(divItemTitleChildInner);
        elem.querySelector(".item-title").appendChild(divItemTitleChild).addEventListener("click", () => {
            const snippetHeader = elem.querySelector("a");
            const snippetHeaderTitle = snippetHeader.innerText.split(" ").map((elem) => {
                return elem.toLowerCase()
            }).join("_");
            const snippetHeaderStr = `// ${snippetHeaderTitle} https://www.codewars.com${snippetHeader.getAttribute("href")}\n\r`;
            GM.setClipboard(snippetHeaderStr + elem.querySelector("code.mb-5px").innerText)
        })
    })
}

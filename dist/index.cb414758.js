function getQuestionPart(phrases) {
    const commonSubstring = findCommonSubstring(phrases);
    const questionParts = phrases.map((phrase)=>phrase.replace(commonSubstring, "").trim());
    questionParts.push(commonSubstring);
    return questionParts;
}
function findCommonSubstring(phrases) {
    const words = phrases.map((phrase)=>phrase.toLowerCase().split(" "));
    const minLength = Math.min(...words.map((words)=>words.length));
    let commonSubstring = "";
    for(let i = 0; i < minLength; i++){
        const substr = words[0][i];
        if (words.every((words)=>words[i] === substr)) commonSubstring += substr + " ";
        else break;
    }
    return commonSubstring.trim();
}
// Test cases
console.log(getQuestionPart([
    "BATHROOM",
    "BATH SALTS",
    "BLOODBATH"
])); // Output: ["ROOM", "SALTS", "BLOOD"]
console.log(getQuestionPart([
    "BEFRIEND",
    "GIRLFRIEND",
    "FRIENDSHIP"
])); // Output: ["BE", "GIRL", "SHIP"]

//# sourceMappingURL=index.cb414758.js.map

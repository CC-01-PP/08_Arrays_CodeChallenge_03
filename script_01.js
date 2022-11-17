
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,"," habbe","Sie","die"],"Q"));

function output(outputStr){
    console.log(outputStr)
}

function getSentence(arr,punkt) {
    const gap = " ";
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        str = str + arr[i] + gap;
    }
    str = str.trim()
    return  str + getPunkt(punkt);
}

function getPunkt(punkt){
    switch (punkt) {
        case "Q":
            return "?";
        case "E": 
            return "!";
        default:
            return ".";
    }
}
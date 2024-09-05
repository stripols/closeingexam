export function countDifferentLetters(sentence) {

    const lowSentence = sentence.toLowerCase()  
    
    const asciiArr=[]

    for (let i = 0; i < lowSentence.length; i++) {
        if (lowSentence.charCodeAt(i) > 96 && lowSentence.charCodeAt(i) < 123)
        asciiArr.push(lowSentence.charCodeAt(i))
    }
    const uniqueAscii = new Set([...asciiArr])
    
    return uniqueAscii.size
}


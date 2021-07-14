const countWords = () => {
    let typedText = document.getElementById("textInput");
    typedText = typedText.value.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    let typedWord = document.getElementById("textInput");
    typedWord = typedWord.value.toLowerCase();
    typedWord = typedWord.replace(/([!.,?])+/g, "");
    typedWord = typedWord.split(/\s/);

    const letterCounts = {};
    const wordCounts = {};
    
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
         } else { 
            letterCounts[currentLetter]++; 
         }
    }

    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
     }

     for (let i = 0; i < typedWord.length; i++) {
        currentWord = typedWord[i];
        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1; 
         } else { 
            wordCounts[currentWord]++; 
         }
    }

    for (let word in wordCounts) { 
        const span_words = document.createElement("span"); 
        const wordContent = `"${word}": ${wordCounts[word]}, `;
        span_words.innerText = wordContent; 
        const words = document.getElementById("wordsDiv");
        words.appendChild(span_words); 
     }
};

const button = document.getElementById("countButton");
button.addEventListener("click", countWords); 

const reset = document.getElementById("resetButton");
reset.addEventListener("click", ()=> {
    const letter = document.getElementById("lettersDiv")
    const words = document.getElementById("wordsDiv")
    letter.innerHTML = "";
    words.innerHTML = "";
});

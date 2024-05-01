function handleInputWord(e){
    if(e.key === 'Enter'){
        if(word.textContent === wordInput.value.trim()){
            correctWordList.push(word.textContent);
            correctWords.textContent += `${word.textContent}  `;
            // setText(correctWords, correctWords.textContent + `${word.textContent}  `);
            correctCount.textContent = `(${correctWordList.length})`;
            setCorrectWord(word.textContent);
            word.textContent = wordList[0];
            wordCount.textContent -= 1;
        }else{
            incorrectWordList.push(word.textContent);
            incorrectWords.textContent += `${wordInput.value.trim()}  `;
            incorrectCount.textContent = `(${incorrectWordList.length})`;
        }
        wordInput.value = "";
    }
}


function setCorrectWord(correctWord){
    wordList = wordList.filter((value) => value !== correctWord);
}

// setText = (element, value) => {
//     element.textContent = value;

// }
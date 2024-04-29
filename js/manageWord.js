function handleInputWord(e){
    if(e.key === 'Enter'){
        if(word.textContent === wordInput.value.trim()){
            correctWordList.push(word.textContent);
            correctWords.textContent += `${word.textContent}  `;
            correctCount.textContent = `(${correctWordList.length})`;
            handleCorrectWord(word.textContent);
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

function handleCorrectWord(correctWord){
    wordList = wordList.filter((value) => value !== correctWord);
}
function endGame(){
    clearTimer();
    handleBasicSetting('', 'Game Over', `Time's Up!`, '', true);
    handleEndGame(true);
    setWordList([]);
    wordBox.classList.add('transparent');
}

function resetGame(){
    clearTimer();
    handleBasicSetting('', 'Word Game', '', '', true);
    handleEndGame(true);
    handleWordList([], '', [], '', []);
    handelCount('', '', '');
    // wordBox.classList.add('transparent');
}

function startGame(){
    handleBasicSetting('제시어', null, null, null, false);
    handleWordList(null, '', [], '', []);
    fetchData();
    handelCount(null, '', '');
    isEndGame = false;
    wordBox.classList.remove('transparent');
}

function handleEndGame(isEndGameValue){
    isEndGame = isEndGameValue;
    resetButton.value = setBtnValue();
}

function clearTimer(){
    timerBox.classList.remove('imminent-time');
    clearInterval(timer);
}

function handleBasicSetting(wordTitleValue, wordValue, timeValue, wordInputValue, isDisabledWordInput){
    if(wordTitleValue !== null) setWordTitle(wordTitleValue);
    if(wordValue !== null) setWord(wordValue);
    if(timeValue !== null) setTime(timeValue);
    if(wordInputValue !== null) setWordInput(wordInputValue);
    if(isDisabledWordInput !== null) setWordInputDisabled(isDisabledWordInput);
}

function handleWordList(wordListValue, correctWordsValue, correctWordListValue, incorrectWordsValue, incorrectWordListValue){
    if(wordListValue !== null) setWordList(wordListValue);
    if(correctWordsValue !== null) setCorrectWords(correctWordsValue);
    if(correctWordListValue !== null) setCorrectWordList(correctWordListValue);
    if(incorrectWordsValue !== null) setIncorrectWords(incorrectWordsValue);
    if(incorrectWordListValue !== null) setIncorrectWordList(incorrectWordListValue);
}

function handelCount(wordCountValue, correctCountValue, incorrectCountValue){
    if(wordCountValue !== null) setWordCount(wordCountValue);
    if(correctCountValue !== null) setCorrectWordCount(correctCountValue);
    if(incorrectCountValue !== null) setIncorrectWordCount(incorrectCountValue);
}

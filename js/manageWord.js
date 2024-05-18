
/**
 * 정답인 단어는 API 결과로 받아온 단어 리스트에서 제거
 * @author 웹팀 김예원 2024-05-02
 * @param {string} correctWord
 */
 const setCorrectWord = (correctWord) => {
    wordList = wordList.filter((value) => value !== correctWord);
}


/**
 * 정답 단어 처리 프로세스
 * @author 웹팀 김예원 2024-05-18
 * 
 */
const correctProcess = () => {
    correctWordList.push(word.textContent);
    setCorrectWords(correctWords.textContent + `${word.textContent} `);
    setCorrectWordCount(`(${correctWordList.length})`);
    setCorrectWord(word.textContent);
    setWord(wordList[0]);
    setWordCount(wordCount.textContent - 1);
}

/**
* 오답 단어 처리 프로세스
* @author 웹팀 김예원 2024-05-18
* 
*/
const incorrectProcess = () => {
    incorrectWordList.push(word.textContent);
    setIncorrectWords(incorrectWords.textContent +`${wordInput.value.trim()}  `);
    setIncorrectWordCount(`(${incorrectWordList.length})`);
}

/**
 * 사용자가 단어를 입력하고 엔터를 누르면 발생하는 이벤트
 * @author 웹팀 김예원 2024-05-02
 * @param {Event} e event
 * @description 입력한 단어가 정답 or 오답일 때 각각 처리 
 * @description 단어를 입력하지 않은 경우(띄어쓰기만 입력된 경우) 함수 종료
 *  
 */
const handleInputWord = (e) =>{ 
    if(wordInput.value.trim() !== '')return;

    if(e.key === 'Enter' || e.type === 'click'){
        word.textContent === wordInput.value.trim() ? correctProcess() : incorrectProcess();
        setWordInput('');
    }
}
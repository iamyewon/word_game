/**
 * 사용자가 단어를 입력하고 엔터를 누르면 발생하는 이벤트
 * @author 웹팀 김예원 2024-05-02
 * @param {Event} e event
 * @description 입력한 단어가 정답 or 오답일 때 각각 처리 
 *  
 */
const handleInputWord = (e, type) =>{ // TODO : 코드 정리 예정 
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

/**
 * 정답인 단어는 API 결과로 받아온 단어 리스트에서 제거
 * @author 웹팀 김예원 2024-05-02
 * @param {string} correctWord
 */
function setCorrectWord(correctWord){
    wordList = wordList.filter((value) => value !== correctWord);
}

// setText = (element, value) => {
//     element.textContent = value;

// }
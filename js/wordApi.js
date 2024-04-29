function fetchData(){
    displayLoading();
    axios.get(`https://random-word-api.herokuapp.com/word?number=${WORD_COUNT}`)
    .then((response) => {
        wordList = response.data;
        wordCount.textContent = WORD_COUNT;
        word.textContent = wordList[0];
        handleTimer();
        hideLoading();
    }).catch(console.error);
}

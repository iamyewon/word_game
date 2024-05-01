async function fetchData(){
    displayLoading();
    return axios.get(`https://random-word-api.herokuapp.com/word?number=${WORD_COUNT}`)
    .then((response) => {
        return response;
    })
    .catch(() => alert('데이터를 불러오지 못했습니다.'))
    .finally(hideLoading);
}

/**
 * word list를 받아오는 외부 API 호출
 * @author 웹팀 김예원 2024-05-02
 * @returns {Object}
 * 
 */
function fetchData2(){
    // displayLoading();
    return axios.get(`https://random-word-api.herokuapp.com/word?number=${WORD_COUNT}`)
    .then((response) => {
        console.log(response);
        setEndGame(false);
        return response;
    })
    .catch(() => alert('데이터를 불러오지 못했습니다.'))
    // .finally(hideLoading);
}

function fetchData() {
    console.log('hhh')
}

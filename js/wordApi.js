/**
 * word list를 받아오는 외부 API 호출
 * @author 웹팀 김예원 2024-05-02
 * @returns {Object}
 * 
 */
function fetchData(){
    displayLoading();
    console.log('fetch!')
    return axios.get(`https://random-word-api.herokuapp.com/word?number=${WORD_COUNT}`)
    .then((response) => {
        setEndGame(false);
        testFunc(response.data);
        return response;
    })
    // .catch(() => alert('데이터를 불러오지 못했습니다.'))
    .catch(console.error)
    .finally(hideLoading);
}

// testFunc가 여기서 호출되면 catch에 걸림 

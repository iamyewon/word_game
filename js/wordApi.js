/**
 * word list를 받아오는 외부 API 호출
 * @author 웹팀 김예원 2024-05-02
 * @returns {Object}
 * 
 */
const fetchData = () => {
    displayLoading();
    return axios.get(`https://random-word-api.herokuapp.com/word?number=${WORD_COUNT}`)
    .then((response) => {
        afterFetch(response.data);
        return response;
    })
    .catch(console.error)
    .finally(hideLoading);
}
// We loaded axios library in our html file
// Lets make an ajax call with axios

function addToScreen(response) {
    const img = document.createElement('img');
    img.src = response.data.message;
    document.body.appendChild(img);
}
axios({
    method: 'get',
    url: 'https://dog.ceo/api/breed/boxer/images/random'
})
    .then(addToScreen);
// method: get
// url: https://dog.ceo/api/breed/boxer/images/random

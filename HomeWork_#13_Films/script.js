let getId = id => document.getElementById(id);

function gettingData() {
    let xhr = new XMLHttpRequest();
    let searchMovie = getId('movie').value
    xhr.open('GET', `http://www.omdbapi.com/?s=${searchMovie}&apikey=3873a28b`, true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let request = JSON.parse(xhr.response).Search;
                for (let i = 0; i < request.length; i++) {
                    let poster = request[i].Poster;
                    let title = request[i].Title;
                    let year = request[i].Year;
                    let type = request[i].Type;
                    getId('data').innerHTML += `<div class="card">
                    <div class="image"><img src="${poster}" alt="" style="width:100%"></div><br>
                    <h3>${title}</h3>
                    <p class="price">${year}</p>
                    <p class="price">${type}</p>
                    </div>`;
                }
            }
        }
    }
    getId('data').innerHTML = "";
    xhr.send();
}

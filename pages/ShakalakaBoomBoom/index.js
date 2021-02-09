const getSearchBar = document.getElementById('search-bar');
const getLyricsShow = document.getElementById('lyrics-show');




// search click handler
document.getElementById('search-btn').addEventListener('click',getSong);
getSearchBar.addEventListener('keypress',(e)=>{
    if(e.keyCode == 13){
        getSong();
    }
});
function getSong(){
    if(getSearchBar.value){
        fetch(`https://api.lyrics.ovh/suggest/${getSearchBar.value}`)
        .then(res => res.json())
        .then(data => showSong(data))
        .catch(err => getLyricsShow.innerText = err)
    }
}




function showSong(datas){

    const data = datas.data;
    console.log(data);
    document.getElementById('search-result').innerHTML = '';
    data.forEach(song => {
        document.getElementById('search-result').innerHTML +=`<div class="single-result row align-items-center my-3 p-3">
            <div class="col-md-9">
                <h3 class="lyrics-name">${song.title}</h3>
                <p class="author lead">Album by <span >${song.artist.name}</span></p>
                <audio src="${song.preview}" controls></audio>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick="getLyrics('${song.title}','${song.artist.name}')" class="btn btn-success">Get Lyrics</button>
            </div>
        </div>`
    });
}
// get lyrics button hadling
function getLyrics(title,artist){
    console.log(title,artist);
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json())
    .then(data => showLyrics(data))
    .catch(err => getLyricsShow.innerText = err)
}


function showLyrics(data){
    document.getElementById('lyrics-show').innerText = `${data.lyrics}`;
    window.scrollTo({
        top : 200,
        behavior : "smooth"
    })
}
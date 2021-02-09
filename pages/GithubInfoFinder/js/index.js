const getBtn = document.getElementById('search-btn');
const getSearchBar = document.getElementById('search-bar');
const getError = document.querySelector('.error');




function showError(msg){
    getError.innerHTML = msg;
    getError.style.display = 'block';
    
    setTimeout(() => {
        getError.style.opacity = '1';
        setTimeout(() => {
            getError.style.opacity = '0';
            setTimeout(() => {
                getError.style.display = 'none';
            }, 250);
        }, 2700);
    }, 500);
}


// event handler with search
getBtn.addEventListener('click',searchUser);
getSearchBar.addEventListener('keypress',(e)=>{
    if(e.keyCode == 13)searchUser();
});


// get data from serer using api
function searchUser(){
    const searchValue = getSearchBar.value;
    if(searchValue){
        fetch(`https://api.github.com/users/${searchValue}`)
        .then(res => res.json())
        .then(data => showUserProfile(data))
        .catch(err=>{
            console.log(err);
            showError('Server Error :( Please try again later');
        })
    }
    else{
        showError('Insert an username');
    }
    
}

// showing data of user 

function showUserProfile(data){
    if(data.message == 'Not Found'){
        showError('Username not found');
        return;
    }
    
    // profile part
    document.getElementById('profile-pic').src = data.avatar_url;
    document.getElementById('profile-pic').alt = data.login;

    document.getElementById('gh-name').innerText = data.name;
    document.getElementById('git-uname').innerText = data.login;
    document.getElementById('git-uname').href = data.html_url;
    document.getElementById('twitter-uname').innerText = data.twitter_username || 'Not Connected';
    document.getElementById('twitter-uname').href = 'https://twitter.com/'+data.twitter_username || '#';
    document.getElementById('profile-bio').innerText = data.bio || 'No Bio Available';
    document.getElementById('followers').innerText = data.followers;
    document.getElementById('following').innerText = data.following;
    document.getElementById('public-repo').innerText = data.public_repos;
    document.getElementById('public-gists').innerText = data.public_gists;

    // geting star info
    fetch(`https://api.github.com/users/${data.login}/starred`)
    .then(res => res.json())
    .then(data => document.getElementById('stars').innerText = data.length)
    

    document.getElementById('created').innerText = data.created_at.split('T')[0];
    document.getElementById('last-update').innerText = data.updated_at.split('T')[0]+" at "+ data.updated_at.split('T')[1];



    fetch(`https://api.github.com/users/${data.login}/repos`)
    .then(res => res.json())
    .then(data => {
        if(data){
            console.log(data);
            let i = 1;
            data.forEach(repo => {
                // all repo create
                document.getElementById('table').innerHTML += 
                `<tr>
                    <td>${i++}</td>
                    <td><a href="${repo.html_url}">${repo.name}</a></td>
                    <td>${repo.watchers_count}</td>
                    <td>${repo.forks_count}</td>
                    <td>${repo.stargazers_count}</td>
                    <td>${repo.updated_at}</td>
                    <td>${repo.default_branch}</td>
                    <td>${(repo.has_pages)? '<a href="'+repo.homepage+'"> Live Link </a>' : 'No Page' }</td>
                </tr>`
            });
        }        
    })
}

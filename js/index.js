Accept: application/vnd.github.v3+json

function fetchApi(){
fetch('https://docs.github.com/en/rest?apiVersion=2022-11-28')
.then((res)=>res.json())
.then((data)=>data.forEach(user=>searchApi(user)))
}

function searchApi(user){
    
}
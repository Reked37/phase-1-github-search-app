const form = document.getElementById('github-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const search = document.getElementById('search').value

    const userName= search.split(' ').join('') 

    fetch(`https://api.github.com/search/users?q=${userName}`,{
        method: 'GET',
        headers:{
            Accept: 'application/vnd.github.v3+json'
        }
    })
    .then((res)=> res.json())
    .then((data) => {
        console.log(data)
        for(let i=0;i<data.items.length;i++){
            console.log(data.items[i].login)
            const li =document.createElement('li')
            const userList= document.getElementById('user-list')
            li.innerHTML=`${data.items[i].login}`
            userList.appendChild(li)
        }
    })

    fetch(`https://api.github.com/search/users?q=${userName}/repos`,{
        method: 'GET',
        headers:{
            Accept: 'application/vnd.github.v3+json'
        }
    })
    .then((res)=> res.json())
    .then((data) => {
        console.log(data)
        for(let i=0;i<data.items.length;i++){
            console.log(data.items[i].length)
            const li =document.createElement('li')
            const repoList= document.getElementById('repos-list')
            li.innerHTML=`${data.items[i].length}`
            repoList.appendChild(li)
        }
    })

})
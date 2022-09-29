

let usernameToUrl = (username) => `https://api.github.com/users/${username}/events`
let commitPromise = (username = 'MarquisTheCoder') => {
     return fetch(usernameToUrl(username), {headers : {'Authorization' : GIT_API_KEY}})
          .then(response => response.json())
          .then(latestCommit => latestCommit[0])
}
commitPromise().then(creationDate => console.log(creationDate.created_at))


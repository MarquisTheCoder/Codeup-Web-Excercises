

let usernameToUrl = (username) => `https://api.github.com/users/${username}/events`
let commitPromise = (username = 'MarquisTheCoder') => {
     return fetch(usernameToUrl(username), {headers : {'Authorization' : GIT_API_KEY}})
          .then(response => response.json())
          .then(latestCommit => latestCommit[0])
}
commitPromise().then(creationDate => console.log(creationDate.created_at))

//vanilla javascript method of promise request is the fetch api


// const aPromise = new Promise((resolve, reject) => {
//      setTimeout(() => {
//           if(Math.random() > 0.5){
//                resolve("Number is above the threshhold");
//           }else{
//                reject("Number to small")
//           }
//      }, 1500);
// });
//
// aPromise
//      .then(response => console.log(response))
//      .catch(error => console.log(error))
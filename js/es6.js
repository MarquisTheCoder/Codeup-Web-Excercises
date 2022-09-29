/*
 * Complete the TODO items below
 */
const users = [
     {
          name: 'zach',
          email: 'zach@codeup.com',
          languages: ['javascript', 'bash']
     },
     {
          name: 'ryan',
          email: 'ryan@codeup.com',
          languages: ['clojure', 'javascript']
     },
     {
          name: 'luis',
          email: 'luis@codeup.com',
          languages: ['java', 'scala', 'php']
     },
     {
          name: 'fernando',
          email: 'fernando@codeup.com',
          languages: ['java', 'php', 'sql']
     },
     {
          name: 'justin',
          email: 'justin@codeup.com',
          languages: ['html', 'css', 'javascript', 'php']
     }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `let` keyword with `const`, then try to reassign a letiable
// declared as `const`
let name = 'Deshawn';
let email = 'deshawn.m.williams01@gmail.com';
let languages = ['javascript', 'html', 'css'];

// TODO: rewrite the object literal using object property shorthand
users.push({
                name: name,
                email: email,
                languages: languages
           });

// TODO: replace `let` with `let` in the following letiable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach(function(user) {
     return emails.push(user.email);
});
users.forEach(user => emails.push(user.email) )
users.forEach(user => names.push(user.name));

// TODO: replace `let` with `let` in the following declaration
let developers = [];
// TODO: rewrite the code below to use object destructuring assignment
     //       note that you can also use destructuring assignment in the function
     //       parameter definition
for(let user of users){
     const {name , email, languages} = user
     // TODO: rewrite the assignment below to use template strings
     developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(', ')}`)
     // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
}
// TODO: Use `let` for the following letiable
let list = '<ul>';

for(let developer of developers){
     list += `<li> ${developer}</li>`;
}
list += '</ul>';
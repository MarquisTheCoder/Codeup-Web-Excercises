"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 9/14/22,
 Time Created: 2:08 PM,
 File Name: map-filter-reduce.js,
 File Description:
 */


//example objects
const users = [
     {
          id: 1,
          name: 'ryan',
          email: 'ryan@codeup.com',
          languages: ['clojure', 'javascript'],
          yearsOfExperience: 5
     },
     {
          id: 2,
          name: 'luis',
          email: 'luis@codeup.com',
          languages: ['java', 'scala', 'php'],
          yearsOfExperience: 6
     },
     {
          id: 3,
          name: 'zach',
          email: 'zach@codeup.com',
          languages: ['javascript', 'bash'],
          yearsOfExperience: 7
     },
     {
          id: 4,
          name: 'fernando',
          email: 'fernando@codeup.com',
          languages: ['java', 'php', 'sql'],
          yearsOfExperience: 8
     },
     {
          id: 5,
          name: 'justin',
          email: 'justin@codeup.com',
          languages: ['html', 'css', 'javascript', 'php'],
          yearsOfExperience: 9
     }
];
(function () {
     
     /*
     * TODO
     *  Use .filter to create an array of user objects where
     *  each user object has at least 3 languages in the languages
     *  array.
     * */
     
     let languageConstraint = users.filter((employee) => employee.languages.length >= 3);
     console.log(languageConstraint);
     
     /*
     * TODO
     *  Use .map to create an array of strings where each element is
     *  a user's email address
     * */
     
     let employeeEmails = users.map(employee => employee.email);
     console.log(employeeEmails);
     
     /*
     * TODO
     *  Use .reduce to get the total years of experience from the list
     *  of users. Once you get the total of years you can use the result
     *  to calculate the average.
     * */
     
     let totalYears = users.reduce((total, employee) => total + employee.yearsOfExperience, 0);
     console.log(totalYears);
     
     /*
     * TODO
     *  Use .reduce to get the longest email from the list of users.
     * */
      
      let longestEmail = users.reduce((lastEmail, employee) => {
          if (employee.email.length > lastEmail.length)
               return employee.email;
          return lastEmail
      }, users[0].email);
      
      console.log(longestEmail);
     
     /*
     * TODO
     *  Use .reduce to get the list of user's names in a single string.
     *  Example: Your instructors are: ryan, luis, zach, fernando, justin.
     * */
     
     let listOfNames = users.reduce((nameList, employee) => {
          nameList.push(employee.name);
          return nameList;
     }, []);
     console.log(listOfNames);
})();
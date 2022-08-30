"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/29/22,
 Time Created: 2:30 PM,
 File Name: warmup.js,
 File Description:
 */


(function () {
     let classes = [
          {class: "6th grade history", students: 18},
          {class: "7th grade history", students: 20},
          {class: "8th grade history", students: 22}
     ];
     
     
     const calculateTotalStudents = (array) => {
          let count = 0;
          array.forEach((object, index) => {
          count += object.students;
          });
          return count;
     }
     // Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`

//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}
     const convertToObject = (className, students) => {
          return {'class': className, 'students': students};
     }
     var neighborhood1 ={
          neighborhood: "Lovely Estates",
          medianHomePrice: 280000,
          pool: true,
          tennis: false,
          crimeRate: "low",
          schools: [
               {name: "ES1", rating: 8},
               {name: "MS2", rating: 6},
               {name: "HS3", rating: 8}
          ]
     }
     
     var neighborhood2 ={
          neighborhood: "Luminous Estates",
          medianHomePrice: 270000,
          pool: true,
          tennis: false,
          crimeRate: "low",
          schools: [
               {name: "ES1", rating: 8},
               {name: "MS2", rating: 8},
               {name: "HS3", rating: 8}
          ]
     }
     
     var neighborhood3 ={
          neighborhood: "Ginormous Ego Estates",
          medianHomePrice: 350000,
          pool: true,
          tennis: true,
          crimeRate: "low",
          schools: [
               {name: "ES1", rating: 9},
               {name: "MS2", rating: 9},
               {name: "HS3", rating: 9}
          ]
     }

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
     const desirableNeighborhood = (neighborhood) => {
          let staticStats = neighborhood.crimeRate === 'low' && neighborhood.medianHomePrice < 300000;
          neighborhood.schools.forEach((school, index, array) => {
               if(index !== 0){
                    array[0].rating += school.rating;
               }
          })
          return staticStats && neighborhood.schools[0].rating >= 24;
     }
     
     
     function beeramid(bonus, costOfCan) {
          /*level , amount spend*/
          let pyramid = [0,0];
          while(pyramid[1] <= bonus){
                pyramid[0]++
               let spend = (pyramid[0] ** 2) * costOfCan;
               if(pyramid[1] + spend > bonus){
                    return pyramid[0]-1;
               }
               pyramid[1] += spend;
              
               
               console.log(`level: ${pyramid[0]}`)
               console.log(`number of cans: ${pyramid[0] ** 2}\nTotal: ${pyramid[1]}\n`);
              
               
          }
          
          
          
          
     }
     
     console.log(desirableNeighborhood(neighborhood1));
     console.log(desirableNeighborhood(neighborhood2));
     console.log(desirableNeighborhood(neighborhood3));
     
     console.log(beeramid(5000, 3));

})();
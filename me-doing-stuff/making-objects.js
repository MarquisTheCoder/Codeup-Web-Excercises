"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/18/22,
 Time Created: 2:32 PM,
 File Name: making-objects.js,
 File Description:
 */


(function () {
        /*Using Javascript Object Literal Notation*/
        let person = function(firstName, lastName, birthday, ethnicity){
                this.firstName = firstName;
                this.lastName = lastName;
                this.birthday = birthday;
                this.ethnicity = ethnicity;
                //trying to intialize variables for
                //job object
                this.job = {
                           putOccupation: function(occupation) {
                                   this.occupation = occupation;
                           },
                           printOccupation: function(){
                                   console.log(this.occupation);
                           },
                           putSalary: function(salary){
                                   this.salary = salary;
                           },
                           printSalary: function(){
                                   console.log(this.salary);
                           }

                }

        }
        let Marquis = new person('Marquis', 'Williams', '02172000', 'Negro');
        Marquis.job.putOccupation('Developer');
        console.log(Marquis.job.occupation);
})();
"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/18/22,
 Time Created: 2:32 PM,
 File Name: making-objects.js,
 File Description:
 practicing objects in javascript
 */


(function () {
        /*Using Javascript Object Literal Notation*/
        let person = function(firstName, lastName, birthday, ethnicity){
                this.firstName = firstName;
                this.lastName = lastName;
                this.birthday = birthday;
                this.ethnicity = ethnicity;
                //trying to initialize variables for
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

                this.privateData = {

                        checkCredentials : function(userName, password){
                                if(userName == 'user' && password == 'pass'){
                                        return 'secret_key: 2342323k4ghv32';
                                }
                                return 0;
                        }
                }
                this.userId = Math.floor(Math.random() * (10000000 - 1000 + 1) + 1000);

        }

        let Marquis = new person('Marquis', 'Williams', '02172000', 'BLK');
        Marquis.job.putOccupation('Developer');
        Marquis.job.putSalary('100000');


        for(let userName = prompt('username');!Marquis.privateData.checkCredentials( userName, password)){

                alert('Username/Password Combo not accepted');
        }

        alert(Marquis.privateData.checkCredentials(userName,password));



        function Animal(species, name, habitat ){

                let health = 50.0;
                let stamina = 75.0;
                let morale = 100.0;


                Animal.needsSustenance = true;
                Animal.needsOxygen = true;
                Animal.isImmortal = false;
                Animal.needsWater = true;

                this.isAlive = true;
                this.habitat = habitat;
                this.species = species;
                this.name = name;


                let foodTypes = {
                        protein: 20,
                        vegetables: 5,
                        poison: -10,
                        carbs: 25
                }

                this.actions = {
                        checkHealth : function(){
                                if(health > 0){
                                        console.log('tiger is dead');
                                        console.log(            '(\'--..--`)\n' +
                                                            '     .-- )( --.\n' +
                                                            '\n' +
                                                            '     .-/    \\-.\n' +
                                                            '    ( (  \\/  ) )\n' +
                                                            '     \' \'----\' \'\n' +
                                                            '        \'__\'');
                                        return 0;
                                }else{
                                        return 1
                                }
                        },
                        eatFood : function (foodType){
                          if(foodTypes[foodType]){

                                  console.log(`Eating ${foodType}`);
                                  console.log(`Health before eating: ${health}`);
                                  health += foodTypes[foodType];
                                  console.log(`health after eating: ${health}`);
                                  this.checkHealth();
                          }else{
                                  console.log('tiger not fed');
                                  this.checkHealth();
                          }
                        }
                }
        }

        function kill(animal){
                console.log(`Killing: ${animal.species} ${animal.name}`);
                while(animal.actions.checkHealth()){
                        animal.actions.eatFood('poison');
                }
        }
        let tiger = new Animal('tiger','carl','jungle');
        // console.log(tiger.species);
        // tiger.actions.eatFood('protein');
        // tiger.actions.eatFood('poison');

        kill(tiger);

})();
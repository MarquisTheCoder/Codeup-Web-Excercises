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
                                        return 'secret_key: flag{y0u-cR4cK3d-th3-c0d3}';
                                }
                                return 0;
                        }
                }
                this.userId = Math.floor(Math.random() * (10000000 - 1000 + 1) + 1000);

        }

        let Marquis = new person('Marquis', 'Williams', '02172000', 'BLK');
        Marquis.job.putOccupation('Developer');
        Marquis.job.putSalary('100000');


        while(true){
                let userName =  prompt('Username');
                let password =  prompt('Password');
                if(Marquis.privateData.checkCredentials(userName,password)){
                        alert(Marquis.privateData.checkCredentials(userName,password));
                        break;
                }
                alert('Username/Password Combo not accepted');
        }




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
                                if(health <= 0){
                                        return('tiger is dead \n' +
                                                    '(\'--..--`)\n' +
                                                            '     .-- )( --.\n' +
                                                            '\n' +
                                                            '     .-/    \\-.\n' +
                                                            '    ( (  \\/  ) )\n' +
                                                            '     \' \'----\' \'\n' +
                                                            '        \'__\'');

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
                document.write(`Killing: ${animal.species} ${animal.name}`);
                while(animal.actions.checkHealth()){
                        animal.actions.eatFood('poison');
                }

        }
        let tiger = new Animal('tiger','carl','jungle');
        // console.log(tiger.species);
        // tiger.actions.eatFood('protein');
        // tiger.actions.eatFood('poison');

        //first class functions
        //first class function is a value like any other value
        //all the things you can do with other values you can do with
        //functions
        //you can return functions out of functions

        let wishlist = [10,14,40,57,23];
        function checkPricesOfWishlist(wishlist){
                wishlist.forEach( item=> {
                        if(item > 50)
                                return true;
                });
                return false;
        }

        function totalCost(arr){
                arr.forEach((e_,_i,arr) => (_i !== 0) ? arr[0] += e_ : 0);
                return arr[0];
        }

        checkPricesOfWishlist(wishlist);

        let x = [1,2,3,4,5]

        //first class functions take a function uses a function and returns
        function doAll(func1, func2){
                console.log(func1(wishlist), func2(x))
        }

        doAll(checkPricesOfWishlist, totalCost);

        let tigerId = document.getElementById('tiger');


})();
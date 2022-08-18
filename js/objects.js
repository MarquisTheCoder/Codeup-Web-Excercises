(function() {
    //"use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: 'Deshawn',
        middleName: 'Marquis',
        lastName: 'Williams'
    }

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        console.log(`Hello from ${this.firstName} ${this.lastName}`);
    }

    console.log('\n');
    /** TODO:
     *           1 --If a shopper spends more than $200, they get a 12%
     *           2 --Cameron bought $180, Ryan $250 and George $320. Your program will have to
     *           3 --display a line with the name of the person, the amount before the
     *           4 --discount, the discount, if any, and the amount after the discount.
     */

     let shoppers = [
             {name: 'Cameron', amount: 180},
             {name: 'Ryan', amount: 250},
             {name: 'George', amount: 320}
     ];

     shoppers.forEach(function(shopper){
         if(shopper.amount > 200){
             let discount = shopper.amount * 0.12;
             let output =
                     `${shopper.name}=> got a 12% discount\n` +
                     `amount before discount: ${shopper.amount}\n` +
                     `discount amounted to: ${discount}\n` +
                     `full price after discount is: ${shopper.amount - discount}`
             console.log(output+'\n');
         }else{
             let output =
                     `${shopper.name}=> got a no discount\n` +
                     `discount amounted to: 0\n` +
                     `full price: ${shopper.amount}`
             console.log(output+'\n');
         }
     })



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    const books = [
            {
                    title: 'Meditations', author: {
                        firstName: 'Marcus',
                        lastName: 'Aurelius'
                        }
            },
            {
                    title: 'Holy Bible', author:{
                            firstName: 'King',
                            lastName: 'James'
                    }
            },
            {
                    title: 'Quran', author:{
                            firstName: 'Allah',
                            lastName: 'Allah'
                    }
            },
            {

                    title: 'Moon-walking with einstein', author:{
                            firstName: 'Joshua',
                            lastName: 'Foer'
                    }
            },
            {
                    title: 'The Art Of War', author:{
                            firstName: 'Sun',
                            lastName: 'Tzu'
                    }
            }

    ]

    console.log(books[0].author);
    console.log(books[1].author);
    console.log(books[2].author);
    console.log(books[3].author);

    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);
    console.log(books[1].author.firstName);
    console.log(books[1].author.firstName);
    console.log(books[2].author.firstName);
    console.log(books[2].author.lastName);

        /**
     * TODO
     *  the book number (use the index of the book in the array)
     *  the book title
     *  author's full name (first name + last name)
     */

        books.forEach(function(book, bookIndex){
                console.log(`book number: ${bookIndex}`);
                console.log(`book title: ${book.title}`);
                console.log(`authors full name: ${book.author.firstName} ${book.author.lastName} \n`);
        })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    const createBook = function(title, firstName, lastName) {
            return {
                    title: title, author: {
                            firstName: firstName,
                            lastName: lastName
                    },showBookInfo : function (){
                            console.log(this.title);
                            console.log(this.author.firstName);
                            console.log(this.author.lastName);
                    }
            }
    }

})();

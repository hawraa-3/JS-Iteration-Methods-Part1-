const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

let greaterThan25 =[]

let multiplesOfThree = [];


greaterThan25 = numbers.filter(function (num) {
   
    return num >= 25 ;

  }
);

multiplesOfThree = numbers.filter(function(num){
    if(num % 5 == 0){
        return num;
    }

})




/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/


let squares = [];
squares = numbers.map(function (num) {
    return num ** 2;

 } );

 console.log(squares);


/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/


let greaterThan20 = numbers.filter(function (num) {
   
    return num >= 20 ;

  }
).map(function(num)
{return num **2;})

console.log(greaterThan20)


let divisibleBy5 = numbers.filter(function(num){
    return num %5 == 0 }
).map(function(num)
{return num*3})

console.log(divisibleBy5)
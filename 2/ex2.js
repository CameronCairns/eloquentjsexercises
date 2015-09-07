//Written by Cameron Cairns
//Exercise 2.2 FizzBuzz
for(var count = 1; count <= 100; count++){
    //Note that this is defined first
    //so that fizzbuzz numbers won't 
    //be caught by the logic of 
    //mod 3 or 5 since it satisfies
    //that as well
    //Note that the lowest number
    //divisible by two factors
    //is the factors multiplied
    //by one another in  this 
    //case 15
    if(count % 15 === 0){
        console.log('FizzBuzz');
    }
    else if(count % 3 === 0){
        console.log('Fizz');
    }
    else if(count % 5 === 0){
        console.log('Buzz');
    }
    else{
        console.log(count);
    }
}

//Written by Cameron Cairns
//Exercise 2.2 FizzBuzz
for(var count = 1; count <= 100; count++){
    if(count % 15 === 0){
        console.log('FizzBuzz')
    }
    else if(count % 3 === 0){
        console.log('Fizz')
    }
    else if(count % 5 === 0){
        console.log('Buzz')
    }
    else{
        console.log(count)
    }
}
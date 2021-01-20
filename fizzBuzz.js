 let fizz = []
 let buzz = []
 let fizzBuzz = []
 let other = []

var func = function (n) {
    

    for (let i = 1; i <= n; i++)
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzz.push(i)
    } else if (i % 3 === 0) {
        fizz.push(i)
    } else if ( i % 5 === 0) {
        buzz.push(i)
    } else {
        other.push(i)
    }
   console.log(fizz.length)
   console.log(buzz.length)
   console.log(fizzBuzz.length)
   console.log(other.length)
};

func(200)
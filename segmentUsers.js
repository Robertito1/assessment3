const even = []
const odd = []
const segmentUsers = (num) =>{
    for (let i = 1; i <= num; i++){
       if(i % 2 === 0){
          even.push(i)
       } else{
           odd.push(i)
       }
    }
    console.log('Even Array' + even)
    console.log('Odd Array' + odd)
        return 
}

console.log(segmentUsers(100))
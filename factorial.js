// recursive n*(n-1)!
function getFactorial(n){
    if(n==1){
        return 1;
    }
    return n*getFactorial(n-1);
}

// decrementing loop
// function getFactorial(num){
//     var fac=1;
//     for(var i=num; i>=1; i--){
//         fac =fac*i;
        
//     }
//     return fac;
// }

// incrementing loop

// function getFactorial(num){
//     var fac=1;
//     for(var i=1; i<=5; i++){
//         fac =fac*i;
        
//     }
//     return fac;
// }


var firstFactorial = getFactorial(5);
console.log(firstFactorial)

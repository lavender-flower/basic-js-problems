
    function getFibonacci(fibo){
        for(var i=2;i<10;i++){
            fibo[i]=fibo[i-1]+fibo[i-2];
        }
        return fibo;
    }
    const n=[0,1];  
    var fibona = getFibonacci(n);
console.log(fibona);
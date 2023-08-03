function onlyPositive(arr){
    var a=0;
    for(i = 0;i < arr.length; i++){
        if(arr[i] <= -1){
            break;
        }
        else{
            a=arr[i];
console.log(a);
     
     
        }
        
        
        
     }
     
   return a;  
    
}

var num=[1,2,3,4,5,6,7,8,9,-1,-2,51.99,20];
var getpos=onlyPositive(num);
console.log(getpos);
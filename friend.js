
function bestfriend(array) {
    var max = 0;
    var b='';
    for (var i = 0; i < array.length; i++) {
        if (max < array[i].length) {
            max = array[i].length;
        
        } 
    }
    for (var i = 0; i < array.length; i++) {
        
        if(max == array[i].length){
             b=array[i];
        }
        
        
        } 

        return b;
    }
    

    const friend=['abida','ria','lee','liya','quratulain'];
    let a=bestfriend(friend);
    console.log('lengthy name is=',a);
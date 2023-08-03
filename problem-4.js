
function perfectFriend(str) {
    
    var b=[];
    for (var i = 0; i < str.length; i++) {
        if ( str[i].length==5) {
        b.push(str[i]);
        return b;
        }  
    }
         
    }
    

    const friend=['ria','lee','liyas','quratulain','abida'];
    let fiveCharName=perfectFriend(friend);
    console.log(fiveCharName);
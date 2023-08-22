// const bank= owner=>{
//     balance=0;
//     return amount=>{
//         balance+=amount;
//         return balance;
//     }
// }

const bank= owner=>{
    balance=0;
    return {
deposite:amount=>{
            balance+=amount;
            return balance;
        },
        withdraw:amount=>{
                    balance-=amount;
                    return balance;
                }
    }
    
}


const ofizBank=bank('ofiz');
console.log(ofizBank.deposite(100));
console.log(ofizBank.deposite(100));
console.log(ofizBank.deposite(100));
console.log(ofizBank.withdraw(100));


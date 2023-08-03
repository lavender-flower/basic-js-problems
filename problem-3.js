

function deliveryCost(productNo){
    if(productNo<=100){
        const total=100*productNo;
        return total;
    }
    else if(productNo<=200){
        const firsthundredCost=100*100;
        const secondHundred=productNo-100;
        const total=secondHundred*80+firsthundredCost;
        return total;
    }
    else {
        const firsthundredCost=100*100;
        const secondHundredCost=100*80+firsthundredCost;
        const thirdHundred=productNo-200;
        const total=thirdHundred*50+secondHundredCost;
        return total;
    }

}

const totalCost= deliveryCost(300);
console.log(totalCost);
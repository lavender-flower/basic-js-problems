function leapYear(year){
    if(year%4==0){
        if(year%100==0){
            if(year%400==0){
                return true;
            }
            else{
                return false;}
            }
        }
        
    }


var isyear= 2100;
console.log('Year is', isyear);
var isthatyear= leapYear(isyear);
console.log('is that year is leap year? ans is = ',isthatyear);
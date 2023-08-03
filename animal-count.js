function animalCount(miles){
    if(miles<=10){
        const a=10*miles;
        return a;
    }
    else if(miles<=20){
        const b=10*10;
        const c=miles-10;
        const a=c*50+b;
        return a;
    }
    else {
        const b=10*10;
        const c=miles-10;
        const d=c*50+b;
        const e=c-10;
        const a=e*75+d;
        return a;
    }

}

const animaldense= animalCount(25);
console.log(animaldense);
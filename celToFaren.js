// (1) (1°C × 9/5) + 32 = 33.8°F

function celToFaren(celcious){
    var faren = celcious*9/5 +32;
    return faren;
}

var farenheight = celToFaren(0);
console.log('Farenheight is ', farenheight);
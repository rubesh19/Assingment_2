
function odd(x){
    
    var b = 0;
    
    for (j=0;j<x.length;j++)
    {
        
         b += x[j];
        
    }
    
    return b;
    
}

var n = [1,2,3,4,5,6,7,8,9];


console.log(odd(n));



function odd(x){
    
    var a = [];
    
    for (j=0;j<x.length;j++)
    {
        
            var c = x[j].charAt(0).toUpperCase() +  x[j].slice(1);
            
            a.push(c);
        
    }
    
    return a;
    
}

var n = ['hi','i','am','rubesh'];


console.log(odd(n));


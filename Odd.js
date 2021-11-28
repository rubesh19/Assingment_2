

function odd(x){
    
    var a = [];
    
    for (j=0;j<x.length;j++)
    {
        
        if (x[j]%2!==0)
        {
            a.push(x[j]);
            
        }
    }
    
    return a;
    
}

var n = [];

for (i=1;i<101;i++){
    n.push(i);
}


console.log(odd(n));


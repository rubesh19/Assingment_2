
function odd(x){
    
    var a = [];
    
    for (j=0;j<x.length;j++)
    {
        
        if (x[j]==2)
        {
            
            a.push(x[j]);
            
        }
       
        
        else if ((x[j]%2)!==0 && x[j]!==1)
        {
            
            a.push(x[j]);
            
        }
        
        
        
    }
    
    return a;
    
}

var n = [1,2,3,4,5,6,7,8,9];


console.log(odd(n));


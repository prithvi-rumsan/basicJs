//ex 1

function reverse(number){
    var numString = number.toString();
    var rev = [];
    var j =0;
    for(var i = numString.length-1;i>=0;i--){
        rev[j]=numString[i];
        j++;          
    }
    
    return parseFloat(rev.join(''));    
}
var no = 12345;
console.log(no,'string');
console.log(reverse(no));

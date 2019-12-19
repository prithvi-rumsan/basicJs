//ex3

function reverse(string){
    var j=0,temp=[];
    for(i = string.length-1 ;i>=0;i--){
        temp[j]= string[i];
        j++;
    }
    return temp.join('');
}
console.log(reverse('Step On No Pets1'));
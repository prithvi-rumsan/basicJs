//ex4
function vowels(string){
    var count = 0;
    for(var i = 0; i <string.length ; i++){
        if( string[i] == 'a' || string[i] == 'e' ||  string[i] == 'i' || string[i] == 'o' || string[i] == 'u' || string[i] == 'A' || string[i] == 'E' ||  string[i] == 'I' || string[i] == 'O' || string[i] == 'U'){
            count++;
        }
    }
    return ('the no. of vowels is = '+count);
}
console.log(vowels('abcdefghijklmnopqrstuvwxyz'));
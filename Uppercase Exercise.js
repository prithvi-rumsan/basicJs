//ex2

function capital(string){
    capString = [];
    for(var i = 0 ; i<string.length ; i++){
        if(i == 0){
            capString[i]=string[i].toUpperCase();            
        }
        else if(string[i] == ' '){
            capString[i]=string[i];
            capString[i+1]=string[i+1].toUpperCase();
            i++;
        }
        else capString[i]=string[i];        
    }
    return capString.join('')
}


console.log(capital('i hello i am rocky'));
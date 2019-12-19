//ex5

function largestName(list){
    listLength =[];
    for(var i = 0 ; i< list.length ; i++){
        listLength[i] = list[i].length;
    }
    var temp = listLength.sort(function(a, b){return b-a})[0];  
    for(var i = 0 ; i< list.length ; i++){
        if( list[i].length == temp){
            return list[i];        }
    }
}

list = ['Nepal','Pakistan','Bangladesh','Sri lanka','United States Of America'];
console.log(list);
console.log(largestName(list));
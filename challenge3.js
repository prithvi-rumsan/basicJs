var tip1,tip2,tip3, bill1 = 124, bill2=48, bill3=268;

function calculateTip(bill){
    switch(true){
        case bill<50:
            return (20/100)*bill;
            break;
    
        case bill>=50 && bill<=200:
            return (15/100)*bill;
            break;
        
        case bill>200:
            return (10/100)*bill;
            break;
    }
}
tip1 = calculateTip(bill1);
tip2 = calculateTip(bill2);
tip3 = calculateTip(bill3);

console.log(tip1,tip2,tip3);
 
var arrTips = [tip1,tip2,tip3];
var finalBill = [bill1+tip1,bill2+tip2,bill3+tip3];

console.log(arrTips);
console.log(finalBill);
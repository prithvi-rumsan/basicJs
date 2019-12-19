var tips = [];
var finalBill = [];
var john = {
    bill : [124,48,268,180,42],
    calcTip : function(){
        for(var i =0; i<this.bill.length; i++){
            
            if(this.bill[i] <50){
                tips[i] = (20/100)*this.bill[i];
            }
            else if(this.bill[i]>=50 && this.bill[i]<=200){
                tips[i] = (15/100)*this.bill[i];
                
            }
            else if (this.bill[i]>200){
                tips[i] = (10/100)*this.bill[i];
                
            }
            finalBill[i] = this.bill[i]+tips[i];
        }
    }
};

john.calcTip();
console.log(john.bill);
console.log(tips);
console.log(finalBill);

var bill2 = [77,375,110,45];
var tips2=0, avgTips2;
function calculateAvgTips(){
    for(i=0; i<bill2.length;i++){
        if(bill2[i]<100){
            tips2 = tips2 +(20/100)*bill2[i];
        }
        else if(bill2[i]>=100 && bill2[i]<=300){
            tips2 = tips2 +(10/100)*bill2[i];
        }
        else if(bill2[i]>300){
            tips2 = tips2 +(25/100)*bill2[i];
        }
    }
    return avgTips2 = tips2/bill2.length;    
}
var result = calculateAvgTips();
console.log(result);
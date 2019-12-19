var john = {
    firstName: 'John',
    lastName: 'Cena',
    mass: 70,
    height: 2,
    calcBmi: function(){
         return (this.mass)/(this.height*this.height);
    
    }
}

var mark = {
    firstName: 'Mark',
    lastName: 'Myword',
    mass: 70,
    height: 2,
    calcBmi: function(){
        return (this.mass)/(this.height*this.height);
    }
}

john.bmi = john.calcBmi();
mark.bmi = mark.calcBmi();

if(john.bmi>mark.bmi){
    console.log('John has higher BMI = '+john.bmi);
}
else if(john.bmi<mark.bmi){
    console.log('Mark has higher BMI = '+mark.bmi);
}
else{
    console.log('John and Mark has the same BMI');
    console.log(john.bmi,mark.bmi);
}

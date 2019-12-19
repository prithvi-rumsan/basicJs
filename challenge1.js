//udemy challenge1

var heightMark = 2;
var heightJohn = 3;
var massMark = 100;
var massJohh = 200;
var bmiMark = massMark/(heightMark*heightMark);
var bmiJohn = massJohh/(heightJohn*heightJohn);
var isBmiMarkGreaterThanJohn = bmiMark > bmiJohn;

console.log('is bmi of mark greater than that of john = '+ isBmiMarkGreaterThanJohn);
console.log('bmi of mark = '+bmiMark);
console.log('bmi of john = '+bmiJohn);

if(bmiMark>bmiJohn){
    console.log('bmi of mark is greater');
}
else{
    console.log('bmi of john is greater');
}

var ageSwitch = 30;
switch(true){
    case ageSwitch <20:
        console.log('he is a boy');
        break;

    case ageSwitch >=20 && ageSwitch <30:
        console.log('he is young man');
        break;
        
    case ageSwitch >=30:
        console.log('he is a grown up man');
        break;
}

var job = 'driver';
switch('coder'){
    case 'driver':
        console.log('he is a driver');
        break;

    case 'teacher':
        console.log('he is a teacher');
        break;
        
    case 'coder':
        console.log('he is a coder');
        break;
}
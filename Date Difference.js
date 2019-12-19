//ex8.js

const date1 = new Date('10/20/2000');
const date2 = new Date('11/20/2000');
var diffTime = Math.abs(date2-date1);
var diffDays = diffTime/(1000*60*60*24);
console.log('the no. of days between ' + date1 + ' and ' + date2 + ' is ' + diffDays + ' days');
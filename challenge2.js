//udemy challenge 2

var teamJohn;
var teamMike;
var teamMary;
var avgScoreJohn = (20)/3;
var avgScoreMike = (20)/3;
var avgScoreMary = (20)/3;
var winner = avgScoreJohn>avgScoreMike ? avgScoreJohn : avgScoreMike;
console.log(avgScoreJohn +' '+ avgScoreMike + ' '  +winner);

if(avgScoreJohn > avgScoreMary && avgScoreJohn>avgScoreMike){
    console.log('the winner is John with an avg score = '+avgScoreJohn);
}
else if(avgScoreMary > avgScoreJohn && avgScoreMary>avgScoreMike){
    console.log('the winner is Mary with an avg score = '+avgScoreMary);
}
else if(avgScoreMike > avgScoreJohn && avgScoreMike>avgScoreMary){
    console.log('the winner is Mike with an avg score = '+avgScoreMike);
}
else if(avgScoreJohn == avgScoreMary && avgScoreJohn== avgScoreMike){
    console.log('it is a draw avg score = '+avgScoreJohn);
}

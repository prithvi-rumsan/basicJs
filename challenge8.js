class Main {
    constructor(name,buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }    
}

class Park extends Main {
    constructor(name,buildYear,treesNum,area){
        super(name,buildYear);
        this.treesNum = treesNum,
        this.area = area
    }
    treeDensity(){
        const density = (this.treesNum/this.area);
        console.log(`${this.name} park has a tree density of ${density} trees per sq km`);
    }
}

class Street extends Main {
    constructor(name,buildYear,length,size = 3){
        super(name, buildYear);
        this.length = length,
        this.size = size
    }
    classifyStreet(){
        const classification = new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');
        console.log(`${this.name} street, built in ${this.buildYear}, is a ${classification.get(this.size)} street`);
    }   
}

const allPark = [new Park('kathmandu', 1980, 900, 30),new Park('bhaktapur', 1990, 1000, 40),new Park('lalitpur', 2000, 1600, 50)];

const allStreet = [new Street('naradevi',1900,2,1), new Street('tengal',1910,6,2), new Street('yethka',1920,10), new Street('kilagha',1930,14,5)];

console.log(allPark);
console.log(allStreet);


function avgAge(){
    var agePark =[];
    allPark.forEach((el,i)=>{
        agePark.push((2019-el.buildYear));
    })
    console.log(agePark);
    const sumAgePark = agePark.reduce((prev,curr,index) => prev + curr ,0
    )
    console.log(`the average age of all the parks is = ${sumAgePark/agePark.length}`);    
}

function densityPark(){
    allPark.forEach((el,i) => el.treeDensity());
}

function moreThan1000Trees(){
    allPark.forEach((el,i) => {
        el.treesNum > 1000 ? console.log(`${el.name} park has more than 1000 trees`) : null ;
    })
}

function reportPark(p){

    console.log('\n'+ `***** REPORT PARK ******`+`\n`);
    //avg age
    avgAge();

    //density of each park
    densityPark();

    //parks that have more than 1000 trees
    moreThan1000Trees();
}

function totalLengthAndAvgLengthStreet(){
    var streetLengthArr = allStreet.map(el => el.length);
    console.log(streetLengthArr);
    var totalLength = streetLengthArr.reduce((prev,curr,index) => prev+curr ,0);
    console.log(`the total length of the streets is ${totalLength} and the average length of all the streets is ${totalLength/streetLengthArr.length}`)
}

function reportStreet(p){
    console.log('\n'+ `***** REPORT STREET ******`+`\n`);

    //total length + avg length of all the streets
    totalLengthAndAvgLengthStreet();

    //classification of the streerts based on the size
    allStreet.forEach((el,i) => el.classifyStreet()); 
    
}

reportPark();
reportStreet();



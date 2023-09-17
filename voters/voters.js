var voters = [
    {name:'Bob' , age: 18, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function calculatePercent (sub, total) {
    let percent = Math.round(sub/total * 100);
    return percent;
}
var youths = [];
var boomers =[];
var elders =[];
for (var i = 0; i < voters.length; i++) {
    var voter = voters[i];
    if (voter.age >= 18 && voter.age <= 25) {
        youths.push(voter);
    } else if (voter.age >= 26 && voter.age <= 35) {
        boomers.push(voter);
    } else if (voter.age >= 36 && voter.age <= 55) {
        elders.push(voter);
    } else {
        return;
    }
}

function printNames (group) {

for (var i = 0; i < group.length; i++) {
    var person = group[i];
    console.log(person.name);
}
}
console.log(youths.length)
printNames(youths)
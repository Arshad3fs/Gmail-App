// For Loop

console.log('Start')
for(var i=1; i<365; i++) {    
    if(i % 7 === 0){
        console.log('Today is a Sunday', i)
        continue;
    }
    if( i === 320){
        console.log('Summer holidy started', i)
        break;
    }        
    console.log('Go to school', i)
}
console.log('End')


// For In loop
var session = {
    type: 'Virtual',
    timing: '7:15PM',
    topicsCompleted: ["HTML", "CSS"],
    currentTopic: "JavaScript",
    startedOn: 'March 2022',
    targetEndDate: '15th October'
};

var mandatoryProperties = ['type', 'timing', 'startedOn', 'targetEndDate'];
var counter = 0;

for(key in session) {
    if(mandatoryProperties.includes(key))
        counter++;   
    
    console.log(key, session[key]);
}

if(mandatoryProperties.length !== counter)
    console.log('Some mandatory properties are missing')
else 
    console.log('All the mandatory properties exists on the object')


// Iterating array elements using for in loop
var mandatoryProperties = ['type', 'timing', 'startedOn', 'targetEndDate'];
for(element in mandatoryProperties){
    console.log(element, mandatoryProperties[element])
}

for(element of mandatoryProperties){
    console.log(element)
}
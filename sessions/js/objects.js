const human = {
    name: "Khadar",
    height: 5.5,
    weight: 65,
    color: "brown",
    age: 30,
    walk: function(){
        console.log(this.eat('Pizza'));
        console.log(this.eat('Burger'));
        console.log(this.eat('Curd rice'));
        return this.name + ' is walking...';
    },
    sleep: function(){

    },
    eat: function(food){
        return this.name + ' is eating ' +  food;
    }
    // ...apply.
};

console.log(human.age)
console.log(human["name"])
console.log(human.weight)
console.log(human.walk())


// human = {
//     name: "Arshad",
//     weight: 70
// }

var car;

car = {
    color: "grey",
    wheels: 4,
    // ...
}

const publicTransport = new bus();
publicTransport.size = 30;
publicTransport.startingPoint = 'Rayachoti';
publicTransport.endingPoint = 'Kadapa';


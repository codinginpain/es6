//classes

//past es5
// function Animal() {
//     this.type = 'chosic';
//     this.tail = false;
// }

// Animal.prototype.setType = function(type) {
//     this.type = type;
// }

// Animal.prototype.getType = function() {
//     return this.type;
// }


//es6
class Animal {
    constructor(type, tail) {
        this.type = type;
        this.tail = tail;
    }
    
    // method
    cry(value = 'Woof Woof') {
        console.log(value)
    }

    // static method
    static instance() {
        console.log('instance!!!');
    }
}

let dog = new Animal('dog', true);
dog.tail = false;
console.log(dog);
dog.cry('woof');

Animal.instance();


// inheritance
class Cat extends Animal {
    constructor(type, tail, color) {
        super(type, tail);
        this.color = color;
    }
    cry(value = 'Meow Meow') {
        console.log(value)
    }
}

let cat = new Cat('cat', true, 'black');
cat.cry();
console.log(cat);







import $ from 'jquery';

export class Person {
    constructor(name){
        this.name = name;
    }
    speak(text){
        return `${this.name} Says: ${text}`;
    }
}

export class SuperPerson extends Person {
    constructor(name, superPower){
        super(name);
        this.superPower = superPower;
    }
    speak(text){
        //have to use super.speak because you are calling the method from the parent class
        $('body').append(`<h1>${super.speak(text)}</h1>`);
    }

    saySuperPower(){
        this.speak(`My super power is ${this.superPower}`)
    }
}


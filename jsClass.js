// Js classes are template for js objects.

class Instrctor{
    name;
    designation= 'Web Development Course'
    team = 'web course'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Start support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Please create quiz for ${module}`);
    }
}

const mohon = new Instrctor('Mohon', 'Dhaka');
console.log(mohon);
mohon.startSupportSession('9.00');
mohon.createQuiz(35);

const milon = new Instrctor('Milon', 'Jessore');
console.log(milon);
milon.startSupportSession('10.00');
milon.createQuiz(90);
// Common things that has been ectended.
// Super is used for inderitance.

class TeamMembers{
    name;
    location;
    constructor(name, location,){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`);
    }
}

class Instrctor extends TeamMembers{
    designation= 'Web Development Course'
    team = 'web course'
    constructor(name, location){
        super(name, location)
    }
    developFeatures(feature){
        console.log(`Please create a new ${feature}`);
    }
    relese(version){
        console.log(`Please relese the version ${version}`);
    }
}


class jobPlacement extends TeamMembers{
    designation= 'Job placements commandos'
    team = 'Job placements'
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    provideResume(feature){
        console.log(`Please create a new ${feature}`);
    }
    prepareStudent(version){
        console.log(`Please relese the version ${version}`);
    }
}


class developers extends TeamMembers{
    designation= 'Developers commandos'
    team = 'Developers Team'
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    provideResume(feature){
        console.log(`Please create a new ${feature}`);
    }
    prepareStudent(version){
        console.log(`Please relese the version ${version}`);
    }
}

const mohon = new developers("Mohon Saha", "Dhaka", "React");
console.log(mohon);
mohon.provideFeedback();

const shanto = new jobPlacement("Shanto", "Kolkata", "India");
console.log(shanto);
shanto.provideFeedback();









// Common things make new class:

/*
//

class teamMembers{
    name;
    location;
    constructor(name, location,){
        this.name = name;
        this.location = location;
    }

    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`);
    }
}

class Instrctor{
    name;
    designation= 'Web Development Course'
    team = 'web course'
    location;
    constructor(name, location, tech){
        this.name = name;
        this.location = location;
        this.tech = tech;
    }
    developFeatures(feature){
        console.log(`Please create a new ${feature}`);
    }
    relese(version){
        console.log(`Please relese the version ${version}`);
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`);
    }
}


class jobPlacement{
    name;
    designation= 'Job placements commandos'
    team = 'Job placements'
    location;
    constructor(name, location, tech){
        this.name = name;
        this.location = location;
        this.tech = tech;
    }
    provideResume(feature){
        console.log(`Please create a new ${feature}`);
    }
    prepareStudent(version){
        console.log(`Please relese the version ${version}`);
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`);
    }
}

*/
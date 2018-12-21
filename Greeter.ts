class User {
    firstName: string;
    lastName: string;
    city: string;

    constructor(firstName: string, lastName: string, city: string) {
        this.firstName = firstName;
        this.lastName= lastName;
        this.city=city;
    }

    tostring() {
        return this.firstName + " " + this.lastName + " from " + this.city;
    }
}

function greeter(person: User) {
    return "Hello, " + person.tostring();
}

let user = new User("Joe", "Smith", "Blois");

console.log(greeter(user));
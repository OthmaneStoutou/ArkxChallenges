const Person = {
    firstName: "othmane",
    lastName: "stoutou",
    age: 21,
    fullName: function() {
       return `<${this.firstName}> <${this.lastName}>`;
    },
    set: function(NewFirstName, NewLastName) {
       this.firstName = NewFirstName;
       this.lastName = NewLastName;
    }
 };
 
 console.log(Person.fullName());
 Person.set("taha", "stoutou");
 console.log(Person.lastName, Person.firstName);
 console.log(Person.fullName());
 
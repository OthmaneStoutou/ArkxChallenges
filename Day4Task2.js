

    //task 2 : Are you older Than me ?

class Person{
    // Question : comment le proteger les proprties ?
    constructor(name="",age=0){
        this.name = name ;
        this.age = age ;

    }

    compareAge(p){
        if(this.age > p.age ){
            return `"${p.name} " is younger than me" `
        }else if(this.age < p.age){
            return `"${p.name} is older than me "`

        }
        else{
            return `"${p.name} is the same age as me "`
        }
    }

}
p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)

console.log(p1.compareAge(p2))
console.log(p2.compareAge(p1))
console.log(p1.compareAge(p3))
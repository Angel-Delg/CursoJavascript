//Clases en javascript

//Create Class
class Person {
    constructor(Name, Surname, Age){
        this.Name = Name
        this.Surname = Surname
        this.Age = Age
    }
    //Methods Class
    Gretting (){
        return console.log(`Hello, My name is ${this.Name} ${this.Surname} and I'm ${this.Age} years old`)
    }
}
//Creamos un nuevo usuario usando la clase 
const User = new Person('@name','@surname',0)
User.Gretting()

//Herencia de Clases del la clase padre
class Son extends Person {
    constructor(Name,Surname,Age,Email){
        super(Name,Surname,Age,Email)      
        this.Email = Email
    }
    //Hereda por defecto los metodos de la clases padres
}

const NewSon = new Son('@name','@surname',0,'email@emal.com')
NewSon.Gretting()


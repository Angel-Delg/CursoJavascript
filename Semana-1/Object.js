// Mala practica al declarar un Objeto
const Example = new Object() // ❌ Mala paractica

//Buenas Practicas al declarar Objetos
const Example2 = {} // ✔ Forma correcta de declarar Objeto

//Objeto literal

const Name = '@Name'
const Surname = '@Surname'
const Age = 0

const Credentials = {
    Name,
    Surname,
    Age,

    //Metodos de Objetos
    Grettin: function(){
        return console.log(`Hello my name is ${Name} ${Surname}, I'm ${Age} years old`)
    }
}
//Metodos de Objetos
Credentials.Grettin()

Object.keys(Credentials) // devuelve un array => [Name, Surname, Age, f()]
Object.values(Credentials) // devuelve un array => ["@Name","@Surname",0, f()]

//Add more Object.prototype here :)
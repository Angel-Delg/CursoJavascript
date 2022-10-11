 // Aprendiendo Objeto proxies, intermediario de un objeto
const Person = {
    Name: "",
    Surname: "",
    Age: 0
}

const ExpresionRegularValidateString = /\d/

// Validate with Function
const validateString = (Obj, Prop, Value) => {
    if(Object.keys(Obj).indexOf(Prop) === -1) {
        console.error(`The Prop ${Prop} is not Validate!!`)
        return false
    }
    if((Prop === 'Name' || Prop === 'Surname') && ExpresionRegularValidateString.test(Value)){
        console.error(`The prop ${Prop} can't include number`)
        return false 
    }

    return true
}

//Intermediarion de objeto => Person 
const HandlePerson = {
    set(Obj, Prop, Value){

        if(validateString(Obj,Prop, Value)){
            Obj[Prop] = Value
        }
    },

    get(Obj, Prop){
        if(Prop === 'Age') return Number(Obj[Prop] = Number(Value))
    }

}
// Creandon la instancia de person
const ProxiesPerson = new Proxy(Person,HandlePerson)

// Rellando Campos con valores incorrectos
ProxiesPerson.Email = "lariosangel062@gmail.com"
ProxiesPerson.Name = "Angel062"
ProxiesPerson.Surname = "97990000"
ProxiesPerson.Age = "78"


// Datos correctos
ProxiesPerson.Name = 'Angel'
ProxiesPerson.Surname = 'Lopez'
console.log(ProxiesPerson)
console.log(Person)


//Valida tu proxie aqui :) y se un desarrollador
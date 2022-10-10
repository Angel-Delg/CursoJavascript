// Aqui aprenderas a definir variables

/* 
    Usa (let) para definir variable 

    let NombreVariable = valor
*/

let Nombre = "Carlos" // => aqui he definido una variable Nombre que tiene almacenado un nombre
let Apellido = "Aguirrez" // => aqui he definido una variable Apellido que tiene almacenado un apellido

// Nota: Puede guiarte de " typeof(NombreVariable) " para saber que tipo de dato es la variable

//Usa console.log(NombreVariable) para imprimir por consola el valor de la variable

console.log(Nombre)
console.log(Apellido)


// Como puedes reconocer los tipos de datos aqui abajo te lo dejo

/*
    '' => string
    "" => string
    0 => number
    [] => Object
    `` => string
    true => boolean
    false => boolean
    {} => Object
    "0" => string
*/

// Metodos de string

const Example = "this is text"

// string.prototype.replace()

// El metodo replace devuelve una nueva cadena con algunas o todas las coincidencia de un patron, siendo
// cada una de estas coincidencias remplazadas

const copy = Example.replace("text", "monkey") // devuelve "this is monkey" 
console.log(copy)

// El metodo split() 
// divide un objeto de tipo string en un array de cadenas mediante el separador de la cadena en subcadenas

const copy2 = Example.split(' ') // devuelve ['this','is','example'] 
console.log(copy2)

//El metodo slice()
// Extrae una seccion de una cadena y devuelve una cadena nueva

const copy3 = Example.slice(0, 5) // devuelve "this "
console.log(copy3)
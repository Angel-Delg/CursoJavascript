function Saludo(Callback){
    let Nombre = '@personas', Apellido = '@Apellido'
    return Callback(Nombre, Apellido)
}

function Callback(Name,Surname){
    return `Welcome ${Name} ${Surname}`
}


//Ingresa aqui tus callbacks de practica :)

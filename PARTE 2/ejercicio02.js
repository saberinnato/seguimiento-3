let x = true, y = false, z = true

z = false

let res =((z||x)&&(y||z))

let res2 = (res)? "Hola": "Humboldt"

console.log(res2)

//Resultado de la consola: "Humboldt"
let a = false;
let b = true;

b = (a && b); //Se utiliza el operador logico para que (a = false, b = false)

let x = b ? console.log(2) : console.log(a)  //al ser b false, muestra "false" (el valor de a)
//haremos un alias que represente un number y un string
type SumaParameter = string | number;
type SumaReturnType = string | number;

//nuestro parametro podria ser un numero o un string
function Suma(num1: SumaParameter, num2: SumaParameter): SumaReturnType {
    //debemos transformar nuestros valores a number
    //return Number(num1) + Number(num2);
    
    //Javascript convierte el segundo numero a string porque detecta el primero lo es
    return String(num1) + num2;
}

//Union types tambien pueden hacerse con interfaces o clases
interface Interface1 {
    prop1: number;
}
interface Interface2 {
    prop2: number;
}

type InterfaceMix = Interface1 | Interface2;

//creamos un objeto de tipo interfacemix
const InterfaceMix: InterfaceMix = {
    prop1: 2,
    prop2: 2,
}
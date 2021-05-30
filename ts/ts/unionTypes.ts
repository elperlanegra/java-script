type sumaparameter = string | number
type sumaReturnType = string | number

function Sum(num1: sumaparameter, num2: sumaparameter ): sumaReturnType {
    return String(num1) + num2
}


interface Interface1 {
    prop1: number
}

interface Interface2 {
    prop2: number
}

type InterfacMix = Interface1 | Interface2;

//creamos un objeto de tipo interfacemix
const InterfacMix: InterfacMix = {
    prop1: 2,
    prop2: 2,
}
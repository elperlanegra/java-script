//Intersection types y su diferencia de Union types

interface Interface1 {
    prop1: number;
}

interface Interface2 {
    prop2: number;
    prop3: number;
}

interface Interface3 {
    prop2: number;
}

type InterfaceMixes = Interface1 & Interface2 & Interface3;
const interfacemix: InterfaceMix = {
    prop1: 2,
    prop2: 3,
    prop3: 3
}

// La principal diferente entre la union y la intersección es que la unión es un valor "o" el otro, en cambio
// la intersección nos indica que un valor no puede estar indistinto del otro.
// Se puede utilizar en cualquier cantidad de interfaces, agregando si se desea una Interface3 para ver que si
// procede el código.
// Lo importante es que TypeScript nos indica cuando se da éste tipo de error, y así poder corregirlo y llevar
// una mejor gestión del código.
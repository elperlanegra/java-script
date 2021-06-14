//Pedir al usuario que ingrese los datos
let maximo = parseInt(prompt('Ingrese el número máximo'));
let multiploUno = parseInt(prompt('Primer múltiplo'));
let multiploDos = parseInt(prompt('Multiplo dos'));
let contador = 1;  //el problema indica que es con números naturales, por tanto inicia en uno.
let sumaTotal = 0;  //aqui se guarda el valor de la suma de los múltiplos.


//esMultiplo: retorna true si un número es múltiplo de otro.
let esMultiplo = function (numero, multiplo) {
    if (numero % multiplo === 0) {
        return true;
    } else {
        return false;
    }
}

//Función recursiva que se repite tantas veces como indique la variable maximo
let solver = function (contador) {
    if (contador > maximo) {
        return sumaTotal;
    } else {
        if (esMultiplo(contador, multiploUno) || esMultiplo(contador, multiploDos)) {
            sumaTotal += contador;
        }
        return solver(++contador);
    }
}

alert(solver(contador));
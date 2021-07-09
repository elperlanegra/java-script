console.log('POO con JavaScript');

let futbol = ['Barca', 'Madrid', 'Bayer', 'PSG'];

// console.log(futbol)

futbol.push = ['Real Esteli', 'Unan Managua', 'Gualter Ferreti'];

// console.log(futbol)

futbol.forEach((element, indice, arr) => {
  console.log(element, indice, arr);
});

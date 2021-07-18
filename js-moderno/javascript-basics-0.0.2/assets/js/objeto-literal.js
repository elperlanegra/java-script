let personaje = {
  nombre: 'Tony Stark',
  codeName: 'Iroman',
  vivo: false,
  edad: 40,
  cords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ['Mark I', 'Mark IV', 'HulkBuster'],
  dirección: {
    zip: '10880, 90265',
    ubicación: 'Malibu, California',
  },
};

console.log(personaje);
console.log('Nombre', personaje.nombre);

console.log('Nombre', personaje['nombre']);

// Las cordenadas
console.log('Cors', personaje.cords);
// Latitud
console.log('Lat', personaje.cords.lat);

// Tarea - Contar la cantidad de trajes de Iroman
console.log('No, Trajes de Iroman', personaje.trajes.length);

// Con este podemos ver el ultimo traje de iroman
console.log('No, Trajes de Iroman', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

// Más detalles

delete personaje.edad;

console.log(personaje);

const entriesPares = Object.entries( personaje )
console.log( entriesPares )


// Esto hace que nuestro objeto se congele y no puedan modificar los datos
Object.freeze ( personaje )

personaje.dinero = 123333
personaje.edad = 10

console.log(personaje)


const propiedades = Object.getOwnPropertyNames( personaje )
const valores     = Object.values( personaje )

console.log(propiedades, valores)
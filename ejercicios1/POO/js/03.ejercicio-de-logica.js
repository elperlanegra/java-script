/*=============================================
CASO 1. LOS CUATRO ATLETAS. 

De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente detrás de B, y D ha llegado en medio de A y C. ¿Podría usted calcular el orden de llegada?

B -> 1
C -> 2
D -> 3
A -> 4
=============================================*/

var a = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  resultado: function () {
    if (a.C > a.B && a.D > a.B && a.D > a.C && a.D < a.A) {
      return true;
    }

    return false;
  },
  intervalo: setInterval(function () {
    a.A = Math.ceil(Math.random() * 4);
    a.B = Math.ceil(Math.random() * 4);
    a.C = Math.ceil(Math.random() * 4);
    a.D = Math.ceil(Math.random() * 4);

    if (a.resultado()) {
      clearInterval(a.intervalo);
      console.log('atleta A', a.A);
      console.log('atleta B', a.B);
      console.log('atleta C', a.C);
      console.log('atleta D', a.D);
    }
  }, 10),
};

/*=============================================
CASO 2. CABALLOS. 

El caballo de Mac es más oscuro que el de Smith, pero más rápido y más viejo que el de Jack, que es aún más lento que el de Willy, que es más joven que el de Mac, que es más viejo que el de Smith, que es más claro que el de Willy, aunque el de Jack es más lento y más oscuro que el de Smith. ¿Cuál es el más viejo, cuál el más lento y cuál el más claro?

Mac | edad: viejo (2) | velocidad: rapido (2) | tono: oscuro (2)
Smith | edad: joven (1) | velocidad: rapido (2) | tono: claro (1)
Jack | edad: joven (1) | velocidad: lento (1) | tono: oscuro (2)
Willy | edad: joven (1) | velocidad: rapido (2) | tono: oscuro (2)

=============================================*/

var b = {
  Mac: { edad: 0, velocidad: 0, tono: 0 },
  Smith: { edad: 0, velocidad: 0, tono: 0 },
  Jack: { edad: 0, velocidad: 0, tono: 0 },
  Willy: { edad: 0, velocidad: 0, tono: 0 },
  resultado: function () {
    if (
      b.Mac.tono > b.Smith.tono &&
      b.Mac.velocidad > b.Jack.velocidad &&
      b.Mac.edad > b.Jack.edad &&
      b.Willy.velocidad > b.Jack.velocidad &&
      b.Mac.edad > b.Willy.edad &&
      b.Mac.edad > b.Smith.edad &&
      b.Willy.tono > b.Smith.tono &&
      b.Smith.velocidad > b.Jack.velocidad &&
      b.Jack.tono > b.Smith.tono
    ) {
      return true;
    }

    return false;
  },
  intervalo: setInterval(function () {
    b.Mac.edad = Math.ceil(Math.random() * 2);
    b.Mac.velocidad = Math.ceil(Math.random() * 2);
    b.Mac.tono = Math.ceil(Math.random() * 2);

    b.Smith.edad = Math.ceil(Math.random() * 2);
    b.Smith.velocidad = Math.ceil(Math.random() * 2);
    b.Smith.tono = Math.ceil(Math.random() * 2);

    b.Jack.edad = Math.ceil(Math.random() * 2);
    b.Jack.velocidad = Math.ceil(Math.random() * 2);
    b.Jack.tono = Math.ceil(Math.random() * 2);

    b.Willy.edad = Math.ceil(Math.random() * 2);
    b.Willy.velocidad = Math.ceil(Math.random() * 2);
    b.Willy.tono = Math.ceil(Math.random() * 2);

    if (b.resultado()) {
      clearInterval(b.intervalo);
      console.log('Caballo de Mac', b.Mac);
      console.log('Caballo de Smith', b.Smith);
      console.log('Caballo de Jack', b.Jack);
      console.log('Caballo de Willy', b.Willy);
    }
  }, 1),
};

/*=============================================
CASO 3. LOS CUATRO PERROS.

Tenemos cuatro perros: un galgo, un dogo, un alano y un podenco. Éste último come más que el galgo; el alano come más que el galgo y menos que el dogo, pero éste come más que el podenco. ¿Cuál de los cuatro perros come menos?.
=============================================*/

/*=============================================
CASO 4. SEIS AMIGOS DE VACACIONES.

Seis amigos desean pasar sus vacaciones juntos y deciden, cada dos, utilizar diferentes medios de transporte; sabemos que Alejandro no utiliza el coche ya que éste acompaña a Benito que no va en avión. Andrés viaja en avión. Si Carlos no va acompañado de Darío ni hace uso del avión, podría Vd. decirnos en qué medio de transporte llega a su destino Tomás.
=============================================*/

/*=============================================
CASO 5. SILENCIO.

Si Ángela habla más bajo que Rosa y Celia habla más alto que Rosa, ¿habla Ángela más alto o más bajo que Celia?
=============================================*/

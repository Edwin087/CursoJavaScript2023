class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get TipoEntrada() {
    return this._tipoEntrada;
  }
  set TipoEntrada(tipo) {
    this._tipoEntrada = tipo;
  }

  get Marca() {
    return this._marca;
  }
  set Marca(marca) {
    this._marca = marca;
  }
}
//objeto o instanciade dispositivoEntrada

// let dispositivoEntrada1 = new DispositivoEntrada(1, "hp");
// let dispositivoEntrada2 = new DispositivoEntrada(2, "hp");
// console.log(dispositivoEntrada1);
// console.log(dispositivoEntrada2);
//.......................................................

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get IdRaton() {
    return this._idRaton;
  }
  toString() {
    return `Raton:[idRaton: ${this._idRaton},  tipoEntrada: ${this._tipoEntrada}, tipoMarca ${this._marca}]`;
  }
}
//objeto o instancia de raton
let raton1 = new Raton("toshiba", "Conector USB");
console.log(raton1.toString());
let raton2 = new Raton("Dell", "Conector DVI");
console.log(raton2.toString());
//.....................................................
class Teclado extends DispositivoEntrada {
  static contadorTeclado = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclado;
  }

  get IdTeclado() {
    return this._idTeclado;
  }
  toString() {
    return `Teclado [idTeclado:  ${this._idTeclado}, marca: ${this._marca}, tipoEntrada: ${this._tipoEntrada}]`;
  }
}

//objeto o instancia de teclado

let teclado1 = new Teclado("msi", "Apple");
console.log(teclado1.toString());
let teclado2 = new Teclado("USB", "Acer");
console.log(teclado2.toString());

//...................................................
class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamaño) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamaño = tamaño;
  }
  get idMonitor() {
    return this._idMonitor;
  }
  get Marcaa() {
    return this._marca;
  }
  set Marcaa(marc) {
    this._marca = marc;
  }

  get Tamaño() {
    return this._tamaño;
  }
  set Tamaño(tama) {
    this._tamaño = tama;
  }

  toString() {
    return `Monitor:[idMonitor:${this._idMonitor}, Marca: ${this._marca}, Tamaño:  ${this._tamaño}]`;
  }
}

//objeto o instancia de monitor

let monitor1 = new Monitor("Lenovo", 15);
console.log(monitor1.toString());
let monitor2 = new Monitor("Dell", 27);
console.log(monitor2.toString());
//......................................................
class Computadora {
  static contadorComputadoras = 0;
  constructor(nombre, Monitor, Raton, Teclado) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = Monitor;
    this._raton = Raton;
    this._teclado = Teclado;
  }
  get idComputadoras() {
    return this._idComputadora;
  }
  get Nombre() {
    return this._Nombre;
  }
  set Nombre(nomb) {
    this._Nombre = nomb;
  }

  toString() {
    return `Computadora [IdComputadora:  ${this._idComputadora},  Nombre: ${this._nombre} \n ${this._monitor} \n  ${this._raton} \n  ${this._teclado} ]`;
  }
}
//objeto o instancia de Computadora utilizando relación agregación de los objetos u instancias
let computadora1 = new Computadora("hp", monitor1, raton1, teclado1);
let computadora2 = new Computadora("Armada", monitor2, raton2, teclado2);
//forma 1 de las llamanda
//console.log(computadora1.toString());
// forma 2 de las llamadas
console.log(`${computadora1}`);
console.log(`${computadora2}`);

//......................................................
class Orden {
  static contadorOrdenes = 0;
  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }

  get IdOrden() {
    return this._idOrden;
  }
  //relacion class Orden con class Computadora
  agregarComputadoras(computadoraa) {
    this._computadoras.push(computadoraa);
  }

  mostrarOrden() {
    let computadorasOrden = "";
    for (let computadoraaa of this._computadoras) {
      computadorasOrden += `\n ${computadoraaa}`; //computadorasOrden = computadorasOrden + computadoraaa.toString();
    }
    console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
  }
}

//objeto o instancia de Orden
let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarComputadoras(computadora1);
orden1.agregarComputadoras(computadora2);
orden2.agregarComputadoras(computadora1);
orden2.agregarComputadoras(computadora2);

orden1.mostrarOrden();
orden2.mostrarOrden();

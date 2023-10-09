class Ingreso extends Dato {
  static contadorIngresos = 0;
  constructor(descripcion, valor) {
    super(descripcion, valor);
    this._Id = ++Ingreso.contadorIngresos;
  }
  get idd() {
    return this._Id;
  }
}

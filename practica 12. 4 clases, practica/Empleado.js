

class Empleado extends Persona{
    static contadorEmpleados =0;
    
constructor( nombre, apellido, edad, sueldo){
    super(nombre, apellido, edad)
    this._idEmpleado =++Empleado.contadorEmpleados;
    this._sueldo=sueldo;
}

// get IdEmpleadoo
get IdEmpleadoo(){
    return this._idEmpleado;
}


// get y set Sueldo
get Sueldo (){
    return this._sueldo
}
set Sueldo (suel){
this._sueldo =suel;
}

 toString(){

    return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
   
 }

}

let empleado1 = new Empleado("Edwin", "Calle", 29, 1300);
console.log(empleado1.toString());
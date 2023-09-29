class Producto {
static contadorProductos=0
constructor(nombre, precio){
this._idproducto = ++Producto.contadorProductos;
this._nombre=nombre;
this._precio =precio;

}
get IdProducto (){
    return this._idproducto;
}

get Nombre(){
    return this._nombre;
}
set Nombre(nom){
    this._nombre=nom;
}

get Precio(){
    return this._precio;
}
set Precio(pre){
    this._precio=pre;
}
toString(){
    return `idProducto: ${this._idproducto}, Nombre: ${this._nombre}, precio: $ ${this._precio}`;
}

}




class Orden{

    static contadorOrdenes =0;
    
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        //relación de agregación 
        this._id_orden =++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }
    
    get IdOrden(){
        return this._id_orden;
    }
    
    agregarProducto(producto){
    if(this._productos.length< Orden.MAX_PRODUCTOS){
        this._productos.push(producto);// forma 1
    // this._productos[this._contadorProductosAgregados++]=producto;     //forma 2
    }else{
        console.log("Limite superado");
    }
    
    }
    calcularTotal(){
       let totalVenta =0; 
       for(let producto of this._productos){
    totalVenta += producto.Precio;// totalVenta=  totalVenta + producto.precio
       }
       return totalVenta;
    
    }
    mostrarOrden(){
    let productosOrden = "";
    for(let producto of this._productos){
    productosOrden +="\n" +  producto.toString() + " ";
    }
    console.log(`Orden: ${this._id_orden}, total: $${this.calcularTotal()}, productos: ${productosOrden}`);
    
    }
    
    
    }

let producto1 = new Producto("Pantalon", 200);
let producto2 = new Producto("Camiceta", 100);
let producto3 = new Producto("cinturon", 50);


let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();
let orden2 = new Orden();
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();


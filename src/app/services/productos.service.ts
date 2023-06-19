import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any[];

  constructor() {

    this.productos = [
      { ID: 1, nombre: 'Camiseta', talla: 'S' },
      { ID: 2, nombre: 'Pantalón', talla: 'M' },
      { ID: 3, nombre: 'Vestido', talla: 'L' },
      { ID: 4, nombre: 'Chaqueta', talla: 'XL' },
      { ID: 5, nombre: 'Falda', talla: 'S' },
      { ID: 6, nombre: 'Calcetines', talla: 'M' },
      { ID: 7, nombre: 'Blusa', talla: 'L' },
      { ID: 8, nombre: 'Shorts', talla: 'XL' },
      { ID: 9, nombre: 'Jersey', talla: 'S' },
      { ID: 10, nombre: 'Chaleco', talla: 'M' }
    ];

  }
}

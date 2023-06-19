import { Component } from '@angular/core';
import { Producto } from 'src/app/interface/carrito.interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  arrProductos: Producto[]

  constructor() {
    this.arrProductos = [
      {
        nombre: "Producto 1",
        precio: 10.99,
        descripcion: "Descripción del producto 1",
        departamento: "Departamento 1"
      },
      {
        nombre: "Producto 2",
        precio: 24.99,
        descripcion: "Descripción del producto 2",
        departamento: "Departamento 2"
      },
      {
        nombre: "Producto 3",
        precio: 5.99,
        descripcion: "Descripción del producto 3",
        departamento: "Departamento 1"
      },
      {
        nombre: "Producto 4",
        precio: 19.99,
        descripcion: "Descripción del producto 4",
        departamento: "Departamento 2"
      },
      {
        nombre: "Producto 5",
        precio: 8.99,
        descripcion: "Descripción del producto 5",
        departamento: "Departamento 1"
      },
      {
        nombre: "Producto 6",
        precio: 14.99,
        descripcion: "Descripción del producto 6",
        departamento: "Departamento 2"
      },
      {
        nombre: "Producto 7",
        precio: 9.99,
        descripcion: "Descripción del producto 7",
        departamento: "Departamento 1"
      },
      {
        nombre: "Producto 8",
        precio: 29.99,
        descripcion: "Descripción del producto 8",
        departamento: "Departamento 2"
      },
      {
        nombre: "Producto 9",
        precio: 12.99,
        descripcion: "Descripción del producto 9",
        departamento: "Departamento 1"
      },
      {
        nombre: "Producto 10",
        precio: 17.99,
        descripcion: "Descripción del producto 10",
        departamento: "Departamento 2"
      }
    ];
  }

}

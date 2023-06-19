import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  arrProductos: any[]


  constructor() {
    this.arrProductos = [
      {
        titulo: '',
        imagen: '',
        descripcion: '',
        precio: ''
      }
    ]
  }
}

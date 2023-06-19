import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';

const routes: Routes = [
  { path: 'productos/new', component: FormularioProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

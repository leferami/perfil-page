import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPerfilComponent } from './perfil-page/editar-perfil/editar-perfil.component'
import { PerfilPageComponent } from './perfil-page/perfil-page.component'
const routes: Routes = [
  {
    path: 'editar-perfil',
    component: EditarPerfilComponent
  },
  {
      path: 'ver-perfil',
      component: PerfilPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
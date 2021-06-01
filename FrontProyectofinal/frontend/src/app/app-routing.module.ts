import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from '../app/components/login/login.component';
import { RegistroComponent} from '../app/components/registro/registro.component';
import {AsociacionComponent} from '../app/components/asociacion/asociacion.component';
import {UsuarioComponent} from '../app/components/usuario/usuario.component';
import { HistorialComponent} from '../app/components/historial/historial.component';
import {HistorialusComponent} from '../app/components/historialus/historialus.component';
import {RegistroasocComponent} from '../app/components/registroasoc/registroasoc.component';
import {AuthGuard} from './components/guards/guards.component';
import {DonacionComponent} from '../app/components/donacion/donacion.component';
import { NuevousComponent} from '../app/components/nuevous/nuevous.component';
import {PerfilusComponent} from '../app/components/perfilus/perfilus.component';

import { from } from 'rxjs';
const routes: Routes = [

  { path: 'asociacion', component: AsociacionComponent, canActivate:[AuthGuard]},
  { path: 'donacion', component: DonacionComponent, canActivate:[AuthGuard]},
  { path: 'registroasoc', component: RegistroasocComponent, canActivate:[AuthGuard]},
  { path: 'registro', component: RegistroComponent,canActivate:[AuthGuard]},
  { path: 'usuario', component: UsuarioComponent,canActivate:[AuthGuard]},
  { path: 'historial', component: HistorialComponent,canActivate:[AuthGuard]},
  { path: 'historialus', component: HistorialusComponent,canActivate:[AuthGuard]},
  {path: 'nuevous', component: NuevousComponent,canActivate:[AuthGuard]},
  {path: 'perfilus', component: PerfilusComponent,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

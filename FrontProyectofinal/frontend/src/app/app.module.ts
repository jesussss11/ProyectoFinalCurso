import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { ComponentsComponent } from './components/components.component';
import { AsociacionComponent } from './components/asociacion/asociacion.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HistorialComponent } from './components/historial/historial.component';
import { RegistroasocComponent } from './components/registroasoc/registroasoc.component';
import {ServicesService} from '../app/services/services.service';
import { HistorialusComponent } from './components/historialus/historialus.component';
import { DonacionComponent } from './components/donacion/donacion.component';
import { FilterPipe } from './components/pipes/filter.pipe';
import { PipasPipe } from './components/pipas.pipe';
import { DatePipe } from '@angular/common';
import { PipeasocPipe } from './components/pipes/pipeasoc.pipe';
import { NuevousComponent } from './components/nuevous/nuevous.component';
import { PipehistorialPipe } from './components/pipes/pipehistorial.pipe';
import { PerfilusComponent } from './components/perfilus/perfilus.component';
import { PiperfilPipe } from './components/pipes/piperfil.pipe';
import { PiprefPipe } from './components/pipes/pipref.pipe';



@NgModule({
  declarations: [
    AppComponent,
    
    ComponentsComponent,
    AsociacionComponent,
    UsuarioComponent,
    LoginComponent,
    RegistroComponent,
    HistorialComponent,
    RegistroasocComponent,
    HistorialusComponent,
    DonacionComponent,
    FilterPipe,
    PipasPipe,
    PipeasocPipe,
    NuevousComponent,
    PipehistorialPipe,
    PerfilusComponent,
    PiperfilPipe,
    PiprefPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServicesService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

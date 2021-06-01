import { Component, Inject, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Peticionmodel} from '../../models/Peticion';
import {ServicesService} from '../../services/services.service';
import {UserModel} from '../../models/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  usuario: UserModel = new UserModel();
  peticiones: Peticionmodel[] = [];
  cargando = false;
  

  constructor( private ServicesServices: ServicesService ) { }

  filterHistorial='';

  ngOnInit(): void {
    this.cargando = true;
    this.ServicesServices.getpeticiones()
    
      .subscribe( resp => {
        this.peticiones = resp;
        this.cargando = false;
      });
      this.usuario.id=localStorage.getItem('id');
  }

}

import { Component, OnInit } from '@angular/core';
import { ServicesService} from '../../services/services.service';
import { Peticionmodel} from '../../models/Peticion';
import { UserModel } from 'src/app/models/User';
@Component({
  selector: 'app-historialus',
  templateUrl: './historialus.component.html',
  styleUrls: ['./historialus.component.scss']
})
export class HistorialusComponent implements OnInit {
  usuario: UserModel = new UserModel();
  peticiones: Peticionmodel[] = [];
  cargando = false;

  constructor( private ServicesServices: ServicesService ) { }
  
  filterhistorialus='';

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

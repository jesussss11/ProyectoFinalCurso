import { Component, OnInit } from '@angular/core';
import { Peticionmodel} from '../../models/Peticion';
import { ServicesService  } from '../../services/services.service';
import {UserModel} from '../../models/User';

@Component({
  selector: 'app-asociacion',
  templateUrl: './asociacion.component.html',
  styleUrls: ['./asociacion.component.scss']
})
export class AsociacionComponent implements OnInit {

  peticiones: Peticionmodel[] = [];
  cargando = false;
  

  constructor( private ServicesServices: ServicesService ) { }

  filterasoc='';
  filterhistorial='';
  
  ngOnInit(): void {
    this.cargando = true;
    this.ServicesServices.getpeticiones()
    
      .subscribe( resp => {
        this.peticiones = resp;
        this.cargando = false;
      });
  }


  aceptarDonacion(peticion : Peticionmodel, i:number){

    var id_peticion =peticion.id;
    var peticionacep;


    console.log(peticion);

  this.ServicesServices.getpeticion( peticion.id ).subscribe(( resp => {
        peticionacep= resp;
        console.log(peticionacep)
        peticionacep.estado="aceptada";

        this.ServicesServices.actualizarpeticion(peticionacep).subscribe();
      }))

      
  }

}



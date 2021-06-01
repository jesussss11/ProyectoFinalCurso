import { Component, OnInit } from '@angular/core';
import { UserModel} from '../../models/User';
import {FormControl, FormGroupDirective,  Validators,FormGroup, FormBuilder} from '@angular/forms';
import { Peticionmodel } from 'src/app/models/Peticion';
import {ServicesService} from '../../services/services.service';
import {AuthService} from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.scss']
})
export class DonacionComponent implements OnInit {

  usuario: UserModel = new UserModel();
  peticion: Peticionmodel= new Peticionmodel();
  peticiones: Peticionmodel[] = [];

  constructor( private ServicesServices: ServicesService,
    private router: Router ) { }

  ngOnInit(): void {
  }
   

donar(){
  var id_asoc;
  var id_user;
  
  var nombre_asoc;
  var nombre_user;
 var usuarioasoc  = new UserModel(); 
  var usuarioin = new UserModel();

  id_asoc=localStorage.getItem('idasoc')
 id_user=localStorage.getItem('id')
 console.log(id_asoc)
 console.log(id_user)

 this.ServicesServices.getusuario( id_asoc ).subscribe(( resp => {
    usuarioasoc= resp;
  console.log(usuarioasoc)
}))


this.ServicesServices.getusuario( id_user ).subscribe(( resp => {
  usuarioin= resp;
  console.log(usuarioin)
}))

setTimeout(()=>{


console.log("hola")

this.peticion.id_asoc=usuarioasoc.id;
this.peticion.id_user=usuarioin.id;
this.peticion.nombre_asoc= usuarioasoc.nombre;
this.peticion.nombre_user= usuarioin.nombre;
//this.peticion.descripcion=descripcion;
this.peticion.estado="Pendiente"

 console.log("thispeticion",this.peticion)
this.ServicesServices.crearPeticion(this.peticion).subscribe();
this.router.navigateByUrl('/usuario');
},400)
}

}



function s(arg0: number, s: any) {
  throw new Error('Function not implemented.');
}


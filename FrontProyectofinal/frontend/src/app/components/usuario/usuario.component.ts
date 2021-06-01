import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import { UserModel} from '../../models/User';
import {AsociacionModel} from '../../models/Asociacion';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  Asociaciones: AsociacionModel[]=[];
  Usuarios: UserModel[] = [];
  cargando = false;
  usuarioasoc: UserModel = new UserModel();
  usuario: UserModel = new UserModel();
  

  constructor( private ServicesServices: ServicesService,private router: Router ) { }

  
  filter='';
  filterpref='';
  
  ngOnInit() {

    this.cargando = true;
    this.ServicesServices.getusuarios()
    
      .subscribe( resp => {
        this.Usuarios = resp;
        this.cargando = false;
      });
      
  }

  borrarAsociacion( usuario: UserModel, i: number ) {

    Swal.fire(
      '¿Está seguro?',
      `Está seguro que desea borrar a ${ usuario.nombre }`,
      'question',
    ).then( resp => {

      if ( resp.value ) {
        this.Usuarios.splice(i, 1);
        this.ServicesServices.borrarasociacion( usuario.id ).subscribe(( resp => {
          this.Usuarios = resp;
          this.cargando = false;
        }))
      }

    });



  }
  realizarDonacion(usuario :UserModel, i:number){

    var id_asoc;
    var id_user;
    var nombre_asoc;
    var nombre_user;


    console.log(usuario);

    this.router.navigateByUrl('/donacion');
    id_asoc=usuario.id;
    nombre_asoc=usuario.nombre;
    
        this.ServicesServices.getusuario( usuario.id ).subscribe(( resp => {
        this.usuarioasoc= resp;
        console.log(this.usuarioasoc.nombre)
      }))



      localStorage.setItem('idasoc',usuario.id);
    

    };
    }

    

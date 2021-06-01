import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { getMaxListeners } from 'process';
import { UserModel} from '../../models/User'
import {AsociacionModel} from '../../models/Asociacion';
import {FormControl, FormGroupDirective,  Validators,FormGroup, FormBuilder} from '@angular/forms';
import {ServicesService} from'../../services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  
  usuario: UserModel = new UserModel();
  myForm:FormGroup;
  recordarme = true;
  //usuariolog=JSON.parse(localStorage.getItem("currentUser"))

  
  constructor( private auth: AuthService,private service: ServicesService,
               private router: Router,public formBuilder: FormBuilder ) {  
                 }

  ngOnInit() {


    
    if ( localStorage.getItem('email') ) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
      
      }


  




  login( form: NgForm ) {

    if (  form.invalid ) { return; }

    Swal.fire(
       'info',
      'Espere por favor...'
    );
    Swal.showLoading();


    this.auth.login( this.usuario.email, this.usuario.password, this.usuario.rol )

      .subscribe( resp => {

        
        
          

        var datos;

        console.log(resp);
       
        this.usuario.id=resp.userId;
       

      this.service.getusuario( this.usuario.id )
      .subscribe( (resp: UserModel) => {
        this.usuario = resp;
        
      });
        
       console.log(this.usuario.preferencias);

        Swal.close();

        setTimeout(() => {
       
        if ( this.recordarme ) {
          localStorage.setItem('email', this.usuario.email);
          localStorage.setItem('id',this.usuario.id);
          //localStorage.setItem('rol',this.usuario.rol);

          if(this.usuario.rol=="asociacion"){

            this.router.navigateByUrl('/asociacion');
          }else{
            this.router.navigateByUrl('/usuario');
          }
  
        }


      },400);
        
        
        
      

        

    }, (err) => {

        console.log(err.error.error.message);
        Swal.fire('error',
          'Error al autenticar',

        );
      });
    }}
  


   
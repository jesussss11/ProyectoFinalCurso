import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel} from '../../models/User';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  
  usuario: UserModel =new UserModel();
  recordarme = false;

  constructor(private auth: AuthService,
    private router: Router) { }

    ngOnInit() {
      this.usuario = new UserModel();
    }


    onSubmit( form: NgForm ) {
      
      if ( form.invalid ) { return; }
      
      Swal.fire(
        'info',
        'Espere por favor...'
      );
      Swal.showLoading();
  
      this.auth.nuevoUsuario( this.usuario )
        .subscribe( resp => {
          
          console.log(resp);
          Swal.close();
          console.log("funciona1")
          if ( this.recordarme ) {
            localStorage.setItem('email', this.usuario.email);
          }
          this.usuario.rol="usuario";
  
          this.router.navigateByUrl('/login');
  console.log("funciona")
        }, (err) => {
          console.log(err.error.error.message);
          Swal.fire(
            'error',
            'Error al autenticar'
          );
        });
    }
  
  
  }

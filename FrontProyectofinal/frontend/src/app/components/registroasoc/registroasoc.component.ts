import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel} from '../../models/User';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registroasoc',
  templateUrl: './registroasoc.component.html',
  styleUrls: ['./registroasoc.component.scss']
})
export class RegistroasocComponent implements OnInit {
  usuario: UserModel;
  recordarme = false;



  constructor(private auth: AuthService,
    private router: Router) { }

    ngOnInit() {
      this.usuario = new UserModel();
      console.log("aquisi")
    }


    onSubmit( form: NgForm ) {
      console.log("aquino")
      if ( form.invalid ) { return }
  
      Swal.fire(
        'info',
        'Espere por favor...'
      );
      Swal.showLoading();
  
      this.auth.nuevAsoc( this.usuario )
        .subscribe( resp => {
  
          console.log(resp);
          Swal.close();
  
          if ( this.recordarme ) {
            localStorage.setItem('email', this.usuario.email);
          }
          this.usuario.rol="asociacion";
          this.router.navigateByUrl('/login');
  
        }, (err) => {
          console.log(err.error.error.message);
          Swal.fire(
            'error',
            'Error al autenticar'
          );
        });
    }
  
  
  }
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { from, Observable } from 'rxjs';
import {ServicesService} from '../../services/services.service';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UserModel} from '../../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private service: ServicesService) { }
  usuario: UserModel = new UserModel();
  canActivate() {
    if (this.authService.estaAutenticado()) {
      var id;
     
      id=localStorage.getItem('id')

      this.service.getusuario( id )
      .subscribe( (resp: UserModel) => {
        this.usuario = resp;
        
      });

      if(this.usuario.rol==='usuario'){
        
      }
      // login TRUE
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
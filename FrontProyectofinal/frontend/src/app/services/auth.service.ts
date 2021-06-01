import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserModel } from '../models/User';
import {AsociacionModel} from '../models/Asociacion';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';
import { isNullOrUndefined } from "util";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url_user = "http://localhost:3000/api/usuarios";
  readonly url_asoc = "http://localhost:3000/api/asociaciones";
  //public currentUser: Observable<any>;

  constructor( private http: HttpClient ) {
    this.leerToken();
  }


    headers: HttpHeaders= new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
      
    });
  
  prueba:string = sessionStorage.getItem('AccessToken');
  AccessToken: string;

  

  logout() {
    sessionStorage.removeItem('AccessToken');
  }

  login(email: string, password: string, rol:string): Observable<any> {
    const url = "http://localhost:3000/api/usuarios/login";
    return this.http
      .post<UserModel>(
        url,
        { email, password,rol },
      )
      .pipe(map(data => data));
     
  }

setUser(usuario: UserModel): void {
  let user_string = JSON.stringify(usuario);
  localStorage.setItem("currentUser", user_string);
  
 
}




setId(id): void {
  localStorage.setItem("id", id);
}

  


  guardarToken( token: string ) {

    this.AccessToken = token;
    localStorage.setItem('AccessToken', token);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString() );


  }

  leerToken() {

    if ( localStorage.getItem('token') ) {
      this.AccessToken = localStorage.getItem('token');
    } else {
      this.AccessToken = '';
    }

    return this.AccessToken;

  }

  
  nuevoUsuario( usuario: UserModel ) {
    console.log("usuarionuevo")
    usuario.rol="usuario"
    return this.http.post(this.url_user, usuario);

  }
  nuevAsoc( usuario: UserModel ) {
    usuario.rol="asociacion"
    return this.http.post(this.url_user, usuario);

  }
  


  estaAutenticado(): boolean {

    if ( this.AccessToken.length < 2 ) {
      return true;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }


  }

}
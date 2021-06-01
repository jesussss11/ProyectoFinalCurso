import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Peticionmodel} from '../models/Peticion';
import { AsociacionModel } from '../models/Asociacion';
import { UserModel } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  readonly url_peticion = 'http://localhost:3000/api/peticiones';
  readonly url_user = 'http://localhost:3000/api/usuarios';
 
  
  httpOptions : any    = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    })
  };
  prueba:string = sessionStorage.getItem('access_token');
  peticion : Peticionmodel = new Peticionmodel();
  asociacion: AsociacionModel = new AsociacionModel();
  usuario: UserModel = new UserModel();

  constructor( private http: HttpClient ) { }


  crearPeticion( peticion: Peticionmodel ) {
    

    return this.http.post(this.url_peticion+'?token='+this.prueba, peticion);
  }
  
  actualizarpeticion( peticion: Peticionmodel ){
    return this.http.put(this.url_peticion+ `/${peticion.id}`+'?token='+this.prueba, peticion);  }

  borrarpeticion(id: string): Observable<any> {
    return this.http.delete(`${this.url_peticion}/${id}`);
  }


  getpeticion( id: string ) {
    return this.http.get<Peticionmodel>(`${this.url_peticion}/${id}`);
  }
  


  getpeticiones() {
    return this.http.get(this.url_peticion) 
    .pipe(
      map( this.crearArregloPeticion ),
      delay(0)
    );
  }

  private crearArregloPeticion( peticionesObj: object ) {

    const peticiones: Peticionmodel[] = [];

    Object.keys( peticionesObj ).forEach( key => {

      const peticion: Peticionmodel = peticionesObj[key];

      peticiones.push( peticion );
    });
    return peticiones;

  }


//Usuarios



  crearUsuario( usuario: UserModel ) {
    return this.http.post(this.url_user+'?token='+this.prueba, usuario);
  }
  
  actualizarusuario( usuario: UserModel ){
    return this.http.put(this.url_user+ `/${usuario.id}`+'?token='+this.prueba, usuario);  }

  borrarusuario(id: string): Observable<any> {
    return this.http.delete(`${this.url_user}/${id}`);
  }


  getusuario( id: string ) {
    return this.http.get<UserModel>(`${this.url_user}/${id}`);
    
  }


  getusuarios() {
    return this.http.get(this.url_user) 
    .pipe(
      map( this.crearArregloUsuario ),
      delay(0)
    );
  }

  private crearArregloUsuario( usuariosObj: object ) {

    const usuarios: UserModel[] = [];

    Object.keys(usuariosObj ).forEach( key => {

      const usuario: UserModel = usuariosObj[key];

      usuarios.push( usuario );
    });
    return usuarios;

  }

  //Asocicion


  crearAsociacion( usuario: UserModel ) {
    return this.http.post(this.url_user+'?token='+this.prueba, usuario);
  }
  
  actualizarasociacion( usuario: UserModel ){
    return this.http.put(this.url_user+ `/${usuario.id}`+'?token='+this.prueba, usuario);  }

  borrarasociacion(id: string): Observable<any> {
    return this.http.delete(`${this.url_user}/${id}`);
  }


  getasociacion( id: string ) {
    return this.http.get<AsociacionModel>(`${this.url_user}/${id}`);
  }


  getasociaciones() {
    return this.http.get(this.url_user) 
    .pipe(
      map( this.crearArregloAsociaciones ),
      delay(0)
    );
  }

  private crearArregloAsociaciones( asociacionesObj: object ) {

    const asociaciones: AsociacionModel[] = [];

    Object.keys( asociacionesObj ).forEach( key => {

      const asociacion: AsociacionModel = asociacionesObj[key];

      asociaciones.push( asociacion );
    });
    return asociaciones;

  }


}
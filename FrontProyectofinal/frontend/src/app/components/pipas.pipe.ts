import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../models/User';

@Pipe({
  name: 'pipas'
})
export class PipasPipe implements PipeTransform {

  transform(value: any, arg: string): any {
    
    var asoc ="asociacion";
    arg=asoc;

    const resultUsuario = [];
    for(const usuario of value){
      if(usuario.rol==arg){
        resultUsuario.push(usuario);
      }
    }
    return resultUsuario;
  }

}

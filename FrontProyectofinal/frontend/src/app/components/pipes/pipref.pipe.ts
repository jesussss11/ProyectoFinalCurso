import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipref'
})
export class PiprefPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    if(arg ==''|| arg.length <3) return value

    const resultusuarioo = [];
    for(const usuario of value){
      if(usuario.preferencias==arg.toLowerCase()){
        resultusuarioo.push(usuario);
      };
    };
    return resultusuarioo;
  }
}

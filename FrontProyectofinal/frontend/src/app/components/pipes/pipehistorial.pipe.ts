import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipehistorial'
})
export class PipehistorialPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    arg=localStorage.getItem('id');

    const resultPeticionas = [];
    for(const Peticion of value){
      if(Peticion.id_asoc.indexOf(arg)>-1){
        resultPeticionas.push(Peticion);
      };
    };
    return resultPeticionas;
  }


}

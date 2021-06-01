import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from 'src/app/models/User';
import { ServicesService} from '../../services/services.service';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 


  transform(value: any, arg: any): any {
    
    arg=localStorage.getItem('id');

    const resultPeticion = [];
    for(const Peticion of value){
      if(Peticion.id_user.indexOf(arg)>-1){
        resultPeticion.push(Peticion);
      };
    };
    return resultPeticion;
  }

}

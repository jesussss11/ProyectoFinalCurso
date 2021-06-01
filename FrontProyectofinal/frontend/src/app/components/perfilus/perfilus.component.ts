import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/User';
import {ServicesService} from '../../services/services.service';
@Component({
  selector: 'app-perfilus',
  templateUrl: './perfilus.component.html',
  styleUrls: ['./perfilus.component.scss']
})
export class PerfilusComponent implements OnInit {
  Usuarios: UserModel[] = [];

  filterperf='';
  filter='';

  constructor( public ServicesServices : ServicesService) { }

  ngOnInit(): void {
    this.ServicesServices.getusuarios()
    
      .subscribe( resp => {
        this.Usuarios = resp;
        
      });
  }

}

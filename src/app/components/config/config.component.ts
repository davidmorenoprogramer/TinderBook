import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from 'src/app/services/config-service.service';
import {ConfigData} from '../../interfaces/interfaces';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {

  public data : ConfigData;
  public gender: string;
  public filter: string[];
  constructor(public servicioConfig: ConfigServiceService) {
  this.data = {gender:'+Fantasy'}; }

  
  ngOnInit() {}
  comprobar(){
    
  
    this.data.gender = this.gender.toString().slice(1)
    this.data.gender = this.data.gender.replace(/,/g,'');
    this.servicioConfig.addData(this.data);
  }

}

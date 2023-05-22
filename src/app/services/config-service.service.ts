import { Injectable,Output,EventEmitter } from '@angular/core';
import {ConfigData} from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {
  //@Output() disparadorConfig: EventEmitter<any> = new EventEmitter();
  private data : ConfigData;
  private genderfilter: string;
  constructor() { 
    this.data = {gender:'Fantasy'};
  }


  getData(){
    if (localStorage.getItem('confiData') === null){
      return this.data;
    } else{
      this.data = JSON.parse(localStorage.getItem('confiData'));
      return this.data;
    }

  }

  addData(configData:ConfigData){
    
    this.data = configData;
    localStorage.setItem('confiData', JSON.stringify(this.data));

  }
}

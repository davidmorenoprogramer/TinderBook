import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gesture, GestureController } from '@ionic/angular';
import { Welcome } from 'src/app/interfaces/interfaces';
import { Observable, Subject } from 'rxjs';
import {ConfigData} from '../../app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url: string = "https://www.googleapis.com/books/v1/volumes?q=";
  private findbygenero:string = "+subject:";
  private type:string = "&printType=books"
  private max:string = "&maxResults=40"
  private urlmovie = "https://api.themoviedb.org/3/genre/movie/list?"
  private apiKey = "api_key=5cbc74f69b37c293941e7844f2134a2f"
  private order = "&orderBy=relevance"
  private genderFilter = ""

  constructor(private http : HttpClient,private gestureCtrl: GestureController) { }


  private refresh$ = new Subject<void>();
  


  getDataConfig(configData:ConfigData){
    
    
    console.log(configData.gender)
    return this.http.get<Welcome>(this.url  +  this.findbygenero  +  configData.gender + this.type + this.max + this.order)
  }


}

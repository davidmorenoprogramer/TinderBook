import { Component, OnInit, AfterViewInit,ElementRef,Renderer2,Output,Input,EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

import { BooksService } from 'src/app/services/books.service';
import { GestureController, IonText } from '@ionic/angular';
import { Gesture,GestureConfig } from '@ionic/core';
import { Item, Welcome } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import { ConfigServiceService } from 'src/app/services/config-service.service';
import {ConfigData} from '../../interfaces/interfaces';
@Component({
  selector: 'app-desk',
  
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.scss'],
})
export class DeskComponent implements AfterViewInit, OnInit {

  @Output() match = new EventEmitter<boolean>;
  @Output() Unmatch = new EventEmitter<boolean>;
  @Output() like = new EventEmitter<boolean>;
  @Output() dislike = new EventEmitter<boolean>;

  public bookObj = null
  randomBook
  public booknumber = 1
  
  constructor(private bookservice:BooksService, private gestureCtrl:GestureController, private element:ElementRef,private renderer:Renderer2,private servicioConfig:ConfigServiceService) { }
  image!: string;
  
  

  randomNumber(max:number) {
    return Math.floor(Math.random() * max);
  }
  ngOnInit(): void {

    
    this.searchbygenere();
    
  }

  
  async ngAfterViewInit() {
    
    const windowWidth = window.innerWidth;
    
    const options:GestureConfig = {
      el:this.element.nativeElement,
      gestureName:'slide-drawer-swipe',
      onStart: () => {
        this.renderer.setStyle(this.element.nativeElement,'transition','none')
      },
      onMove: (ev) => {
        this.renderer.setStyle(this.element.nativeElement,'transform', `translateX(${ev.deltaX}px) rotate(${
          ev.deltaX / 20
        }deg)`)
        if (ev.deltaX > windowWidth / 10) {
          this.like.emit(true);

        }
        else if (ev.deltaX < -windowWidth / 10){
          this.dislike.emit(true);
        }
        else {
          this.dislike.emit(false);
          this.like.emit(false)}

      },
      onEnd: (ev) => {
        this.renderer.setStyle(this.element.nativeElement,'transition','0.3s ease-out')

        if (ev.deltaX > windowWidth /  10) {
          this.renderer.setStyle(this.element.nativeElement,'transform',`translateX(${windowWidth * 1.5}px)` )
          this.match.emit(true);
          this.dislike.emit(false);
          this.like.emit(false)
          
        } else if (ev.deltaX < -windowWidth /  10) {
          this.renderer.setStyle(this.element.nativeElement,'transform',`translateX(-${windowWidth * 1.5}px)`)
          this.match.emit(false);
          this.dislike.emit(false);
          this.like.emit(false)
        } else {
          this.renderer.setStyle(this.element.nativeElement,'transform','')
        }
        if (ev.deltaX > windowWidth / 10 || ev.deltaX < -windowWidth / 10 ) {
         
          this.ngOnInit()
          this.renderer.setStyle(this.element.nativeElement,'transform','')
          
        }
      }

    };

    const gesture:Gesture = await this.gestureCtrl.create(options);
    gesture.enable();
  }


 
  
  async searchbygenere(){

    
    this.bookservice.getDataConfig(this.servicioConfig.getData()).subscribe((data:Welcome) =>{
      this.randomBook = this.randomNumber(data.items.length)
      
      console.log(data.items.length)
      while (typeof data.items[this.randomBook].volumeInfo.imageLinks == "undefined"){
          this.randomBook = this.randomNumber(data.items.length)
          
      }
      
      this.bookObj = data.items[this.randomBook];
      setInterval(()=> {this.image = this.bookObj.volumeInfo.imageLinks.thumbnail},1)
        
    })
    


  }
}

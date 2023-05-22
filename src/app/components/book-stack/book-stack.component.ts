import { Component, OnInit, ViewChildren,QueryList, ViewContainerRef, AfterViewInit,EventEmitter} from '@angular/core';
import {DeskComponent} from '../desk/desk.component'



@Component({
  selector: 'app-book-stack',
  templateUrl: './book-stack.component.html',
  styleUrls: ['./book-stack.component.scss'],
})
export class BookStackComponent implements OnInit, AfterViewInit {

  @ViewChildren(DeskComponent) books: QueryList<DeskComponent>
  

  like = false
  dislike = false
  array = [1,2]
  component:DeskComponent[]
  constructor(private viewContainerRef: ViewContainerRef) { }
  
  
  loadCards(){
   
    
    //for (let i = 0; i < 5; i++) {
      //this.array.push(this.array.length + 1)
      
    //}
   


  }


  ngOnInit() {
    //const component = this.viewContainerRef.createComponent<any>(DeskComponent)
    //component.instance.ngAfterViewInit()
    //const component2 = this.viewContainerRef.createComponent(DeskComponent)
  }
 

  ngAfterViewInit(){
    this.component = this.books.toArray(); 
   

  }

  delete(){
    this.array.pop()
  }
  add_new(){
    this.delete()
  
    if (document.getElementById('card1').style.zIndex == "1"){
      document.getElementById('card1').style.zIndex = "0"
      
    }
    else{document.getElementById('card1').style.zIndex = "1"}
    if (document.getElementById('card2').style.zIndex == "1"){
      document.getElementById('card2').style.zIndex = "0"
    }
    else{document.getElementById('card2').style.zIndex = "1"}
    
   
   
    
   
  }

  
  doMatch(ev){

    this.add_new()
    

  }

  doUnmatch(ev){}

  doLike(ev){ 
    this.like = ev

  }
  doDislike(ev){
    this.dislike = ev
    
  }



}

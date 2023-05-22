import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>
  constructor(private data: DataService,private menuCtrl: MenuController) { }

  ngOnInit() {
    this.componentes = this.data.getMenuopt()
  }
  togglemenu(){
   this.menuCtrl.toggle();
    
  }
}

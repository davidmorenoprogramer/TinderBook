import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { DeskComponent } from './components/desk/desk.component';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BookStackComponent } from './components/book-stack/book-stack.component';
import { ConfigComponent } from './components/config/config.component';
import { DynamicHostDirective } from './directive/dynamic-host.directive';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOptimizedImage } from '@angular/common';
import { ConfigServiceService } from 'src/app/services/config-service.service';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { direction: Hammer.DIRECTION_ALL },
    pan: { direction: Hammer.DIRECTION_ALL }
  };
}
@NgModule({
  declarations: [AppComponent,MenuComponent,DeskComponent,BookStackComponent, DynamicHostDirective,ConfigComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,MatIconModule,BrowserAnimationsModule,NgOptimizedImage,FormsModule],
  providers: [ConfigServiceService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig}],
  bootstrap: [AppComponent],
})
export class AppModule {}


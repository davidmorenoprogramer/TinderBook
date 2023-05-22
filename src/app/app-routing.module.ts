import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DeskComponent } from '../app/components/desk/desk.component';
import { BookStackComponent } from './components/book-stack/book-stack.component';
import { ConfigComponent } from './components/config/config.component';
const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'desk',
    pathMatch: 'full'
  },
  //{ path: "desk", component: DeskComponent },
  { path: "desk", component: BookStackComponent },
  { path: "configuration", component: ConfigComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

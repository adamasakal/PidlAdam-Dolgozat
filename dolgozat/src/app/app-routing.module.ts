import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  [ParentComponent], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

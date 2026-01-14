import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Mainpage } from './mainpage/mainpage';

const routes: Routes = [
  {
    path:"",
    component:Landing
  },
  {
    path:"main",
    component:Mainpage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

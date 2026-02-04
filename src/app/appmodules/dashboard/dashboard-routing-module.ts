import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Mainpage } from './mainpage/mainpage';
import { Errorpage } from '../../shaprescomponents/errorpage/errorpage';

const routes: Routes = [
  {
    path:"",
    component:Landing,
    title:"dashboard page"
  },
  {
    path:"main",
    component:Mainpage,
    title:"mainpage"
  },
  {
    path:'**',
    component:Errorpage,
    title:"Error"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

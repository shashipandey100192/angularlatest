import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Userlogin } from './userlogin/userlogin';
import { Userregistor } from './userregistor/userregistor';
import { Errorpage } from '../../shaprescomponents/errorpage/errorpage';

const routes: Routes = [
  {
    path:"",
    component:Userlogin
  },
  {
    path:"registor",
    component:Userregistor
  },
  {
    path:"**",
    component:Errorpage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

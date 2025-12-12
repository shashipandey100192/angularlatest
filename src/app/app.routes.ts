import { Routes } from '@angular/router';
import { Aboutpage } from './components/aboutpage/aboutpage';
import { Contactus } from './components/contactus/contactus';
import { Errorpage } from './components/errorpage/errorpage';

export const routes: Routes = [
{
    path:"about",
    component:Aboutpage,
    title:"aboutpage"
},
{
    path:"contactus",
    component:Contactus,
    title:"contact"
},
{
    path:"**",
    component:Errorpage,
    title:"Error"
}

];

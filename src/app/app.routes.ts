import { Routes } from '@angular/router';
import { Blankpage } from './layouts/blankpage/blankpage';
import { Errorpage } from './shaprescomponents/errorpage/errorpage';
import { Fullpage } from './layouts/fullpage/fullpage';
export const routes: Routes = [

    {
        path: "",
        component: Blankpage,
        children: [
            {
                path: "",
                redirectTo: "auth",
                pathMatch: 'full'
            },
            {
                path: "auth",
                loadChildren: () => import('../app/appmodules/auth/auth-module').then(m => m.AuthModule)

            },
           
        ]
    },
    {
        path: "",
        component:Fullpage,
        children: [
            {
                path: "",
                redirectTo: "dashboard",
                pathMatch: 'full'
            },
            {
                path: "dashboard",
                loadChildren: () => import('../app/appmodules/dashboard/dashboard-module').then(m => m.DashboardModule)

            },
           
        ]
    },


    {
        path:"**",
        component:Errorpage
    }



];

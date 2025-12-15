import { Routes } from '@angular/router';
import { Blankpage } from './layouts/blankpage/blankpage';
import { Errorpage } from './shaprescomponents/errorpage/errorpage';
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
            // {
            //     path:"dashboard",
            //     loadChildren: ()=>import("../app/appmodules/dashboard/dashboard-module").then(d =>d.DashboardModule)
            // }
        ]
    },
    {
        path:"**",
        component:Errorpage
    }



];

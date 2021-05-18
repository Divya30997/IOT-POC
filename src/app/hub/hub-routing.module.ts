import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './hub.component';

const routes: Routes = [
    {
        path:'' ,component:HubComponent,children:[
            {
                path:'!HubDetails',
                loadChildren:()=>import('../hub-details/hub-details.module').then(m=>m.HubDetailsModule)

            },
            {
                path:'!DeviceDetails',
                loadChildren:()=>import('../device-details/device-details.module').then(m=>m.DeviceDetailsModule)
            }

        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HubRoutingModule { }

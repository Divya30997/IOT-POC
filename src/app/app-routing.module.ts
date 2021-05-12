import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ActivityComponent} from 'src/app/activity/activity.component';
import{HubComponent} from 'src/app/hub/hub.component';
import{HubDetailsComponent} from 'src/app/hub-details/hub-details.component';
import{DeviceDetailsComponent} from 'src/app/device-details/device-details.component';
import{AboutHubComponent} from 'src/app/about-hub/about-hub.component';
const routes: Routes = [
    {path:'!Activity', component: ActivityComponent},
    { path: '!About', component: AboutHubComponent },
    { path: '!Hub', component: HubComponent ,children: [ {
        path:'!HubDetails' , component :HubDetailsComponent},
    {path:'!DeviceDetails',component:DeviceDetailsComponent
    
    }
    ]} ,


  
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    
  
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ActivityComponent,AboutHubComponent,HubComponent,HubDetailsComponent,DeviceDetailsComponent];
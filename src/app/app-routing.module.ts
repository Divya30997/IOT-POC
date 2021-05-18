import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:'!Activity', loadChildren:()=> import('./activity/activity.module').then(m => m.ActivityModule)},
    { path: '!About', loadChildren:()=>import('./about-hub/about-hub.module').then(m=>m.AboutHubModule)},
    { path: '!Hub', loadChildren: () =>     import('./hub/hub-routing.module').then(m => m.HubRoutingModule) 
    } ,


  
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    
  
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [];
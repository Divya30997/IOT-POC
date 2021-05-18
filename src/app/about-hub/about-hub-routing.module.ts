import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutHubComponent } from './about-hub.component';

const routes: Routes = [
  {
    path:'',component:AboutHubComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutHubRoutingModule { }

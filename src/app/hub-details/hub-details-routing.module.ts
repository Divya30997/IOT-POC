import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubDetailsComponent } from './hub-details.component';

const routes: Routes = [
    {
        path:'',component:HubDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HubDetailsRoutingModule { }

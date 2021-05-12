import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HubComponent } from './hub/hub.component';
import { HubDetailsComponent } from './hub-details/hub-details.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { ActivityComponent } from './activity/activity.component';
import { AboutHubComponent } from './about-hub/about-hub.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from './Services/data.service';





@NgModule({
    declarations: [
    AppComponent,
    HubComponent,
    HubDetailsComponent,
    DeviceDetailsComponent,
    ActivityComponent,
    AboutHubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

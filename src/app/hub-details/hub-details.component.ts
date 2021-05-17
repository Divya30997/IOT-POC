/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-mixed-spaces-and-tabs */
import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
    selector: 'app-hub-details',
    templateUrl: './hub-details.component.html',
    styleUrls: ['./hub-details.component.css']
})
export class HubDetailsComponent implements OnInit {



    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {
    }

  public jsonData:any = []
  public diagnosticsData:any = [];
  public dummy:any = [];
  public hubData:any;
  constructor(private dataService: DataService) {
   
  }
  
 
  
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handleData() 
  {
	  this.dataService.getData()
  		.subscribe(response =>{
			  if(response!=null)
			  {
  			this.jsonData=response;
  			console.log(this.jsonData);
			  this.dummy=this.jsonData.result;
  			
  			console.log(this.dummy);
			  this.diagnosticsData=this.dummy.diagnosticData;
  			const DataArray = [];
  			for(const element in this.diagnosticsData)
  			{
    
  				DataArray.push({
  					id:element,
  					name:this.diagnosticsData[element]
  				});
      		}
  			console.log(DataArray);
  			this.hubData=DataArray;
			  console.log(this.hubData);
 
		  }
		  else
		  {
			  console.log("Data not found");

		  }
          });
		  
  }

  
}

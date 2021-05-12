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
  public diagnosticData:any = [];
  public hubData:any;
  constructor(private dataService: DataService) {
   
  }
  
 
  
  handleData() 
  {
	  this.dataService.getData()
  		.subscribe(response =>{
  			this.jsonData=response;
  			console.log(this.jsonData);
  			this.diagnosticData=this.jsonData.result.diagnosticData;
  			console.log(this.diagnosticData);
  			const DataArray = [];
  			for(const element in this.diagnosticData)
  			{
    
  				DataArray.push({
  					id:element,
  					name:this.diagnosticData[element]
  				});
      		}
  			console.log(DataArray);
  			this.hubData=DataArray;
 
  		});
  }
  
}

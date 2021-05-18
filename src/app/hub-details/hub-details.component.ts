/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-mixed-spaces-and-tabs */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
    selector: 'app-hub-details',
    //changeDetection:ChangeDetectionStrategy.OnPush,
    templateUrl: './hub-details.component.html',
    styleUrls: ['./hub-details.component.css']
})
export class HubDetailsComponent implements OnInit {



    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {
        this.handleData();
    }

  public jsonData:any = []
  public diagnosticsData:any = [];
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
                  this.diagnosticsData=this.jsonData.result.diagnosticData;
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
                  console.log('Data not found');
  
              }
          });
			
  }
  
	
}
  

  			
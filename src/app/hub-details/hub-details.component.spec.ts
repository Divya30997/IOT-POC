
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DataService } from '../Services/data.service';
import { HubDetailsComponent } from './hub-details.component';
import{delay} from 'rxjs/operators';
import {from, of} from 'rxjs';
import * as Rx from 'rxjs';

describe('HubDetailsComponent', () => {
    let component: HubDetailsComponent;
    let fixture: ComponentFixture<HubDetailsComponent>;
    
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            declarations: [ HubDetailsComponent ],
            providers:[DataService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HubDetailsComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should get data from dataservice',fakeAsync(()=>{
        const fixture = TestBed.createComponent(HubDetailsComponent);
        const component = fixture.debugElement.componentInstance;
        const service = fixture.debugElement.injector.get(DataService);
        let spy_getPosts = spyOn(service,'getData').and.callFake(() => {
            return Rx.of({
                'result': {
                    'diagnosticData': {
                        'hubNameTag': 'CMS-HUB-123344',
                        'hubHardDiskConsumption': '80%',
                        'hubConnectivityStatus': 'Success'
                    }
                }}).pipe(delay(500));
        });
        service.getData().subscribe();
        expect(service.getData).toHaveBeenCalled();
        component.handleData();
        tick(1000);
        expect(component.jsonData).toEqual({
            'result': {
                'diagnosticData': {
                    'hubNameTag': 'CMS-HUB-123344',
                    'hubHardDiskConsumption': '80%',
                    'hubConnectivityStatus': 'Success'
                }
            }
        });
        expect(component.hubData.length).toEqual(3);
        tick(1000);
      
    }));
    

});
import { async, inject, TestBed } from '@angular/core/testing';
import{HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { DataService } from './data.service';
const TestData = [{
    'result': {
        'diagnosticData': {
            'hubNameTag': 'CMS-HUB-123344',
            'hubHardDiskConsumption': '80%',
            'hubConnectivityStatus': 'Success'
        }
    }
}];
describe('DataService', () => {
    let service: DataService;
    let httpMock:HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({imports :[HttpClientTestingModule]});
        service = TestBed.inject(DataService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should get json data in obseravble format', async(inject([ DataService],
        ( dataService: DataService) => {
            dataService.getData()
                .subscribe(res => {
                    expect(res).toEqual(TestData) ;
                
                });
                
            // eslint-disable-next-line quotes
            const request = httpMock.expectOne("assets/Data/Data.json");
            expect(request.request.method).toBe('GET');
            request.flush(TestData);
        }))); 

    afterEach(() => {
        httpMock.verify();
    });
    
        
});


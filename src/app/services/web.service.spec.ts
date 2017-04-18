import {MockBackend, MockConnection} from "@angular/http/testing";
import {async, inject, TestBed} from "@angular/core/testing";
import {Http, HttpModule, Response, ResponseOptions, XHRBackend} from "@angular/http";
import {WebService} from "./web.service";
/**
 * Created by zyf on 2/17/17.
 */
const fakedjangoData: {} = {
  count: 1234,
  next: 'next',
  previous: 'previous',
  results: [{
    id: 1,
    herb_set: [1, 2],
    englishidentity_set: [3, 4],
    chineseidentity_set: [5, 6],
    english_name: 'tianqi',
    chinese_name: 'tianqi',
    smiles: 'CCC1CCC',
    mol_file: 'mol_file',
    mol_image: 'mol_image',
    first_created: 'first_created',
    last_modified: 'last_modified',
    formula: 'formula',
    mol_weight: 'mol_weight',
    alogp: 'alogp',
    hba: 10,
    hbd: 11,
    psa: 'psa',
    rtb: 12,
    related_compounds: [7, 8],
  }]
}

xdescribe('Http-WebService (mockBackend)', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        WebService,
        {provide: XHRBackend, useClass: MockBackend}
      ]
    })
      .compileComponents();
  }));
  //首先测试注入的服务：WebService,XHRBackend,Http
  it('can instantiate service when inject service / service为WebService的实例',
    inject([WebService], (service: WebService) => {
      expect(service instanceof WebService).toBe(true)
    }));

  it('can instantiate service with "new" / new出来的service也为WebService的实例',
    inject([Http], (http: Http) => {
      expect(http).toBeTruthy('http should be provided ');
      let service = new WebService(http);
      expect(service instanceof WebService).toBe(true, 'new service should be ok');
    }));

  it('can provide the mockBackend as XHRBackend / 提供虚拟后台作为异步后台',
    inject([XHRBackend], (mockBackend: MockBackend) => {
      expect(mockBackend).toBeTruthy('mockBackend should be provided')
    }))

  //测试WebService里的methods
  describe('when getDbRoots', () => {
    let mockbackend: MockBackend;
    let webservice: WebService;
    let response: Response;
    let fakehttpData: Object;

    beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
      mockbackend = be;
      webservice = new WebService(http);
      fakehttpData = fakedjangoData;
      let options = new ResponseOptions({status: 200, body: fakehttpData});
      response = new Response(options)
    }))
    //虚拟后台测试
    it('should have expected fakedjangoData', async(inject([], () => {
      mockbackend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
      webservice.getDbRoots()
        .do(datas => {
          expect(Object.keys(datas).length).toBe(Object.keys(fakehttpData).length)
        })
    })))

  })

});

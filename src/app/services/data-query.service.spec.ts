import {inject, TestBed} from "@angular/core/testing";

import {DataQueryService} from "./data-query.service";

describe('DataQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataQueryService]
    });
  });

  it('should ...', inject([DataQueryService], (service: DataQueryService) => {
    expect(service).toBeTruthy();
  }));
});

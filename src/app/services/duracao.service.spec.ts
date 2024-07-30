import { TestBed } from '@angular/core/testing';

import { DuracaoService } from './duracao.service';

describe('DuracaoService', () => {
  let service: DuracaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuracaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

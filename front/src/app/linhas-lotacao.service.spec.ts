import { TestBed } from '@angular/core/testing';

import { LinhasLotacaoService } from './linhas-lotacao.service';

describe('LinhasLotacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinhasLotacaoService = TestBed.get(LinhasLotacaoService);
    expect(service).toBeTruthy();
  });
});

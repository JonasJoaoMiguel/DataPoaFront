import { TestBed } from '@angular/core/testing';

import { ObterItinerarioService } from './obter-itinerario.service';

describe('ObterItinerarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObterItinerarioService = TestBed.get(ObterItinerarioService);
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterItinerarioUtComponent } from './obter-itinerario-ut.component';

describe('ObterItinerarioUtComponent', () => {
  let component: ObterItinerarioUtComponent;
  let fixture: ComponentFixture<ObterItinerarioUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObterItinerarioUtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObterItinerarioUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

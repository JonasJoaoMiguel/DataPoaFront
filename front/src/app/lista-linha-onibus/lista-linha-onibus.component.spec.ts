import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLinhaOnibusComponent } from './lista-linha-onibus.component';

describe('ListaLinhaOnibusComponent', () => {
  let component: ListaLinhaOnibusComponent;
  let fixture: ComponentFixture<ListaLinhaOnibusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLinhaOnibusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLinhaOnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

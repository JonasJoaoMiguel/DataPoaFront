import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLinhaLotacaoComponent } from './lista-linha-lotacao.component';

describe('ListaLinhaLotacaoComponent', () => {
  let component: ListaLinhaLotacaoComponent;
  let fixture: ComponentFixture<ListaLinhaLotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLinhaLotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLinhaLotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

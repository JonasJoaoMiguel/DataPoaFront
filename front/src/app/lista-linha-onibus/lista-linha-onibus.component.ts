import { Component, OnInit } from '@angular/core';
import { LinhasOnibusService } from '../linhas-onibus.service';

@Component({
  selector: 'app-lista-linha-onibus',
  templateUrl: './lista-linha-onibus.component.html',
  styleUrls: ['./lista-linha-onibus.component.css']
})
export class ListaLinhaOnibusComponent implements OnInit {

  linhas: Array<any>;

  constructor(private linhaOnibusService: LinhasOnibusService) { }

  ngOnInit() {
    /*this.buscar();*/
  }

  buscar() {
    this.linhaOnibusService.buscar().subscribe(dados => this.linhas = dados);
  }

}

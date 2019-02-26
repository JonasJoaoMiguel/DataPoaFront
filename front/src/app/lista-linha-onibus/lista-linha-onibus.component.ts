import { Component, OnInit } from '@angular/core';
import { LinhasOnibusService } from '../services/linhas-onibus.service';

@Component({
  selector: 'app-lista-linha-onibus',
  templateUrl: './lista-linha-onibus.component.html',
  styleUrls: ['./lista-linha-onibus.component.css']
})
export class ListaLinhaOnibusComponent implements OnInit {

  linhas: Array<any>;

  constructor(private linhaOnibusService: LinhasOnibusService) { }

  ngOnInit() {
  }

  buscar() {
    this.linhaOnibusService.buscarLinhas().subscribe(dados => this.linhas = dados);
  }

}

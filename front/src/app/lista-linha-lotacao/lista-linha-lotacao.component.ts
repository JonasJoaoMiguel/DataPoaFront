import { Component, OnInit } from '@angular/core';
import { LinhasLotacaoService } from '../linhas-lotacao.service';

@Component({
  selector: 'app-lista-linha-lotacao',
  templateUrl: './lista-linha-lotacao.component.html',
  styleUrls: ['./lista-linha-lotacao.component.css']
})
export class ListaLinhaLotacaoComponent implements OnInit {

  linhas: Array<any>;

  constructor(private linhaLotacaoService: LinhasLotacaoService) { }

  ngOnInit() {
    /*this.buscar();*/
  }

  buscar() {
    this.linhaLotacaoService.buscar().subscribe(dados => this.linhas = dados);
  }


}

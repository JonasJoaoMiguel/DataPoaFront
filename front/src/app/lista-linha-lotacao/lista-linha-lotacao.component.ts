import { Component, OnInit } from '@angular/core';
import { LinhasLotacaoService } from '../linhas-lotacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-linha-lotacao',
  templateUrl: './lista-linha-lotacao.component.html',
  styleUrls: ['./lista-linha-lotacao.component.css']
})
export class ListaLinhaLotacaoComponent implements OnInit {

  linhas: Array<any>;

  constructor(
    private linhaLotacaoService: LinhasLotacaoService,
    private router: Router) { }

  ngOnInit() {
  }

  buscar() {
    this.linhaLotacaoService.buscar().subscribe(dados => this.linhas = dados);
  }


}

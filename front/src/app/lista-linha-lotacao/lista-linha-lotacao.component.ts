import { Component, OnInit } from '@angular/core';
import { LinhasLotacaoService } from '../services/linhas-lotacao.service';
import { FormGroup } from '@angular/forms';
import { NomeLotacaoForm } from '../forms/NomeLotacaoForm';

@Component({
  selector: 'app-lista-linha-lotacao',
  templateUrl: './lista-linha-lotacao.component.html',
  styleUrls: ['./lista-linha-lotacao.component.css']
})
export class ListaLinhaLotacaoComponent implements OnInit {

  linhas: Array<any>;
  public form: FormGroup;

  constructor(
    private linhaLotacaoService: LinhasLotacaoService,
    private nomeForm: NomeLotacaoForm) {
      this.form = this.nomeForm.createForm();
    }

  ngOnInit() {
  }

  buscarNome() {
    const nome = this.form.controls.nome.value;
    this.linhaLotacaoService.buscarNome(nome).subscribe(dados => this.linhas = dados);
  }
  buscar() {
    this.linhaLotacaoService.buscar().subscribe(dados => this.linhas = dados);
  }


}

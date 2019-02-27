import { Component, OnInit } from '@angular/core';
import { LinhasOnibusService } from '../services/linhas-onibus.service';
import { FormGroup } from '@angular/forms';
import { NomeOnibusForm } from '../forms/NomeOnibusForm';

@Component({
  selector: 'app-lista-linha-onibus',
  templateUrl: './lista-linha-onibus.component.html',
  styleUrls: ['./lista-linha-onibus.component.css']
})
export class ListaLinhaOnibusComponent implements OnInit {

  linhas: Array<any>;
  public form: FormGroup;

  constructor(
    private linhaOnibusService: LinhasOnibusService,
    private nomeForm: NomeOnibusForm) {
      this.form = this.nomeForm.createForm();
  }

  ngOnInit() {
  }

  buscarNome() {
    const nome = this.form.controls.nome.value;
    this.linhaOnibusService.buscarNome(nome).subscribe(dados => this.linhas = dados);
  }
  buscar() {
    this.linhaOnibusService.buscarLinhas().subscribe(dados => this.linhas = dados);
  }

}

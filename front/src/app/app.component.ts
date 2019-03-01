import { Component } from '@angular/core';
import { LinhasOnibusService } from './services/linhas-onibus.service';
import { NomeOnibusForm } from './forms/NomeOnibusForm';
import { FormGroup } from '@angular/forms';
import { LinhasLotacaoService } from './services/linhas-lotacao.service';
import { NomeLotacaoForm } from './forms/NomeLotacaoForm';
import { ObterItinerarioService } from './services/obter-itinerario.service';
import { IdForm } from './forms/IdForm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  linhasOnibus: Array<any>;
  linhasLotacao: Array<any>;
  itinerarios: object;
  public formOnibus: FormGroup;
  public formLotacao: FormGroup;
  public formItinerario: FormGroup;

  constructor(
    private linhaOnibusService: LinhasOnibusService,
    private linhaLotacaoService: LinhasLotacaoService,
    private obterItinerarioService: ObterItinerarioService,
    private nomeOnibusForm: NomeOnibusForm,
    private idForm: IdForm,
    private nomeLotacaoForm: NomeLotacaoForm) {
      this.formOnibus = this.nomeOnibusForm.createForm();
      this.formLotacao = this.nomeLotacaoForm.createForm();
      this.formItinerario = this.idForm.createForm();
  }

  buscarNomeLotacao() {
    this.linhasOnibus = null;
    this.linhasLotacao = null;
    this.itinerarios = null;
    const nome = this.formLotacao.controls.nome.value;
    this.linhaLotacaoService.buscarNome(nome).subscribe(dados => this.linhasLotacao = dados);
  }
  buscarLotacao() {
    this.linhasOnibus = null;
    this.linhasLotacao = null;
    this.itinerarios = null;
    this.linhaLotacaoService.buscar().subscribe(dados => this.linhasLotacao = dados);
  }

  buscarNomeOnibus() {
    this.linhasOnibus = null;
    this.linhasLotacao = null;
    this.itinerarios = null;
    const nome = this.formOnibus.controls.nome.value;
    this.linhaOnibusService.buscarNome(nome).subscribe(dados => this.linhasOnibus = dados);
  }
  buscarOnibus() {
    this.linhasOnibus = null;
    this.linhasLotacao = null;
    this.itinerarios = null;
    this.linhaOnibusService.buscarLinhas().subscribe(dados => this.linhasOnibus = dados);
  }
  buscarItinerario() {
    this.linhasOnibus = null;
    this.linhasLotacao = null;
    this.itinerarios = null;
    const id = this.formItinerario.controls.id.value;
    this.obterItinerarioService.buscarUT(id).subscribe(dados => this.itinerarios = dados);
  }

}

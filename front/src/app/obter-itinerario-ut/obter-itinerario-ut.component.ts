import { Component, OnInit } from '@angular/core';
import { ObterItinerarioService } from '../services/obter-itinerario.service';
import { FormsModule, FormGroup } from '@angular/forms';
import { PocForm } from '../forms/poc-form';

@Component({
  selector: 'app-obter-itinerario-ut',
  templateUrl: './obter-itinerario-ut.component.html',
  styleUrls: ['./obter-itinerario-ut.component.css']
})
export class ObterItinerarioUtComponent implements OnInit {

  itinerarios: Array<any>;

  public teste: FormGroup;

  constructor(
    private obterItinerarioService: ObterItinerarioService,
    private pocForm: PocForm) {
      this.teste = this.pocForm.createForm();
    }

  ngOnInit() {
  }

  buscar() {
    const id = this.teste.controls.id.value;
    this.obterItinerarioService.buscarUT(id).subscribe(dados => this.itinerarios = dados);
  }

}

import { Component, OnInit } from '@angular/core';
import { ObterItinerarioService } from '../services/obter-itinerario.service';
import { FormGroup } from '@angular/forms';
import { IdForm } from '../forms/IdForm';

@Component({
  selector: 'app-obter-itinerario-ut',
  templateUrl: './obter-itinerario-ut.component.html',
  styleUrls: ['./obter-itinerario-ut.component.css']
})
export class ObterItinerarioUtComponent implements OnInit {

  itinerarios: Array<any>;
  public form: FormGroup;

  constructor(
    private obterItinerarioService: ObterItinerarioService,
    private idForm: IdForm) {
      this.form = this.idForm.createForm();
    }

  ngOnInit() {
  }

  buscar() {
    const id = this.form.controls.id.value;
    this.obterItinerarioService.buscarUT(id).subscribe(dados => this.itinerarios = dados);
  }

}

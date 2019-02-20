import { Component, OnInit } from '@angular/core';
import { ObterItinerarioService } from '../obter-itinerario.service';

@Component({
  selector: 'app-obter-itinerario-ut',
  templateUrl: './obter-itinerario-ut.component.html',
  styleUrls: ['./obter-itinerario-ut.component.css']
})
export class ObterItinerarioUtComponent implements OnInit {

  itinerario: Array<any>;

  constructor(private obterItinerarioService: ObterItinerarioService) { }

  ngOnInit() {
  }

  buscar() {
    this.obterItinerarioService.buscar().subscribe(dados => this.itinerario = dados);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ObterItinerarioService {

  itinerarioUrl = 'http://localhost:8080/itinerarios/itinerario/idlinha/';

  constructor(private http: HttpClient) { }

  buscarUT(id: string) {
    console.log(id);
    return this.http.get<any[]>(`${this.itinerarioUrl.concat(id)}`);
  }

}

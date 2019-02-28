import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ObterItinerarioService {

  itinerarioUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';

  constructor(private http: HttpClient) { }

  buscarUT(id: string) {
    return this.http.get<any[]>(`${this.itinerarioUrl.concat(id)}`);
  }

}

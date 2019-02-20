import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LinhasLotacaoService {

  linhaUrl = '';

  constructor(private http: HttpClient) { }

  buscar() {
    return this.http.get<any[]>(`${this.linhaUrl}`);
  }
}

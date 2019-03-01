import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LinhasLotacaoService {

  linhaUrl = null;

  constructor(private http: HttpClient) { }

  buscar() {
    this.linhaUrl = 'http://localhost:8080/linhaslotacao/linhalotacao';
    return this.http.get<any[]>(`${this.linhaUrl}`);
  }

  buscarNome(nome: string) {
    this.linhaUrl = 'http://localhost:8080/linhaslotacao/linhalotacao';
    this.linhaUrl = this.linhaUrl.concat('/filter?nome=');
    return this.http.get<any[]>(`${this.linhaUrl.concat(nome)}`);
  }

}

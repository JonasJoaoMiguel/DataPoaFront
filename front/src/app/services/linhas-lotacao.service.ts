import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LinhasLotacaoService {

  linhaUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l';

  constructor(private http: HttpClient) { }

  buscar() {
    return this.http.get<any[]>(`${this.linhaUrl}`);
  }

  buscarNome(nome: string) {
    this.linhaUrl = this.linhaUrl.concat('/filter?nome=');
    return this.http.get<any[]>(`${this.linhaUrl.concat(nome)}`);
  }

}

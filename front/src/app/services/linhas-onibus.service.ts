import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LinhasOnibusService {

  linhaUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o';

  constructor(private http: HttpClient) { }

  buscarLinhas() {
    return this.http.get<any[]>(`${this.linhaUrl}`);
  }

  buscarNome(nome: string) {
    this.linhaUrl = this.linhaUrl.concat('/filter?nome=');
    return this.http.get<any[]>(`${this.linhaUrl.concat(nome)}`);
  }

}

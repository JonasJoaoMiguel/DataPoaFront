import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LinhasOnibusService {

  linhaUrl = 'http://localhost:8080/linhasonibus/linhaonibus';

  constructor(private http: HttpClient) { }

  buscarLinhas() {
    return this.http.get<any[]>(`${this.linhaUrl}`);
  }

}

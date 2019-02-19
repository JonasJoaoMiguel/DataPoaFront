import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaLinhaOnibusComponent } from './lista-linha-onibus/lista-linha-onibus.component';
import { ListaLinhaLotacaoComponent } from './lista-linha-lotacao/lista-linha-lotacao.component';
import { ObterItinerarioUtComponent } from './obter-itinerario-ut/obter-itinerario-ut.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaLinhaOnibusComponent,
    ListaLinhaLotacaoComponent,
    ObterItinerarioUtComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

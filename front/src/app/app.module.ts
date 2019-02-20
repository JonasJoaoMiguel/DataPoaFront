import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaLinhaOnibusComponent } from './lista-linha-onibus/lista-linha-onibus.component';
import { ListaLinhaLotacaoComponent } from './lista-linha-lotacao/lista-linha-lotacao.component';
import { ObterItinerarioUtComponent } from './obter-itinerario-ut/obter-itinerario-ut.component';
import { LinhasOnibusService } from './linhas-onibus.service';
import { LinhasLotacaoService } from './linhas-lotacao.service';
import { ObterItinerarioService } from './obter-itinerario.service';


@NgModule({
  declarations: [
    AppComponent,
    ListaLinhaOnibusComponent,
    ListaLinhaLotacaoComponent,
    ObterItinerarioUtComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LinhasOnibusService,
              LinhasLotacaoService,
              ObterItinerarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

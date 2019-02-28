import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaLinhaOnibusComponent } from './lista-linha-onibus/lista-linha-onibus.component';
import { ListaLinhaLotacaoComponent } from './lista-linha-lotacao/lista-linha-lotacao.component';
import { ObterItinerarioUtComponent } from './obter-itinerario-ut/obter-itinerario-ut.component';
import { LinhasOnibusService } from './services/linhas-onibus.service';
import { LinhasLotacaoService } from './services/linhas-lotacao.service';
import { ObterItinerarioService } from './services/obter-itinerario.service';
import { IdForm } from './forms/IdForm';
import { NomeOnibusForm } from './forms/NomeOnibusForm';
import { NomeLotacaoForm } from './forms/NomeLotacaoForm';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    ListaLinhaOnibusComponent,
    ListaLinhaLotacaoComponent,
    ObterItinerarioUtComponent
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LinhasOnibusService,
    LinhasLotacaoService,
    ObterItinerarioService,
    IdForm,
    NomeOnibusForm,
    NomeLotacaoForm
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

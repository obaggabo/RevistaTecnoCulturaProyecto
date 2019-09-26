import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { NAnterioresComponent } from './n-anteriores/n-anteriores.component';
import { EditorialComponent } from './editorial/editorial.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LineamientosComponent } from './lineamientos/lineamientos.component';
import { LuisComponent } from './luis/luis.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ConocenosComponent,
    NAnterioresComponent,
    EditorialComponent,
    ContactanosComponent,
    LineamientosComponent,
    LuisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
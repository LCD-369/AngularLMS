import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { AltloginComponent } from './altlogin/altlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    JumbotronComponent,
    FooterComponent,
    AltloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

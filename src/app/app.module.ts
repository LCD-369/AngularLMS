import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { AltloginComponent } from './altlogin/altlogin.component';
import { BannerComponent } from './banner/banner.component';
import { MidsectionComponent } from './midsection/midsection.component';
import { EndsectionComponent } from './endsection/endsection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HomeComponent } from './home/home.component';
import { AuthortableComponent } from './authortable/authortable.component';
import { FormsModule } from '@angular/Forms';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    JumbotronComponent,
    FooterComponent,
    AltloginComponent,
    BannerComponent,
    MidsectionComponent,
    EndsectionComponent,
    AdminhomeComponent,
    HomeComponent,
    AuthortableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

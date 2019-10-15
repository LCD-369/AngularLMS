import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { MidsectionComponent } from './midsection/midsection.component';
import { EndsectionComponent } from './endsection/endsection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HomeComponent } from './home/home.component';
import { AuthortableComponent } from './authortable/authortable.component';
import { ReactiveFormsModule } from '@angular/Forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AuthorService } from './services/author.service';
import { PostFormComponent } from './post-form/post-form.component';
import { PutFormComponent } from './put-form/put-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    JumbotronComponent,
    FooterComponent,
    BannerComponent,
    MidsectionComponent,
    EndsectionComponent,
    AdminhomeComponent,
    HomeComponent,
    AuthortableComponent,
    PostFormComponent,
    PutFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

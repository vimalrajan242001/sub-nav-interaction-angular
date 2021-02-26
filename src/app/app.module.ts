import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { VideosLandingPageComponent } from './videos-landing-page/videos-landing-page.component';
import { QuizeLandingPageComponent } from './quize-landing-page/quize-landing-page.component';
import { DocLandingPageComponent } from './doc-landing-page/doc-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubheaderComponent,
    LandingPageComponent,
    VideosLandingPageComponent,
    QuizeLandingPageComponent,
    DocLandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

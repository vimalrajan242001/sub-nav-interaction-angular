import { SubHeaderStyleService } from './sub-header-style.service';
import { QuizServiceService } from './quiz-service.service';
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
import { CreateQuizViewComponent } from './create-quiz-view/create-quiz-view.component';
import { QuizContainerComponent } from './quiz-container/quiz-container.component';
import { QuizPaginationComponent } from './quiz-pagination/quiz-pagination.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubheaderComponent,
    LandingPageComponent,
    VideosLandingPageComponent,
    QuizeLandingPageComponent,
    DocLandingPageComponent,
    CreateQuizViewComponent,
    QuizContainerComponent,
    QuizPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [QuizServiceService,SubHeaderStyleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { QuizeLandingPageComponent } from './quize-landing-page/quize-landing-page.component';
import { DocLandingPageComponent } from './doc-landing-page/doc-landing-page.component';
import { VideosLandingPageComponent } from './videos-landing-page/videos-landing-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:LandingPageComponent},
  { path:"videos", component: VideosLandingPageComponent },
  { path: "docs", component: DocLandingPageComponent },
  { path: "quize", component:QuizeLandingPageComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

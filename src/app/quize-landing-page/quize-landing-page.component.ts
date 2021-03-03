import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-quize-landing-page',
  templateUrl: './quize-landing-page.component.html',
  styleUrls: ['./quize-landing-page.component.scss']
})
export class QuizeLandingPageComponent implements OnInit {
  public sub_style = { videos: false, docs: false, quiz: true }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-videos-landing-page',
  templateUrl: './videos-landing-page.component.html',
  styleUrls: ['./videos-landing-page.component.scss']
})
export class VideosLandingPageComponent implements OnInit {
  public sub_style = { videos: true, docs: false, quiz: false }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-doc-landing-page',
  templateUrl: './doc-landing-page.component.html',
  styleUrls: ['./doc-landing-page.component.scss']
})
export class DocLandingPageComponent implements OnInit {
  public sub_style = { videos: false, docs: true, quiz: false }

  constructor() { }

  ngOnInit(): void {
  }

}

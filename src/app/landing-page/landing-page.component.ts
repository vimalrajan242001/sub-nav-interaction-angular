import { Router } from '@angular/router';
import { SubHeaderStyleService } from './../sub-header-style.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public sub_style;
  constructor(
    private route : Router,
    private subheaderservice: SubHeaderStyleService
  ) { }

  ngOnInit(): void {
    this.sub_style = this.subheaderservice.sub_style
  }
  handeleroute(value) {
    if (value === "videos") {
      this.sub_style = { videos: true, docs: false, quiz: false }
      this.subheaderservice.changesubheadvalues(this.sub_style)
      this.route.navigate(["videos"])
    }
    else if (value === "docs") {
    }
    else if (value === "quiz") {
    }
  }
}

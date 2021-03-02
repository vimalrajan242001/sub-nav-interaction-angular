import { SubHeaderStyleService } from './sub-header-style.service';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sub_style;

  constructor(
    private router: Router,
    private subheadservice: SubHeaderStyleService
  ) {
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        if (this.router.url == '/') {
          this.sub_style = { videos: null, docs: null, quiz: null }
          this.subheadservice.changesubheadvalues(this.sub_style)
        }
        else if (this.router.url == '/videos') {
          this.sub_style = { videos: true, docs: false, quiz: false }
          this.subheadservice.changesubheadvalues(this.sub_style)
        }
        else if (this.router.url == '/docs') {
          this.sub_style = { videos: false, docs: true, quiz: false }
          this.subheadservice.changesubheadvalues(this.sub_style)
        }
        else if (this.router.url == '/quiz') {
          this.sub_style = { videos: false, docs: false, quiz: true }
          this.subheadservice.changesubheadvalues(this.sub_style)
        }
        else {
          this.sub_style = { videos: null, docs: null, quiz: null }
          this.subheadservice.changesubheadvalues(this.sub_style)
        }
      }
    });
  }
  changestyle(value) {

  }
}

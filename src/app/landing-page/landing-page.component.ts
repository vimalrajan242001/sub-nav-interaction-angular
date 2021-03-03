import { SubStyleService } from './../sub-style.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @Input() sub_style = { videos: null, docs: null, quiz: null }
  // public link_style
  constructor(
    // private sub_style_service: SubStyleService
  ) { }

  ngOnInit(): void {
    // this.sub_style_service.sub_link_change.subscribe(value => this.link_style = value)
  }
  // changevalue(value) {
  //   if (value == 'videos') {
  //     this.sub_style_service.changesublink({ videos: true, docs: false, quiz: false })
  //   }
  // }
}

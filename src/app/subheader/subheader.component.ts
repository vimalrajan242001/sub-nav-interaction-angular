import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { SubHeaderStyleService } from './../sub-header-style.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {
  public subheadstyle;
  public _subscribe;
  constructor(private subheaderstyleservice: SubHeaderStyleService) 
  {
    this.subheaderstyleservice.sub_style_change.subscribe((value)=>{
      this.subheadstyle = value
      console.log(this.subheadstyle)
    }) 
  }
  
  ngOnInit(): void {

  }

}

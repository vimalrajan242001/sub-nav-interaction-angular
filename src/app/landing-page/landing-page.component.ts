import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
  }
handeleroute(value){
  var routevalue = value;
  if(routevalue === "videos"){
    this.router.navigate(["videos"])
  }
  else if(routevalue === "docs"){
    this.router.navigate(["docs"])
  }
  else if(routevalue === "quize"){
    this.router.navigate(["quize"])
  }
}
}

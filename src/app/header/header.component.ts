import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  status: boolean = false;
  @ViewChild('list') list;

  constructor() { }

  ngOnInit(): void {
  }
  
  clickEvent() {
    this.status = !this.status;
    const dom: HTMLElement = this.list.nativeElement;
    const elements = dom.querySelectorAll<HTMLElement>('.nav-links li')
    // console.log(elements)     
    elements.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        // link.style.animation = `navLinkFade 0.9s cubic-bezier(0.075, 0.82, 0.165, 1) forwards ${index / 10 +
        //   0.2}s`;

      }
    });

  }
}

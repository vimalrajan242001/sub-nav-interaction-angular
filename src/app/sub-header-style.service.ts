import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubHeaderStyleService {
  public sub_style:{videos:boolean,docs:boolean,quiz:boolean}={videos:null,docs:null,quiz:null};
  public sub_style_change: Subject<{ videos: boolean, docs: boolean, quiz: boolean}> = new Subject<{ videos: boolean, docs: boolean, quiz: boolean}>()

  constructor( ) { 
    this.sub_style_change.subscribe((value)=>
    {
      this.sub_style = value
    })
    }

  changesubheadvalues(value){
    this.sub_style_change.next(value)
  }
}

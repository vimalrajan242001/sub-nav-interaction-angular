import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
@Injectable({
  providedIn: 'root'
})
export class SubStyleService {
  private sub_links = new BehaviorSubject<{ videos: boolean, docs: boolean, quize: boolean}> ({ videos: null, docs: null, quize: null })
  sub_link_change = this.sub_links.asObservable()
  constructor() { }
  changesublink(value){
    this.sub_links.next(value)
  }
}

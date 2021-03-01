import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  quize = []
  constructor() { }
  addquize(ques,ans,qno){
    this.quize.push({question:ques,answer:ans,ques_number:qno})
  }
  updatequize(ques,ans,index){
    this.quize[index].question = ques
    this.quize[index].answer = ans
    
  }
}

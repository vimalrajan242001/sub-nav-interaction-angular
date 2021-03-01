import { QuizServiceService } from './../quiz-service.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz-pagination',
  templateUrl: './quiz-pagination.component.html',
  styleUrls: ['./quiz-pagination.component.scss']
})
export class QuizPaginationComponent implements OnInit {
  public update:boolean=true;
  quizs: { question: string, answer: String, ques_number: number }[] = []
  @Output() firechangeques = new EventEmitter<{selected:{},update:Boolean,index:number}>()
  constructor(
    private quizservice: QuizServiceService
  ) { }
  changequestion(index) {
    // console.log(this.quizs[index])
    this.firechangeques.emit({selected:this.quizs[index],update:true,index:index})
  }
  ngOnInit(): void {
    this.quizs = this.quizservice.quize
  }

}

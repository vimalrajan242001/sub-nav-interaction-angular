import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { QuizServiceService } from './../quiz-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-container',
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.scss']
})
export class QuizContainerComponent implements OnInit {
  public ques_num: any = 1;
  public question: string = "";
  public answer: String = "";
  public index: number = null;
  public update_but: Boolean = false;
  constructor(private quizservice: QuizServiceService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
  }
  addquize() {
    if (this.question.length > 0 && this.answer.length > 0) {
      if (!this.update_but) {
        this.quizservice.addquize(this.question, this.answer, this.ques_num);
        this.ques_num = this.ques_num + 1
        this.question = ""
        this.answer = ""
      }
      else {
        this.quizservice.updatequize(this.question, this.answer, this.index)
        this.question = ""
        this.answer = ""
        this.update_but = !this.update_but

      }
    }
    else {
      alert("add some value")
    }
  }
  getSelectedques(ques) {
    console.log(ques)
    this.update_but = ques.update
    this.question = ques.selected.question
    this.answer = ques.selected.answer
    this.index = ques.index
  }
}

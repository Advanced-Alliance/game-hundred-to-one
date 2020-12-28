import { AnswersService } from './../home/answers.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  questions: any;

  constructor(private answersService: AnswersService) {}

  ngOnInit() {
    this.answersService.getAnswers().subscribe((res) => {
      this.questions = res;
    });
  }

  public saveChanges() {
    this.answersService.saveQuestions(this.questions).subscribe((res) => {});
  }
}

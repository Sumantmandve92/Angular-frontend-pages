import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/classes/question';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color={
    "Improve coverage":"btn-outline-danger",
    "Unanswered":"btn-outline-success",
    "Underperforming":"btn-outline-warning"
  };
  bgColor={
    "Improve coverage":"bg-danger",
    "Unanswered":"bg-success",
    "Underperforming":"bg-warning"
  };

  questions: Question[] = [
    {
      id:1,
      status: "Improve coverage",
      question: "Are you real estate dealer ?",
      subtitle: " 2 alternative questions New !"

    },
    {
      id:2,
      status: "Unanswered",
      question: "Are you real estate dealer ?",
      subtitle: " 2 alternative questions New !"

    },
    {
      id:3,
      status: "Improve coverage",
      question: "Are you real estate dealer ?",
      subtitle: " 2 alternative questions New !"

    },
  {
      id:4,
      status: "Underperforming",
      question: "Are you real estate dealer ?",
      subtitle: " 2 alternative questions New !"

    }
  ]
}

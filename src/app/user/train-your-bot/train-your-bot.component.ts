import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train-your-bot',
  templateUrl: './train-your-bot.component.html',
  styleUrls: ['./train-your-bot.component.css']
})
export class TrainYourBotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // =========================================================================
  firstInp:string='';
  secondInp:string='';
  thirdInp:string='';
  fourthInp:string='';
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { TrainYourBotComponent } from './train-your-bot/train-your-bot.component';
import { IntentsComponent } from './intents/intents.component';
import { CatchAllComponent } from './catch-all/catch-all.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SummaryComponent } from './summary/summary.component';
import { AnswersComponent } from './answers/answers.component';
import { DivergenceComponent } from './divergence/divergence.component';
import { FormsModule } from '@angular/forms';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    TrainYourBotComponent,
    IntentsComponent,
    CatchAllComponent,
    AnalyticsComponent,
    SummaryComponent,
    AnswersComponent,
    DivergenceComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }

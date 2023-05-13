import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainYourBotComponent } from './train-your-bot/train-your-bot.component';
import { IntentsComponent } from './intents/intents.component';
import { CatchAllComponent } from './catch-all/catch-all.component';
import { DivergenceComponent } from './divergence/divergence.component';
import { AnswersComponent } from './answers/answers.component';
import { SummaryComponent } from './summary/summary.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path:'train-your-bot',
    component:TrainYourBotComponent
  },
  {
    path:'intents',
    component:IntentsComponent
  },
  {
    path:'catchAll',
    component:CatchAllComponent
  },
  {
    path: 'divergence',
    component:DivergenceComponent
  },
  {
    path: 'answers',
    component:AnswersComponent
  },
  {
    path:'summary',
    component:SummaryComponent
  },
  {
    path:'analytics',
    component:AnalyticsComponent
  },
  {
    path:'faq',
    component:FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

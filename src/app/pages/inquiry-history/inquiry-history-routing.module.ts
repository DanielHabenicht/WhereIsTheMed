import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InquiryHistoryPage } from './inquiry-history.page';

const routes: Routes = [
  {
    path: '',
    component: InquiryHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InquiryHistoryPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InquiryHistoryPageRoutingModule } from './inquiry-history-routing.module';

import { InquiryHistoryPage } from './inquiry-history.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule, InquiryHistoryPageRoutingModule],
  declarations: [InquiryHistoryPage]
})
export class InquiryHistoryPageModule {}

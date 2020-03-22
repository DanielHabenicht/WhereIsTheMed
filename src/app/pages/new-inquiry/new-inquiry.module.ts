import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewInquiryPageRoutingModule } from './new-inquiry-routing.module';

import { NewInquiryPage } from './new-inquiry.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule, NewInquiryPageRoutingModule],
  declarations: [NewInquiryPage]
})
export class NewInquiryPageModule {}

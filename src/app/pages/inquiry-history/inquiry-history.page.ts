import { Component, OnInit } from '@angular/core';
import { DataService, Inquiry } from 'src/app/services/data.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-inquiry-history',
  templateUrl: './inquiry-history.page.html',
  styleUrls: ['./inquiry-history.page.scss']
})
export class InquiryHistoryPage implements OnInit {
  public inquiries: Inquiry[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.refresh();
  }

  public getTime(time: string) {
    return formatDate(new Date(time), 'HH:mm', 'de-DE');
  }

  public refresh(event?: any) {
    this.dataService.queryOldInquiries().subscribe(i => {
      this.inquiries = i;
      if (event.target) {
        event.target.complete();
      }
    });
  }
}

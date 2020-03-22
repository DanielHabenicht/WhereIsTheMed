import { Component, OnInit } from '@angular/core';
import { DataService, People, InquirySummary } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.page.html',
  styleUrls: ['./inquiry.page.scss']
})
export class InquiryPage implements OnInit {
  public people: People[];
  public succeededPeople: People[];
  public failedPeople: People[];
  public summary: InquirySummary = null;
  public id: number | undefined = undefined;
  constructor(private dataService: DataService, private activatedRouter: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.refresh();
  }

  public refresh(event?: any) {
    this.activatedRouter.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      if (this.id == null) {
        this.router.navigateByUrl('tabs/inquiry-history');
      }
      this.dataService.inquiryPeople(this.id).subscribe(people => {
        this.people = people;
        this.succeededPeople = people.filter(p => p.status === 'CONFIRMED');
        this.failedPeople = people.filter(p => p.status == 'CONFIRMED_NEGATIVE');
      });
      this.dataService.inquirySummary(this.id).subscribe(p => {
        this.summary = p;
        if (event.target) {
          event.target.complete();
        }
      });
    });
  }
}

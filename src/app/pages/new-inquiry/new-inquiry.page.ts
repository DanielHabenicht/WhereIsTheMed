import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-inquiry',
  templateUrl: './new-inquiry.page.html',
  styleUrls: ['./new-inquiry.page.scss']
})
export class NewInquiryPage implements OnInit {
  public message: string = '';
  public loading;

  constructor(private dataService: DataService, public loadingController: LoadingController, private router: Router) {}

  async presentLoading() {}
  ngOnInit() {}

  async createLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    this.loading.present();
  }

  public newInquiry() {
    this.createLoading();
    this.dataService.askForMedicine(this.message).subscribe(i => {
      setTimeout(() => {
        this.dataService.queryOldInquiries().subscribe(inq => {
          this.loading.dismiss();
          this.router.navigateByUrl(`tabs/inquiry/${inq[0].id}`);
        });
      }, 500);
    });
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InquiryHistoryPage } from './inquiry-history.page';

describe('InquiryHistoryPage', () => {
  let component: InquiryHistoryPage;
  let fixture: ComponentFixture<InquiryHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InquiryHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

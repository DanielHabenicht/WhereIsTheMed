import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) {}
  askForMedicine(message: string): Observable<void> {
    return this.httpClient.post<void>('/api/alarm/21432', { message: message });
  }

  queryOldInquiries(): Observable<Inquiry[]> {
    return this.httpClient.post<Inquiry[]>('/api/report/alarm-instance/search', {
      recent: true,
      running: true
    });
  }

  inquirySummary(id: number): Observable<InquirySummary> {
    return this.httpClient.get<InquirySummary>(`/api/report/${id}/people/overall-summary`);
  }

  inquiryPeople(id: number): Observable<People[]> {
    return this.httpClient.post<People[]>(`/api/report/${id}/people/search?page=0&size=50`, {});
  }
}

export interface Inquiry {
  id: number;
  alarmNumber: number;
  launchedBy: string;
  alarmName: string;
  message: string;
  status: string;
  dateTime: string;
}

export interface InquirySummary {
  numberOfPeopleInAlarm: number;
  numberOfConfirmationInAlarm: number;
  numberOfNegativeConfirmationInAlarm: number;
}

export interface People {
  firstName: string;
  lastName: string;
  status: string;
}

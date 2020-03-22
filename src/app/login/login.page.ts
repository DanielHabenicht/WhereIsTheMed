import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(private mockAuthService: AuthGuardService, private router: Router) {}

  ngOnInit() {}

  login(form: NgForm) {
    this.mockAuthService.authenticate(form.form.value.email, form.form.value.password);
    this.router.navigateByUrl('');
  }
}

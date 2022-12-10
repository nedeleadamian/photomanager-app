import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public authForm: FormGroup;

  get f(): { [p: string]: AbstractControl } {
    return this.authForm.controls;
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.authForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  login() {
    this.authService
      .login(this.authForm.value.email, this.authForm.value.password)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          localStorage.setItem('accessToken', res.tokens.accessToken);
          void this.router.navigate(['pages']);
        }
      });
  }
}

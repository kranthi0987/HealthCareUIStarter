import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginResponse} from "../shared/loginResponse.model";
import {AuthService} from "../shared/auth.service";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  // sanjay added
  loginReponse: LoginResponse;
  @Input() loginRequest = {email: '', password: ''};
  submitted = false;
  returnUrl: string;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.loginForm.controls;
  }
  loginApiCall(loginRequest: { password: string; email: string }) {
    const loginObservable = this.authService.postLogin(loginRequest);
    loginObservable.subscribe(
      (loginResponse: LoginResponse) => {
        this.loginReponse = loginResponse;
        localStorage.setItem('token', loginResponse.token);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/dashboard']);
      }
    );

  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      this.router.navigate(['/dashboard/main']);
    }
  }
}

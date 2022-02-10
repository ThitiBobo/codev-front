import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  submitted = false;
  loading = false;
  returnUrl: string;

  hide = true;
  matcher = new MyErrorStateMatcher();

  loginForm = new FormGroup({
    login:    new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(3)]),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService)
  {
    this.returnUrl = "/"
  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.returnUrl == this.router.url){
      this.returnUrl = '/'
    }
  }

  get emailInput() { return this.loginForm.get('email'); }
  get passwordInput() { return this.loginForm.get('password'); }

  onSubmit() {
    this.submitted = true;

    this.loading = true;
    this.authService.login(this.loginForm.value.login, this.loginForm.value.password)
      .subscribe(data => {
        this.router.navigate([this.returnUrl])
      })
  }

}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";
import {first} from "rxjs/operators";
import {User} from "../../../../core/models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  returnUrl: string;
  hide = true;
  matcher = new RegisterErrorStateMatcher();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
    this.returnUrl = "/"
  }

  registerForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(3)]),
  });


  get emailInput() {
    return this.registerForm.get('email');
  }

  get passwordInput() {
    return this.registerForm.get('password');
  }

  get usernameInput() {
    return this.registerForm.get('username');
  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.returnUrl == this.router.url){
      this.returnUrl = '/'
    }
  }

  onSubmit() {
    console.log(this.registerForm.value)

    let user: User = new User(
      null,
      this.registerForm.value.email,
      this.registerForm.value.firstname,
      this.registerForm.value.lastname,
      null,
      null)
    this.authService.register(user, this.registerForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {});
  }

}

export class RegisterErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

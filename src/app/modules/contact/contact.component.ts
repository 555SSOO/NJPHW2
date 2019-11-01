import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  authForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder) {
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });}

  ngOnInit() {
  }

  submitForm() {
    const credentials = this.authForm.value;
    this.userService
    .attemptAuth(credentials)
    .subscribe(
      data => this.router.navigateByUrl('/'),
      err => {
        console.log(err);
      }
    );

  }

}

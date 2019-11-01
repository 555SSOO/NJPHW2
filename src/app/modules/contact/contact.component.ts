import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      'message': ['', Validators.required]
    });}

  ngOnInit() {
  }

  submitForm() {
    alert('Thank you for submitting your message!');
  }

}

import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') subForms:NgForm;
  user = {
    email: '',
    pass: '',
    sub: ''
  }
  submit = false;
  defaultSub = 'advanced';

  onSubmit() {
    this.submit = true;

    console.log('Email: ' + this.subForms.value.email);
    console.log('Pass: ' + this.subForms.value.pass);
    console.log('Sub: ' + this.subForms.value.sub);

    this.user.email = this.subForms.value.email;
    this.user.pass = this.subForms.value.pass;
    this.user.sub = this.subForms.value.sub;

    this.subForms.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { RxwebValidators, RxFormBuilder } from "@rxweb/reactive-form-validators"

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitted: boolean = false;
  phone: any;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z]*$')
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(12),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(12),
        Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$")
      ]),
      confirmpassword: new FormControl('', [
        Validators.required,
        RxwebValidators.compare({ fieldName: 'password' })
      ])

    });
  }

  ngOnInit() {
  }

  onRegistrationFormSubmit() {
    this.isSubmitted = true;
    if (this.registrationForm.valid) {
     window.alert ("user registration form submitted");
     window.console.log(this.registrationForm.value);
      
    }
     
  }
  onChange(phone) {
    this.phone = this.phone.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
  }
}  

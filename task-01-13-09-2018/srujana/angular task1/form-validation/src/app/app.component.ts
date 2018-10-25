import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'
import {passValidator} from './customer-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})      
export class AppComponent {
  
  rForm: FormGroup;
  post: any;
  name: string = '';
  email: string = '';
  phoneNo: number;
  password: string = '';  
  cnfpassword: string = '';
  submitted = false;
phone:any;


  constructor(fb: FormBuilder){
    this.rForm = fb.group({
      'name': ['', Validators.required],
      'phoneNo': ['',[Validators.pattern("/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3'")]],
      'email': ['', [Validators.required, Validators.email]],
      'password': [null,[Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$")]],
      'cnfpassword': [null, passValidator]
    });
  }

  get f() { return this.rForm.controls; }

    onSubmit() {
      
        this.submitted = true;

            if (this.rForm.invalid) {
            return alert; 
        }

        alert('SUCCESS!!')
    }
    onChange(phno){
  // console.log(this.phone)
  this.phone=this.phone.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
}
}


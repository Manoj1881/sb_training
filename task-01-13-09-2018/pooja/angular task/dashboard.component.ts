import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
SignupForm: FormGroup;
abcd: any;
fgh: any;
  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.SignupForm = this.FormBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    ApprovalDate : ['', Validators.required],
    abcde : ['', Validators.required],
    efgh : ['', Validators.required],
    hijk : ['', Validators.required],

    date1 : ['', Validators.required],
    date2 : ['', Validators.required],
    date3 : ['', Validators.required],
    date4 : ['', Validators.required],
    date5 : ['', Validators.required],
    remember: true,


  });
}

sdsjdhs() {

}

}

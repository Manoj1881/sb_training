import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { AccordionConfig } from 'ngx-bootstrap/accordion';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers : [{ provide: AccordionConfig, useFactory: getAccordionConfig }]

})
export class DashboardComponent implements OnInit {
SignupForm: FormGroup;
a: any;
b:any;
c:any;
d:any;
e:any;
f:any;
g:any;

h:any;
i:any;
j:any;
k:any;
l:any;
m:any;
n:any;

o:any;
p:any;
s:any;
t:any;
u:any;
q:any;
r:any;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.SignupForm = new FormGroup({
      Keyword: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Criteria: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Springer: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Month: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Week: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Keyword1: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Criteria1: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Springer1: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Month1: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Week1: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Keyword2: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Criteria2: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Springer2: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Month2: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Week2: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      name: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      time: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      time1: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      time2: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      time3: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      date1: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      date2: new FormControl({ value: '' }, Validators.compose([Validators.required])),
    // Keyword: ['', Validators.required],
    // Criteria: ['', Validators.required],
    // Springer: new FormControl({ value: '' }, Validators.compose([Validators.required])),
    // Month:new FormControl({ value: '' }, Validators.compose([Validators.required])),
    // Week:['', Validators.required],
    // Keyword1:['', Validators.required],
    // Criteria1:['', Validators.required],
    // Springer1:['', Validators.required],
    // Month1:['', Validators.required],
    // Week1:['', Validators.required],
    // Keyword2:['', Validators.required],
    // Criteria2:['', Validators.required],
    // Springer2:['', Validators.required],
    // Month2:['', Validators.required],
    // Week2:['', Validators.required],
    // name:['', Validators.required],
    // time:['', Validators.required],
    // time1:['', Validators.required],
    // time2:['', Validators.required],
    // time3:['', Validators.required],
    // date1:['', Validators.required],
    //  date2:['', Validators.required],
    // remember: true,
    
    
  });
}

sdsjdhs() {

}

clear() {
  debugger;
this.a ="";
this.b="";
this.c="";
this.d="";
this.e="";
this.f="";
this.g="";

}

clear1() {
this.h="";
this.i="";
this.j="";
this.k="";
this.l="";
this.m="";
this.n="";
}
clear2(){


this.o="";
this.p="";
this.s="";
this.t="";
this.u="";
this.q="";
this.r="";
}

}

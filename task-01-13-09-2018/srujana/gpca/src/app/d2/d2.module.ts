import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D2Component } from './d2.component';
import {d2Router} from './d2.routing';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(d2Router),
  ],
  declarations: [D2Component]
})
export class D2Module { }

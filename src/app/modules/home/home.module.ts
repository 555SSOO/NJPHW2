import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {CvItemComponent} from "./cv-item/cv-item.component";

@NgModule({
  declarations: [HomeComponent, CvItemComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

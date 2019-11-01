import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {NewsItemComponent} from "./news-item/news-item.component";


@NgModule({
  declarations: [NewsComponent, NewsItemComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NewsModule { }

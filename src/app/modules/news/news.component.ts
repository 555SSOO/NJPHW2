import {Component, OnInit} from '@angular/core';
import {Constants} from "../../shared/constants";
import {Article} from "../../core/models/article.model";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {

  articles: Array<Article>;

  constructor() {
  }

  ngOnInit() {
    this.articles = Constants.ARTICLES;
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../core/models/article.model";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html'
})
export class NewsItemComponent implements OnInit {

  @Input()
  id: String;

  @Input()
  headline: String;

  @Input()
  text: String;

  isLiked: boolean = false;

  constructor() {}

  ngOnInit() {
    let likedArticles: Array = JSON.parse(localStorage.getItem('likedArticles'));
    if(likedArticles.includes(this.id)) {
      this.isLiked = true;
    }
  }

  equalsId(id, element) {
    return element !== id;
  }

  likeItem(){
    this.isLiked = !this.isLiked;
    let likedArticles: Array = JSON.parse(localStorage.getItem('likedArticles'));
    if(likedArticles.includes(this.id)) {
      likedArticles = likedArticles.filter(this.equalsId.bind(this, this.id));
    }
    else {
      likedArticles.push(this.id);
    }
    localStorage.setItem("likedArticles", JSON.stringify(likedArticles));
  }

}

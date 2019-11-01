import {Article} from "../core/models/article.model";
import {CvItem} from "../core/models/cv-item.model";

export class Constants {

  public static get ARTICLE1(): Article {
    return {id: 1, headline: 'Headline1', text: 'Text1', liked: false}
  }
  public static get ARTICLE2(): Article {
    return {id: 2, headline: 'Headline2', text: 'Text2', liked: false}
  }
  public static get ARTICLE3(): Article {
    return {id: 3, headline: 'Headline3', text: 'Text3', liked: false}
  }

  public static get ARTICLES(): Array<Article> {
    return [this.ARTICLE1,this.ARTICLE2,this.ARTICLE3];
  };



  public static get CVEDUCATIONITEM1(): CvItem {
    return {id: 1, headline: 'Headline1', text: 'Text1'}
  }
  public static get CVEDUCATIONITEM2(): CvItem {
    return {id: 2, headline: 'Headline2', text: 'Text2'}
  }
  public static get CVEDUCATIONITEMS(): Array<CvItem> {
    return [this.CVEDUCATIONITEM1,this.CVEDUCATIONITEM2];
  };

  public static get CVEXPERIENCEITEM1(): CvItem {
    return {id: 1, headline: 'Headline1', text: 'Text1'}
  }
  public static get CVEXPERIENCEITEM2(): CvItem {
    return {id: 2, headline: 'Headline2', text: 'Text2'}
  }

  public static get CVEXPERIENCEITEMS(): Array<CvItem> {
    return [this.CVEXPERIENCEITEM1,this.CVEXPERIENCEITEM2];
  };

  public static get CVSKILLITEM1(): CvItem {
    return {id: 1, headline: 'Headline1', text: 'Text1'}
  }
  public static get CVSKILLITEM2(): CvItem {
    return {id: 2, headline: 'Headline2', text: 'Text2'}
  }

  public static get CVSKILLITEMS(): Array<CvItem> {
    return [this.CVSKILLITEM1,this.CVSKILLITEM2];
  };



}

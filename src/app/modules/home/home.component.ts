import { Component, OnInit } from '@angular/core';
import {CvItem} from "../../core/models/cv-item.model";
import {Constants} from "../../shared/constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  cvEducationItems: Array<CvItem>;
  cvExperienceItems: Array<CvItem>;
  cvSkillItems: Array<CvItem>;

  constructor() { }

  ngOnInit() {

    this.cvEducationItems = Constants.CVEDUCATIONITEMS;
    this.cvExperienceItems = Constants.CVEXPERIENCEITEMS;
    this.cvSkillItems = Constants.CVSKILLITEMS;

  }

}

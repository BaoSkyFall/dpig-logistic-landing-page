import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dpig-logistic';
  version = 'Angular version 13.2.3';
  languageType:string ='';
  scrollToTop(){
    window.scroll(0,0);
  }
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {
    const language = localStorage.getItem('language') || 'vi'
    localStorage.setItem('language', language)
    this.languageType = language;
    this.translate.setDefaultLang(this.languageType)
  }

}

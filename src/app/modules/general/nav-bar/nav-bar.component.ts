import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  routeCurrent: string = '';
  languageType = '';

  constructor(public router: Router,
              private route: ActivatedRoute,
              private translate: TranslateService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.routeCurrent = event.url.substring(1);
        console.log(this.routeCurrent);
      }
    });

  }


  ngOnInit(): void {
    const language = localStorage.getItem('language') || 'vi'
    localStorage.setItem('language', language)
    this.languageType = language;
    this.translate.use(this.languageType)


  }

  navigate(route: string) {


    this.routeCurrent = route;

    this.router.navigate([route]);
  }

  changeLanguage() {
    this.languageType = this.languageType == 'en' ? 'vi' : 'en';
    localStorage.setItem('language', this.languageType);
    this.translate.use(this.languageType)
  }
}

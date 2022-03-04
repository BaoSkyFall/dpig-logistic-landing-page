import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    this.translateService.onLangChange.subscribe(res=>{
      this.currentLanguage = res.lang;
    })
  }
  currentLanguage : string = '';
  owlOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: false,
    navSpeed: 1000,
    autoplayTimeout: 7500,
    autoplaySpeed:1000,
    navText: ['<i class="icofont-rounded-double-left"></i>', '<i class="icofont-rounded-double-right"></i>'],
    nav: true,
    freeDrag: true,
    items: 1
  }
  owlFeedBackClient: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplayTimeout: 5000,
    autoplaySpeed:600,
    autoplay: true,
    dots: false,
    navSpeed: 600,
    navText: ['<i class="icofont-rounded-double-left"></i>', '<i class="icofont-rounded-double-right"></i>'],
    nav: true,
    freeDrag: true,
    items: 2
  }
  owlPartnerCompany: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed:600,
    dots: false,
    navSpeed: 600,
    navText: ['<i class="icofont-rounded-double-left"></i>', '<i class="icofont-rounded-double-right"></i>'],
    nav: false,
    freeDrag: true,
    items: 5
  }

  ngOnInit(): void {
    this.currentLanguage = this.translateService.currentLang;
    window.scroll(0,0);
    $(".accordion-title").click(function (e) {
      var accordionitem = $(this).attr("data-tab");
      $("#" + accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();

      $(this).toggleClass("active-title");
      $("#" + accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title");
    });
    if (window.innerWidth <= 991) {
      this.owlFeedBackClient.items = 1;
      this.owlPartnerCompany.items = 3;

    }

  }

}

import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
    $(".accordion-title").click(function (e) {
      var accordionitem = $(this).attr("data-tab");
      $("#" + accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();

      $(this).toggleClass("active-title");
      $("#" + accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title");
    });



  }

}

import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-services-detail-road-freight',
  templateUrl: './services-detail-road-freight.component.html',
  styleUrls: ['./services-detail-road-freight.component.css']
})
export class ServicesDetailRoadFreightComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {

    window.scroll(0,0);

  }

}

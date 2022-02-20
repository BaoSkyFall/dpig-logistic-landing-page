import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  routeCurrent: string = '';

  constructor(public router: Router,
              private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd)
      {
        this.routeCurrent = event.url.substring(1);
        console.log(this.routeCurrent);
      }
    });

    }


  ngOnInit(): void {


  }

  navigate(route: string) {


    this.routeCurrent = route;

    this.router.navigate([route]);
  }
}

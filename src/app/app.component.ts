import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dpis-logistic';
  version = 'Angular version 13.2.3';
  scrollToTop(){
    window.scroll(0,0);
  }



}

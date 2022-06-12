import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  initializeApp(){
    this.chekDarkMode();
    
  }

  chekDarkMode(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDark)
    if(prefersDark.matches){
      document.body.classList.toggle( 'dark');
    }
  }
}

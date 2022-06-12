import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  ngOnInit() {
    
    document.body.setAttribute('data-theme', 'dark');
  }
}

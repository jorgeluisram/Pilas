import { Component } from '@angular/core';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private clipboard: Clipboard) {}
  ngOnInit() {
    
    document.body.setAttribute('data-theme', 'dark');
  }
  Copy(){
    debugger
    alert("a")
    this.clipboard.copy('Hello world');
  }
  facebook(){
    window.open("https://www.facebook.com/PILASGUAT");
  }

}

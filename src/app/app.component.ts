import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tiny-tools';
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: '代码相似度比较', routerLink: ['code-comparison']},
    ];
  }
}

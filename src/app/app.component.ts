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
      {label: '文本变更比较', routerLink: ['code-comparison'], icon: 'pi pi-comment'},
      {label: 'json格式化', routerLink: ['json-formatter'], icon: 'pi pi-code'},
    ];
  }
}

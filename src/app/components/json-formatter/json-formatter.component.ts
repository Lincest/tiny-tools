import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.css']
})
export class JsonFormatterComponent implements OnInit {

  rawJson = '';
  formatJson: any;

  valid: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  format() {
    try {
      this.formatJson = JSON.stringify(JSON.parse(this.rawJson), null, 4);
      console.log('this.formatJson = ', this.formatJson);
      this.valid = true;
    } catch (e) {
      this.formatJson = `<span style="color: red; white-space: pre-wrap">JSON不合法</span>`;
      console.log('error format');
      console.log(e);
      this.valid = false;
    }
  }

  clear() {
    this.rawJson = '';
  }

}

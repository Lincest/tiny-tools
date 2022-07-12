import {Component, OnInit} from '@angular/core';
import {ClipboardService} from 'ngx-clipboard';
import * as JsonToXML from 'js2xmlparser';

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.css']
})
export class JsonFormatterComponent implements OnInit {

  rawJson = '';
  formatJson: any;

  valid: boolean;

  constructor(
    private clipboardApi: ClipboardService
  ) {
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

  compress() {
    try {
      this.formatJson = JSON.stringify(JSON.parse(this.rawJson));
      console.log('this.formatJson = ', this.formatJson);
      this.valid = true;
    } catch (e) {
      this.formatJson = `<span style="color: red; white-space: pre-wrap">JSON不合法</span>`;
      console.log('error compress');
      console.log(e);
      this.valid = false;
    }
  }

  convert2xml() {
    try {
      const parsedJson = JSON.parse(this.rawJson);
      this.formatJson = JsonToXML.parse('root', parsedJson);
      console.log('this.formatJson = ', this.formatJson);
      this.valid = true;
    } catch (e) {
      this.formatJson = `<span style="color: red; white-space: pre-wrap">JSON不合法</span>`;
      console.log('error 2xml');
      console.log(e);
      this.valid = false;
    }
  }

  copy() {
    this.clipboardApi.copy(this.formatJson);
  }

}

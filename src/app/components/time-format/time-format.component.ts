import {Component, OnInit} from '@angular/core';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import {SelectItem} from 'primeng';

@Component({
  selector: 'app-time-format',
  templateUrl: './time-format.component.html',
  styleUrls: ['./time-format.component.css']
})
export class TimeFormatComponent implements OnInit {

  isLocal: true;
  isLocalOptions: SelectItem[] = [
    {value: false, label: 'utc'},
    {value: true, label: '本地'}
  ];
  origin: string;
  format = 'YYYY-MM-DD HH:mm:ss';
  result = {
    // rfc3339: '',
    iso8601: '',
    local: '',
    timestamp10: '',
    timestamp13: '',
    utc: '',
    format: '',
  };

  pattern = {
    // rfc3339: /^((?:(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}(?:\.\d+)?))(Z|[\+-]\d{2}:\d{2})?)$/,
    iso8601: /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/,
  };

  showFormatRef = false;

  constructor() {
    dayjs.extend(utc);
  }

  ngOnInit(): void {
    this.calc();
    console.log(this.result);
  }

  calc() {
    console.log('calc');
    try {
      let date = dayjs(this.origin);
      if (!this.isLocal) {
        date = date.utc();
      }
      if (date.isValid()) {
        console.log(date);
        this.result.iso8601 = date.toISOString();
        this.result.local = date.toString();
        this.result.timestamp10 = date.unix().toString();
        this.result.timestamp13 = date.valueOf().toString();
        this.result.utc = date.format();
        this.result.format = date.format(this.format).toString();
      } else {
        Object.keys(this.result).forEach(k => this.result[k] = 'failed');
        return;
      }
    } catch (e) {
      Object.keys(this.result).forEach(k => this.result[k] = 'failed');
    }
  }

  setFailed() {
    Object.keys(this.result).forEach(k => this.result[k] = 'failed');
  }

  openRef() {
    this.showFormatRef = !this.showFormatRef;
  }
}

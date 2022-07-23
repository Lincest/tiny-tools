import {Component, OnInit} from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-time-format',
  templateUrl: './time-format.component.html',
  styleUrls: ['./time-format.component.css']
})
export class TimeFormatComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit(): void {
    this.calc();
    console.log(this.result);
  }

  calc() {
    console.log('calc');
    try {
      const date = new Date(this.origin);
      if (this.isValidDate(date)) {
        console.log(date);
        this.result.iso8601 = date.toISOString();
        this.result.local = date.toString();
        this.result.timestamp10 = (date.getTime() / 1000).toString();
        this.result.timestamp13 = date.getTime().toString();
        this.result.utc = date.toUTCString();
        this.result.format = dayjs(this.origin).format(this.format).toString();
      } else {
        Object.keys(this.result).forEach(k => this.result[k] = 'failed');
        return;
      }
    } catch (e) {
      Object.keys(this.result).forEach(k => this.result[k] = 'failed');
    }
  }

  // https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
  isValidDate(d: Date) {
    return d instanceof Date && !isNaN(d.valueOf());
  }

  setFailed() {
    Object.keys(this.result).forEach(k => this.result[k] = 'failed');
  }

}

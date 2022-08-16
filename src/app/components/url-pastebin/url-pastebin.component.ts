import {Component, OnInit} from '@angular/core';
import {BitlyClient} from 'bitly';
import * as deflate from 'deflate-js';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {PastebinService} from './pastebin.service';
import {ClipboardService} from 'ngx-clipboard';
import {Pastebin} from './pastebin.model';
import {SelectItem} from 'primeng';

@Component({
  selector: 'app-url-pastebin',
  templateUrl: './url-pastebin.component.html',
  styleUrls: ['./url-pastebin.component.css']
})
export class UrlPastebinComponent implements OnInit {

  text: string;
  show = false;
  errStr: string;
  expired: number;
  expiredOptions: SelectItem[] = [
    {label: '请选择过期时间', value: null},
    {label: '1天', value: 1},
    {label: '7天', value: 7},
    {label: '15天', value: 15},
    {label: '30天', value: 30},
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pastebinService: PastebinService,
    private clipboardApi: ClipboardService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    console.log('id = ', id);
    if (id) {
      this.show = true;
      this.pastebinService.getDataById(id).subscribe(res => {
        if (res.code === 0) {
          this.text = res.data;
        } else {
          this.errStr = `<span style="color: red; white-space: pre-wrap">${res.msg}</span>`;
          console.log('error: ', res.msg);
        }
      });
    }
  }

  copy() {
    this.clipboardApi.copy(this.text);
    confirm('复制成功');
  }

  upload() {
    const data: Pastebin = {
      data: this.text,
      expired: this.expired,
    };
    this.pastebinService.setData(data).subscribe(res => {
      if (res.code === 0) {
        if (confirm('上传成功, 点击确认跳转')) {
          this.router.navigate(['/url-pastebin', res.data]);
        } else {
          confirm('上传失败, error: ' + res.msg);
        }
      }
    });
  }

  copyUrl() {
    this.clipboardApi.copy(location.href);
    confirm('复制成功');
  }
}

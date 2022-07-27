import {Component, OnInit} from '@angular/core';
import {BitlyClient} from 'bitly';
import * as deflate from 'deflate-js';

@Component({
  selector: 'app-url-pastebin',
  templateUrl: './url-pastebin.component.html',
  styleUrls: ['./url-pastebin.component.css']
})
export class UrlPastebinComponent implements OnInit {

  accessToken: string;
  text: string;

  constructor() {
  }

  async ngOnInit() {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const ans: Uint8Array = deflate.deflate(encoder.encode(`我是傻逼`));
    // console.log('encoder.encode = ', encoder.encode('hahahahahahshab'));
    // console.log('ans = ', ans);
    // console.log('ans inflate = ', deflate.inflate(ans));
    const base64Encode = this.base64Encode(ans);
    console.log('base64 before = ', ans);
    console.log('base64 encode = ', base64Encode);
    console.log('base64 decode = ', this.base64Decode(base64Encode));
    console.log('after decode = ', decoder.decode(Uint8Array.from(deflate.inflate(this.base64Decode(base64Encode)))));
  }

  async log() {
    const bitly = new BitlyClient(this.accessToken, {});
    try {
      const url = await bitly.shorten('https://blogbak.roccoshi.top/');
      console.log('url = ', url);
    } catch (e) {
      console.log(e);
    }
  }

  // ref: https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string
  private base64Encode(input: Uint8Array) {
    return btoa(String.fromCharCode.apply(null, input));
  }

  private base64Decode(base64Input: string) {
    const padding = '='.repeat((4 - base64Input.length % 4) % 4);
    const base64 = (base64Input + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}

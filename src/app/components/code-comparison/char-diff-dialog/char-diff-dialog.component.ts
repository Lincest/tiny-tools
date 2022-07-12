import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Change, diffChars, diffJson, diffLines} from 'diff';
import * as _ from 'lodash';

@Component({
  selector: 'app-char-diff-dialog',
  templateUrl: './char-diff-dialog.component.html',
  styleUrls: ['./char-diff-dialog.component.css']
})
export class CharDiffDialogComponent implements OnInit, OnChanges {

  @Input() text1: string;
  @Input() text2: string;

  // 字符对比结果
  charDiffer: Change[] = [];
  charDiffResult = '';
  // 行对比结果
  lineDiffer: Change[] = [];
  lineDiffResult = '';
  // json对比结果
  jsonDiffer: Change[] = [];
  jsonDiffResult = '';


  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    // 字符对比
    this.charDiffer = diffChars(this.text1, this.text2);
    this.charDiffResult = '';
    this.charDiffer.forEach(p => {
      const color = p.added ? '#c7f0d2' : p.removed ? '#fac5cd' : 'white';
      this.charDiffResult += `<span style="background-color: ${color}; white-space: pre-wrap">${p.value}</span>`;
    });

    // 行对比
    this.lineDiffer = diffLines(this.text1, this.text2, {newlineIsToken: true});
    this.lineDiffResult = '';
    this.lineDiffer.forEach(p => {
      const color = p.added ? '#c7f0d2' : p.removed ? '#fac5cd' : 'white';
      this.lineDiffResult += `<span style="background-color: ${color}; white-space: pre-wrap">${p.value}</span>`;
    });

    // json对比
    try {
      this.jsonDiffer = diffJson(JSON.parse(this.text1), JSON.parse(this.text2));
      this.jsonDiffResult = '';
      this.jsonDiffer.forEach(p => {
        console.log('json p = ', p);
        const color = p.added ? '#c7f0d2' : p.removed ? '#fac5cd' : 'white';
        this.jsonDiffResult += `<span style="background-color: ${color}; white-space: pre-wrap">${p.value}</span>`;
      });
    } catch (e) {
      this.jsonDiffResult =  `<span style="color: red; white-space: pre-wrap">JSON不合法</span>`;
    }

  }
}

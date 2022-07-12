import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-code-comparison',
  templateUrl: './code-comparison.component.html',
  styleUrls: ['./code-comparison.component.css']
})
export class CodeComparisonComponent implements OnInit {

  text1 = ''; // 源
  text2 = ''; // 宿

  constructor() {
  }

  ngOnInit(): void {
  }
}

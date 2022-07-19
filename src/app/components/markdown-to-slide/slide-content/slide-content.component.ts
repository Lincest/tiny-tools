import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.css']
})
export class SlideContentComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @Input()
  content: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnChanges(): void {

  }

  ngOnDestroy() {
  }

}

import {AfterViewInit, Component, OnInit} from '@angular/core';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js';

@Component({
  selector: 'app-markdown-to-slide',
  templateUrl: './markdown-to-slide.component.html',
  styleUrls: ['./markdown-to-slide.component.css']
})
export class MarkdownToSlideComponent implements OnInit, AfterViewInit {


  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    Reveal.initialize({
      plugins: [RevealMarkdown],
      parallaxBackgroundImage: '',
      parallaxBackgroundSize: '',
      parallaxBackgroundHorizontal: 200,
      parallaxBackgroundVertical: 50,
    });
  }

}

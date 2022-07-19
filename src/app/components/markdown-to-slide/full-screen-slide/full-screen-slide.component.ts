import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-full-screen-slide',
  templateUrl: './full-screen-slide.component.html',
  styleUrls: ['./full-screen-slide.component.css']
})
export class FullScreenSlideComponent implements OnInit, AfterViewInit {

  prefix = 'LOCAL_STORAGE_MARKDOWN';
  @ViewChild('handler')
  public handler: ElementRef;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe(params => {
      const key = params.key;
      console.log('key = ', key);
      if (key) {
        const localStorageKey = `${this.prefix}_${key}`;
        const content = localStorage.getItem(localStorageKey);
        this.handler.nativeElement.innerHTML = `
      <div class="reveal" id="reveal-slide">
        <div class="slides">
          <section data-markdown>
            <textarea data-template>
              ${content}
            </textarea>
          </section>
        </div>
      </div>
  `;
        Reveal.initialize({
          plugins: [RevealMarkdown],
        });
      }
    });
  }

}

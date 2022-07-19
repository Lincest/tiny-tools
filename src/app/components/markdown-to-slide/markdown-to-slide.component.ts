import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-markdown-to-slide',
  templateUrl: './markdown-to-slide.component.html',
  styleUrls: ['./markdown-to-slide.component.css']
})
export class MarkdownToSlideComponent implements OnInit, AfterViewInit {

  prefix = 'LOCAL_STORAGE_MARKDOWN';
  markdown = '';
  content = null;

  @ViewChild('handler')
  public handler: ElementRef;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe(params => {
      const key = params.key;
      console.log('key = ', key);
      if (key) {
        const localStorageKey = `${this.prefix}_${key}`;
        this.content = localStorage.getItem(localStorageKey);
        this.markdown = this.content;
        console.log('this.content = ', this.content);
        this.generate();
      }
    });
  }

  save() {
    // clear all localstorage with prefix
    console.log('现在localstorage item为: ', Object.entries(localStorage).length);
    Object.entries(localStorage).map(
      x => x[0]
  ).filter(
      x => x.substring(0, this.prefix.length) === this.prefix
    ).map(
      x => localStorage.removeItem(x));
    console.log('现在localstorage item为: ', Object.entries(localStorage).length);
    const d = new Date();
    const suffix = d.valueOf();
    const key = `${this.prefix}_${suffix}`;
    localStorage.setItem(key, this.markdown);
    this.router.navigate([`/markdown-to-slide`], {queryParams: {key: suffix.toString()}}).then(() => location.reload());
  }

  generate() {
    this.handler.nativeElement.innerHTML = `
        <div class="reveal" id="reveal-slide">
          <div class="slides">
            <section data-markdown>
              <textarea data-template>
                ${this.content}
              </textarea>
            </section>
          </div>
        </div>
    `;
    Reveal.initialize({
      plugins: [RevealMarkdown],
      parallaxBackgroundImage: '',
      parallaxBackgroundSize: '',
      parallaxBackgroundHorizontal: 200,
      parallaxBackgroundVertical: 50,
    });
  }


}

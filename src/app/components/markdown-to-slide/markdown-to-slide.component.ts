import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import {ActivatedRoute, Router} from '@angular/router';
import {resolve} from 'chart.js/helpers';

@Component({
  selector: 'app-markdown-to-slide',
  templateUrl: './markdown-to-slide.component.html',
  styleUrls: ['./markdown-to-slide.component.css']
})
export class MarkdownToSlideComponent implements OnInit, AfterViewInit {

  prefix = 'LOCAL_STORAGE_MARKDOWN';
  markdown = `
# 关于zg为什么是神

| 关于zg为什么是神 | 关于zg为什么是神 | 关于zg为什么是神 |
| ---------------- | ---------------- | ---------------- |
| 关于zg为什么是神 | 关于zg为什么是神 | 关于zg为什么是神 |
| 关于zg为什么是神 | 关于zg为什么是神 | 关于zg为什么是神 |
| 关于zg为什么是神 | 关于zg为什么是神 | 关于zg为什么是神 |

---

## 关于zg为什么是神

> 关于zg为什么是神

- 关于zg为什么是神
- 关于zg为什么是神
- 关于zg为什么是神
---

### 关于zg为什么是神

- [ ] 关于zg为什么是神

\`\`\`go
fmt.Printf("关于zg为什么是神")
\`\`\`
  `;
  content = null;

  currentKey = null;

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
      this.currentKey = key;
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
    });
  }

  toFull() {
    this.router.navigate([`/slide-full`], {queryParams: {key: this.currentKey}}).then(() => location.reload());
  }

  onUpload(event) {
    for (const file of event.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.markdown = reader.result.toString();
      };
      reader.readAsText(file);
    }
  }


}

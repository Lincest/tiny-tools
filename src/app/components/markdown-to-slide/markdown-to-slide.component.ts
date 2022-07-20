import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import {ActivatedRoute, Router} from '@angular/router';
import {saveAs} from 'file-saver';
import {MenuItem} from 'primeng';
import {HttpClient} from '@angular/common/http';

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

  @ViewChild('downloadZip')
  public zipDownloader: ElementRef;

  exporting = false;
  activeIndex = null;
  exportItems: MenuItem[] = [
    {
      label: '下载reveal.js相关压缩包', command: () => {
        this.activeIndex = 0;
        const event = new MouseEvent('click', {bubbles: true});
        this.zipDownloader.nativeElement.dispatchEvent(event);
      }
    },
    {
      label: '导出本slide', command: () => {
        this.activeIndex = 1;
        this.exportFile();
      }
    },
    {
      label: '替换压缩包中的index.html, 之后打开index.html',
      command: () => this.activeIndex = 3
    }
  ];

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public http: HttpClient,
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

  exportFile() {
    const htmlTemplate = `
    <!doctype html>
<html>
\t<head>
\t\t<meta charset="utf-8">
\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

\t\t<title>reveal.js</title>

\t\t<link rel="stylesheet" href="dist/reset.css">
\t\t<link rel="stylesheet" href="dist/reveal.css">
\t\t<link rel="stylesheet" href="dist/theme/black.css">

\t\t<!-- Theme used for syntax highlighted code -->
\t\t<link rel="stylesheet" href="plugin/highlight/monokai.css">
\t</head>
\t<body>
\t\t<div class="reveal">
\t\t\t<div class="slides">
\t\t\t\t<section data-markdown>
\t\t\t\t\t<textarea data-template>
\t\t\t\t\t\t ${this.markdown}
\t\t\t\t\t</textarea>
\t\t\t\t  </section>
\t\t\t</div>
\t\t</div>

\t\t<script src="dist/reveal.js"></script>
\t\t<script src="plugin/notes/notes.js"></script>
\t\t<script src="plugin/markdown/markdown.js"></script>
\t\t<script src="plugin/highlight/highlight.js"></script>
\t\t<script>
\t\t\tReveal.initialize({
\t\t\t\thash: true,

\t\t\t\t// Learn about plugins: https://revealjs.com/plugins/
\t\t\t\tplugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
\t\t\t});
\t\t</script>
\t</body>
</html>
    `;
    const blob = new Blob([htmlTemplate], {type: 'text/html'});
    saveAs(blob, 'index.html');
  }
}

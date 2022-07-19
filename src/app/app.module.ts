import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {RouterModule} from '@angular/router';
import {
  ButtonModule,
  CardModule,
  EditorModule,
  FieldsetModule,
  InputTextareaModule,
  MenubarModule,
  PaginatorModule,
  TabMenuModule
} from 'primeng';
import {CodeComparisonComponent} from './components/code-comparison/code-comparison.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CharDiffDialogComponent} from './components/code-comparison/char-diff-dialog/char-diff-dialog.component';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';
import {JsonFormatterComponent} from './components/json-formatter/json-formatter.component';
import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import { MarkdownToSlideComponent } from './components/markdown-to-slide/markdown-to-slide.component';
import { SlideContentComponent } from './components/markdown-to-slide/slide-content/slide-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeComparisonComponent,
    CharDiffDialogComponent,
    SafeHtmlPipe,
    JsonFormatterComponent,
    MarkdownToSlideComponent,
    SlideContentComponent,
  ],
  imports: [
    HighlightModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    RouterModule,
    TabMenuModule,
    EditorModule,
    PaginatorModule,
    InputTextareaModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ButtonModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

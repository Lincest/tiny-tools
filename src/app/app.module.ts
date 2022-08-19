import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {RouterModule} from '@angular/router';
import {
    ButtonModule,
    CardModule, DialogModule,
    EditorModule,
    FieldsetModule, FileUploadModule, InputSwitchModule,
    InputTextareaModule, InputTextModule,
    MenubarModule, MessageModule,
    PaginatorModule, SidebarModule, StepsModule,
    TabMenuModule
} from 'primeng';
import {CodeComparisonComponent} from './components/code-comparison/code-comparison.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CharDiffDialogComponent} from './components/code-comparison/char-diff-dialog/char-diff-dialog.component';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';
import {JsonFormatterComponent} from './components/json-formatter/json-formatter.component';
import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {MarkdownToSlideComponent} from './components/markdown-to-slide/markdown-to-slide.component';
import {FormsModule} from '@angular/forms';
import {LMarkdownEditorModule} from 'ngx-markdown-editor';
import {FullScreenSlideComponent} from './components/markdown-to-slide/full-screen-slide/full-screen-slide.component';
import {HttpClientModule} from '@angular/common/http';
import { TimeFormatComponent } from './components/time-format/time-format.component';
import { UrlPastebinComponent } from './components/url-pastebin/url-pastebin.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ErrPageComponent } from './err-page/err-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeComparisonComponent,
    CharDiffDialogComponent,
    SafeHtmlPipe,
    JsonFormatterComponent,
    MarkdownToSlideComponent,
    FullScreenSlideComponent,
    TimeFormatComponent,
    UrlPastebinComponent,
    ErrPageComponent,
  ],
    imports: [
        HighlightModule,
        BrowserAnimationsModule,
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
        FormsModule,
        LMarkdownEditorModule,
        SidebarModule,
        FileUploadModule,
        HttpClientModule,
        DialogModule,
        StepsModule,
        InputTextModule,
        MessageModule,
        InputSwitchModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
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

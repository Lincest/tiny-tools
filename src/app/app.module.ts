import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {RouterModule} from '@angular/router';
import {CardModule, EditorModule, FieldsetModule, InputTextareaModule, MenubarModule, PaginatorModule, TabMenuModule} from 'primeng';
import { CodeComparisonComponent } from './code-comparison/code-comparison.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CharDiffDialogComponent } from './code-comparison/char-diff-dialog/char-diff-dialog.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CodeComparisonComponent,
    CharDiffDialogComponent,
    SafeHtmlPipe,
  ],
  imports: [
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

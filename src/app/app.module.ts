import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {RouterModule} from '@angular/router';
import {TabMenuModule} from 'primeng';
import { CodeComparisonComponent } from './code-comparison/code-comparison.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeComparisonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    RouterModule,
    TabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

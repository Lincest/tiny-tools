import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CodeComparisonComponent} from './components/code-comparison/code-comparison.component';
import {JsonFormatterComponent} from './components/json-formatter/json-formatter.component';
import {MarkdownToSlideComponent} from './components/markdown-to-slide/markdown-to-slide.component';
import {FullScreenSlideComponent} from './components/markdown-to-slide/full-screen-slide/full-screen-slide.component';
import {TimeFormatComponent} from './components/time-format/time-format.component';
import {UrlPastebinComponent} from './components/url-pastebin/url-pastebin.component';
import {ErrPageComponent} from './err-page/err-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/code-comparison', pathMatch: 'full'},
  {path: 'code-comparison', component: CodeComparisonComponent},
  {path: 'json-formatter', component: JsonFormatterComponent},
  {path: 'markdown-to-slide', component: MarkdownToSlideComponent},
  {path: 'slide-full', component: FullScreenSlideComponent},
  {path: 'time-format', component: TimeFormatComponent},
  {path: 'url-pastebin', component: UrlPastebinComponent},
  {path: 'url-pastebin/:id', component: UrlPastebinComponent},
  {path: '**', component: ErrPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

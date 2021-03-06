import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CodeComparisonComponent} from './components/code-comparison/code-comparison.component';
import {JsonFormatterComponent} from './components/json-formatter/json-formatter.component';
import {MarkdownToSlideComponent} from './components/markdown-to-slide/markdown-to-slide.component';
import {FullScreenSlideComponent} from './components/markdown-to-slide/full-screen-slide/full-screen-slide.component';


const routes: Routes = [
  {path: '', redirectTo: '/code-comparison', pathMatch: 'full'},
  {path: 'code-comparison', component: CodeComparisonComponent},
  {path: 'json-formatter', component: JsonFormatterComponent},
  {path: 'markdown-to-slide', component: MarkdownToSlideComponent},
  {path: 'slide-full', component: FullScreenSlideComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

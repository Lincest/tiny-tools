import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CodeComparisonComponent} from './components/code-comparison/code-comparison.component';
import {JsonFormatterComponent} from './components/json-formatter/json-formatter.component';


const routes: Routes = [
  {path: '', redirectTo: '/code-comparison', pathMatch: 'full'},
  {path: 'code-comparison', component: CodeComparisonComponent},
  {path: 'json-formatter', component: JsonFormatterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

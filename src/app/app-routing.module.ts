import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CodeComparisonComponent} from './code-comparison/code-comparison.component';


const routes: Routes = [
  {path: 'code-comparison', component: CodeComparisonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

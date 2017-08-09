import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { ListComponent }   from './components/list/list.component';
import { NewWordsComponent }   from './components/new-words/new-words.component';


const routes: Routes = [
  { path: 'list',
    component: ListComponent },
  { path: 'new-words',
    component: NewWordsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

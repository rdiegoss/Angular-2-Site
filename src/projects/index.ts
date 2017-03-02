import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { subPage } from './components/projects-page';

const routes: Routes = [
  {path: 'page', component: subPage}
];

@NgModule({
  declarations: [
    subPage
  ],
  imports: [
    RouterModule.forChild(routes),
  ]
})

export class ProjectsModule {}

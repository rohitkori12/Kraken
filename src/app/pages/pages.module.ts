import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  imports: [
    PagesRoutingModule,
  ]
})

export class PagesModule {
}
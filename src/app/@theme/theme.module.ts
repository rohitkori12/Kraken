import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  FooterComponent,
  HeaderComponent,
} from './components';
import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
} from './pipes';
import {
  SampleLayoutComponent,
} from './layouts';


const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SampleLayoutComponent
];



const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe
];


@NgModule({
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [],
    };
  }
}
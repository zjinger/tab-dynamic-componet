import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TabsetComponent } from './core/tabset/tabset.component';
import { TabTplComponent } from './core/tab-tpl/tab-tpl.component';
import { TabContainerDirective } from './directives/tab-container.directive';
import { DynamicTest1Component, DynamicTest2Component, DynamicTest3Component } from './components';


@NgModule({
  declarations: [
    AppComponent,
    TabsetComponent,
    TabTplComponent,
    TabContainerDirective,
    DynamicTest1Component,
    DynamicTest2Component,
    DynamicTest3Component
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot(),
    BrowserAnimationsModule
  ],
  entryComponents: [
    DynamicTest1Component,
    DynamicTest2Component,
    DynamicTest3Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

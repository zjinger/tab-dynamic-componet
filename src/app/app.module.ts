import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TabsetComponent } from './tabset/tabset.component';
import { TabTplComponent } from './tab-tpl/tab-tpl.component';
import { TabContainerDirective } from './directives/tab-container.directive';
import { DynamicTest1Component } from './dynamic-test1/dynamic-test1.component';
import { DynamicTest2Component } from './dynamic-test2/dynamic-test2.component';
import { DynamicTest3Component } from './dynamic-test3/dynamic-test3.component';


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
  entryComponents:[
    DynamicTest1Component,
    DynamicTest2Component,
    DynamicTest3Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

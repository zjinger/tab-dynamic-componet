import { Component, OnInit, Input, ViewChild, Type, ComponentFactoryResolver,AfterViewInit } from '@angular/core';
import { TabContainerDirective } from './../directives/tab-container.directive';

/**
 * Component组件模板
 * ng-template 元素是动态加载组件的最佳选择，因为它不会渲染任何额外的输出
 * tab-host 在这里得到应用
 */
@Component({
  selector: 'app-tab-tpl',
  template:`
    <ng-template tab-host></ng-template>
  `
})
export class TabTplComponent implements OnInit, AfterViewInit {

  @Input() tab: Type<any>;//需要动态加载组件

  @ViewChild(TabContainerDirective) tabHost: TabContainerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.loadComponent();
  }


  /**
   * 加载组件
   */
  loadComponent(){
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.tab);
    let viewContainerRef = this.tabHost.viewContainerRef;
    let componentRef = viewContainerRef.createComponent(componentFactory);
  }



}

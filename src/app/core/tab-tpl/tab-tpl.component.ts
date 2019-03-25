import { Component, OnInit, Input, ViewChild, Type, ComponentFactoryResolver, AfterViewInit, ReflectiveInjector } from '@angular/core';
import { TabContainerDirective } from './../../directives/tab-container.directive';
import { TabItem } from '../../model/tab-item';

/**
 * Component组件模板
 * ng-template 元素是动态加载组件的最佳选择，因为它不会渲染任何额外的输出
 * tab-host 在这里得到应用
 */
@Component({
  selector: 'app-tab-tpl',
  template: `
    <ng-template tab-host></ng-template>
  `
})
export class TabTplComponent implements OnInit, AfterViewInit {
  currentComponent = null;//当前的组件
  @Input() tab: TabItem;//需要动态加载组件

  @ViewChild(TabContainerDirective) tabHost: TabContainerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // this.loadComponent();
    setTimeout(() => {
      this.loadAndPassParams();
    });
  }


  /**
   * 加载组件，不涉及参数传递
   */
  loadComponent() {
    console.log(this.tab);
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.tab.component);
    let viewContainerRef = this.tabHost.viewContainerRef;
    let componentRef = viewContainerRef.createComponent(componentFactory);
  }

  /**
   * 加载组件：使用ReflectiveInjector注入参数
   */
  loadAndPassParams() {
    if (!this.tab.data) {//如果没有传参，默认给一个空对象
      this.tab.data = {};
    }
    let inputProviders = Object.keys(this.tab.data).map(
      (inputName) => {
        return {
          provide: inputName, useValue: this.tab.data[inputName]
        };
      });

    let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
    // We create an injector out of the data we want to pass down and this components injector
    let dynamicComponentContainer = this.tabHost.viewContainerRef;

    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, dynamicComponentContainer.parentInjector);

    // We create a factory out of the component we want to create
    let factory = this.componentFactoryResolver.resolveComponentFactory(this.tab.component);

    // We create the component using the factory and the injector
    let component = factory.create(injector);

    // We insert the component into the dom container
    dynamicComponentContainer.insert(component.hostView);

    // We can destroy the old component is we like by calling destroy
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
  }



}

import { Directive,ViewContainerRef } from '@angular/core';

/**
 * 添加组件之前定义一个锚点来告诉Angular要把组件插入到什么地方
 * tab-host 选择器就是用来标记插入组件（Component）
 */
@Directive({
  selector: '[tab-host]'
})
export class TabContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

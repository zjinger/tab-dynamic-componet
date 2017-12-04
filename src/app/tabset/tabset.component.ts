import { DynamicTest1Component } from './../dynamic-test1/dynamic-test1.component';
import { DynamicTest2Component } from './../dynamic-test2/dynamic-test2.component';
import { DynamicTest3Component } from './../dynamic-test3/dynamic-test3.component';
import { TabItem } from './../model/tab-item';
import { Component, OnInit, Input, Type } from '@angular/core';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.css']
})
export class TabsetComponent implements OnInit {
  //当前选中的tab index
  currentIndex: number = -1;

  tabList: Array<TabItem> = new Array();

  constructor(
  ) {

  }

  ngOnInit() {
    // let obj: TabItem = {
    //   title: "test1",
    //   component: DynamicTest1Component,
    //   unremovable: true,
    //   icon: ''
    // }
    // this.tabList = [obj]
  }
  /**
   * 获取当期tab 的index
   */
  getCurrentIndex(tab) {
    return this.tabList.findIndex((item) => item.title == tab.title);
  }
  /**
   * tab发生改变
   * @param  
   */
  nzSelectChange($event) {
    this.currentIndex = $event.index;
  }

  /**
   * 关闭选中的tab
   */
  onTabClose(tab?: any) {
    if (!this.tabList[this.currentIndex].unremovable) {
      this.tabList.splice(this.currentIndex, 1);
    }
  }

  /**
   * 关闭其他没有选中的所有tabs
   */
  closeOthers() {
    let label = this.tabList[this.currentIndex].title;
    this.tabList = this.tabList.filter(item => item.title == label || item.unremovable);
  }
  /**
   * 添加Component
   * @param value 判断哪个应该添加哪个组件
   */
  addTab(value) {
    let index = this.tabList.findIndex(ele => {
      return ele.title == value;
    })
    let tab: TabItem = new TabItem();
    if (value == "test1") {
      tab = this.generator(value, DynamicTest1Component);
    } else if (value == "test2") {
      tab = this.generator(value, DynamicTest2Component);
    } else if (value == "test3") {
      tab = this.generator(value, DynamicTest3Component);
    }
    if(index==-1){ 
      this.tabList.push(tab);
    }
    this.currentIndex = this.getCurrentIndex(tab);
  }

  generator(title: string, component: Type<any>, unremovable?: boolean, icon?: string): TabItem {
    return { title: title, component: component, unremovable: unremovable ? unremovable : false, icon: icon ? icon : '' };
  }

  ngAfterViewInit() {
  }




}

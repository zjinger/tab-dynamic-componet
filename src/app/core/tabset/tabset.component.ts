import { DynamicTest1Component, DynamicTest2Component, DynamicTest3Component } from '../../components';
import { TabItem } from './../../model/tab-item';
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
    // tslint:disable-next-line: triple-equals
    if (value == 'test1') {
      tab = this.generator(value, DynamicTest1Component);
    } else if (value == 'test2') {
      tab = this.generator(value, DynamicTest2Component);
    } else if (value == 'test3') {
      let data = {
        id: 1, name: '张三', params: {
          address: '广东省深圳市',
          postCode: '000000'
        }
      };
      tab = this.generator(value, DynamicTest3Component);
      tab.data = data;
    } else if (value == 'test4') {
      let data = {
        id: 1, name: '李四', params: {
          address: '广东省东莞市',
          postCode: '10000'
        }
      };
      tab = this.generator(value, DynamicTest3Component);
      tab.data = data;
    }


    if (index == -1) {
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

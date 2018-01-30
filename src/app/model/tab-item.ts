import { Type } from '@angular/core';
export class TabItem {
    title?: string;//标题
    component?: Type<any>;//动态加载的组件
    unremovable?: boolean;//是否可以删除
    icon?: string;//图标
    //修改后加入的
    data?: any;//需要传递的参数
}

//在这个js中专门创建Store的实例对象,引入要使用的初始化方法
import {
  action,
  observable
} from 'mobx-miniprogram'

//创建Store对象并导出
export const store = observable({
  //在此处填写共享的数据
  active: 0,
  menulist: [{
      "pagePath": "/pages/home/home",
      "iconPath": "/assets/images/home/home_icon_home.png",
      "selectedIconPath": "/assets/images/home/home_icon_home_check.png",
      "text": "首页"
    },
    {
      "pagePath": "/pages/customerList/customerList",
      "iconPath": "/assets/images/home/home_icon_cst.png",
      "selectedIconPath": "/assets/images/home/home_icon_cst_check.png",
      "text": "客户"
    },
    {
      "pagePath": "/pages/mine/mine",
      "iconPath": "/assets/images/home/home_icon_mine.png",
      "selectedIconPath": "/assets/images/home/home_icon_mine_check.png",
      "text": "我的"
    }
  ],
  //action 方法，用来修改store中的数据
  updateActive: action(function (step) {
    this.active = step
    return this.active
  })
})
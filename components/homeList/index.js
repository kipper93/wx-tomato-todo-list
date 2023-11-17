// components/homelist/index.js
var app = getApp();
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      listData: {
        type: Object,
        value: {}
      },
      },
    /**
     * 组件的初始数据
     */
    data: {
    },
    /**
     * 组件的方法列表
     */
    methods: {
        openDetail(e) {
            console.log(e);
            let { listdata } = e.currentTarget.dataset
            let data =  {
                ...listdata,
                avatarUrl: app?.globalData?.userInfo?.avatarUrl      
            }
            wx.navigateTo({
                url: `/package/pages/detail/index?data=${JSON.stringify(data)}`, 
              })
        },
      getData(val) {},

      // icon
      changeIcon(e) {
        const { id } = e.currentTarget.dataset
        // api
        console.log('改变icon颜色');
    },
    longPress() {
    //   this.triggerEvent("openAddDialog",{data:this.properties.listData})
    }
    },
   
  })
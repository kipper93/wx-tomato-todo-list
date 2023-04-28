// components/homelist/index.js
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
      getData(val) {},

      // icon
      changeIcon(e) {
        const { id } = e.currentTarget.dataset
        // api
        console.log('改变icon颜色');
    },
    longPress() {

      console.log(this.properties.listData);


      this.triggerEvent("openAddDialog",{data:this.properties.listData})


    }
    },
   
  })
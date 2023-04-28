// pages/location/index.js



Page({

    /**
     * 页面的初始数据
     */
    data: {
        height: 'auto',
        markers: [],
        latitude: '',
        longitude: '',
        longitude: 112.587623, //地图界面中心的经度
        latitude: 37.860502, //地图界面中心的纬度
        markers: [{
                id: 0,
                iconPath: "../../assets/images/home/icon-test_1.png",
                latitude: 43.70806,
                longitude: 124.20405,
                width: 28,
                height: 32
            },
            {
                id: 1,
                iconPath: "../../assets/images/home/icon-test.png",
                latitude: 29.284612,
                longitude: 108.165372,
                width: 28,
                height: 32
            },
        ],
        polyline: [{
            points: [{
                    latitude: 43.70806,
                    longitude: 124.20405,
                },
                {
                    latitude: 29.284612,
                    longitude: 108.165372,
                },

            ],
            color: "#FA7556", //线的颜色
            width: 2, //线的宽度
            // dottedLine:true,//虚线
            arrowLine: true, //线内箭头
        }]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // var bmap = require('../../libs/bmap-wx.js')
        //   //保证wx.getSystemInfo的回调函数中能够使用this
        //   var that = this
        //   //构造百度地图api实例
        //   let BMap = new bmap.BMapWX({
        //        ak: 'mY5e3B7spe2hG9mWO9a1spny0YiCfjF5'
        //   })
        //   //调用wx.getSystemInfo接口，然后动态绑定组件高度
        //   wx.getSystemInfo({
        //       success: function (res) {            
        //           that.setData({
        //               height: res.windowHeight
        //           })
        //       }
        //   })

        // var that = this;

        // wx.getLocation({
        //     type: "wgs84",
        //     success: function (res) {
        //         // var latitude = res.latitude;
        //         // var longitude = res.longitude;
        //         // console.log("当前位置的经纬度为：", res.latitude, res.longitude);
        //         // that.setData({
        //         //     latitude: res.latitude,
        //         //     longitude: res.longitude,
        //         // })
        //     }
        // })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})
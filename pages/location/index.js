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

    openBack() {
        wx.navigateTo({
            url: `/package/pages/back/index`,
        })
    },
    openUser() {
        wx.navigateTo({
            url: `/package/pages/back/index`,
        })
    },
})
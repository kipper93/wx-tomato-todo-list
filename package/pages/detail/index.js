// components/homelist/index.js
Page({
    data: {
        listData: {
            avatarUrl:'',
            icon_state:0,
            image_url:'',
            title:'',
            text:'',
            name:'',
            date:new Date()
        }
    },

    onLoad(option) {
        let obj = JSON.parse(option.data)
        this.setData({
            listData: obj
        })
    },
    previewImage(e) {
        // let indx = e.currentTarget.dataset.index // 找到点击图片的索引位置
        wx.previewImage({
          current: e.currentTarget.dataset.url, // 当前显示图片的http链接，将点击图片的索引数指定好
          urls: [e.currentTarget.dataset.url] // 需要预览的图片http链接列表
        })
    },

})
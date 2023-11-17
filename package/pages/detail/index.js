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


})
// package/pages/back/index.js
import {
    list,
    videoList
} from '../../../api/back'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500,
        toView: 'green',
        backgroundVideo:[]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    previewImage(e) {
        console.log(e);
        // let indx = e.currentTarget.dataset.index // 找到点击图片的索引位置
        wx.previewImage({
          current: e.currentTarget.dataset.url, // 当前显示图片的http链接，将点击图片的索引数指定好
          urls: [e.currentTarget.dataset.url] // 需要预览的图片http链接列表
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    async onLoad() {
        let data = await list()
        let dataVideo = await videoList()
        console.log(dataVideo);
        this.setData({
            list: data,
            backgroundVideo: dataVideo
        })


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
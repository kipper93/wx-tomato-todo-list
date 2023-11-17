// pages/home/home.js
import {
    homeList,
    updateHomeList
} from '../../api/home'
var app = getApp();
Page({
    data: {
        userInfo: null,
        defaultDate: new Date(),
        listData: [],
        listDialogShow: false,
        fileList: [],
        id: 0,
        text: '',
        title: '',
        icon_state: 5,
        weatherData: '',
        photoList: null
    },
    onChangeRate(event) {
        this.setData({
            icon_state: event.detail,
        });
    },
    beforeRead(event) {
        const {
            file,
            callback
        } = event.detail;
        callback(file.type === 'image');
    },
    // 选择本地图片
    uploadImg(imgSrcList) {
        var that = this;
        let {
            photoList
        } = this.data;
        wx.showLoading({
            title: "加载中"
        });
        wx.uploadFile({
            url: app.globalData.ip + '/uploadImg',
            filePath: imgSrcList, // 本地图片临时路径
            name: "image", //  上传图片key
            success: function (res) {
                wx.hideLoading();
                //  成功以后的回调
                if (res.statusCode == 200) { //  请求状态拦截
                    let data = JSON.parse(res.data)
                    that.setData({ //  添加进data参数中  //  后端返回的图片地址
                        photoList: app.globalData.ip + data.data.path
                    })
                }
            },
            fail(err) {
                //  失败的回调
            }
        })
    },
    choosePhoto(e) {
        let that = this
        wx.chooseMedia({
            count: 1,
            mediaType: 'image',
            success(res) {
                let {
                    tempFiles
                } = res
                tempFiles.forEach((item, index) => {
                    that.uploadImg(item.tempFilePath) // 循环执行上传放法，实现多张图片，同时上传
                })
            },
            fail(err) {
                console.log(err)
            }
        })
    },
    onClose() {
        this.setData({
            listDialogShow: false,
            fileList: [],
            text: '',
            title: '',
        })
    },
    onChange(event) {
        this.setData({
            [event.currentTarget.dataset.type]: event.detail
        })
    },
    repair0(m) {
        return m < 10 ? '0' + m : m
    },
    formatting(time) {
        var time = new Date(time);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y + '-' + this.repair0(m) + '-' + this.repair0(d) + ' ' + this.repair0(h) + ':' + this.repair0(mm) + ':' + this.repair0(s);
    },
    dialogConfirm() {
        const {
            title,
            text,
            photoList,
            icon_state
        } = this.data
        if (title !== '' || text !== '' || photoList == '' ) {
            let params = {
                name: app?.globalData?.userInfo?.nickName || 'Yep',
                icon_state,
                time: this.formatting(new Date()),
                url: `${photoList}`,
                title,
                text,
                avatarUrl: app?.globalData?.userInfo?.avatarUrl  
            }
            let data = updateHomeList(params);
            this.setData({
                listData: data,
                listDialogShow: false,
                photoList: null,
                text: '',
                title: '',
            })
            this.getList()
        }
    },
    openAddDialog() {
        this.setData({
            listDialogShow: true
        })
    },
    async getList() {
        let data = await homeList()
        data.map((item) => {
            item.date = this.formatting(new Date(item.date).getTime())
        })
        this.setData({
            listData: data
        })

    },
    onLoad() {
        this.getList()
    },
    onPullDownRefresh() {
        this.getList()
    }
})
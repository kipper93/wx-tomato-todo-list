// pages/home/home.js

import {
    homeList,
    updateHomeList,
    editHomeList
  } from '../../api/home'


var util = require('../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    defaultDate: new Date(),
    listData: [],
    listDialogShow: false,
    fileList: [],
    id: 0,
    text: '',
    head: '',
    icon_state: 5,
    weatherData: '',
  },
  onChangeRate(event) {
    this.setData({
      icon_state: event.detail,
    });
  },
  detail() {
    // let tmplId = 'ZFrAd6-aMBSQyMCUmn11O6AYnlJhQwsaBuyEa1-1QLo'
    // wx.requestSubscribeMessage({
    //   tmplIds: ['ZFrAd6-aMBSQyMCUmn11O6AYnlJhQwsaBuyEa1-1QLo'],
    //   success: res => {
    //     console.log(res);
    //     console.log(res[tmplId])
    //     if (res[tmplId] === 'accept') {
    //       console.log('允许')
    //     }
    //     if (res[tmplId] === 'reject') {
    //       console.log('拒绝')
    //     }
    //   },
    //   fail: err => {
    //     console.log('订阅失败')
    //   }
    // })

  },
  beforeRead(event) {
    const {
      file,
      callback
    } = event.detail;
    callback(file.type === 'image');
  },
  deleteImage(e) {
    let {
      index
    } = e.detail
    let {
      fileList
    } = this.data
    let arr = fileList.splice(index, 1)
    this.setData({
      fileList: arr
    })
  },
  afterRead(event) {
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    const {
      file
    } = event.detail;
    const {
      fileList = []
    } = this.data;
    const that = this
    wx.uploadFile({
      url: app.globalData.ip + '/upload', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      success(res) {
        // 上传完成需要更新 fileList
        const data = JSON.parse(res.data)
        console.log(data);
        fileList.push({
          ...file,
          url: app.globalData.ip + '/' + data.path
        });

        that.setData({
          fileList
        });
      },
      fail: function (err) {
        console.log(err)
      }
    });
  },
  onClose() {
    this.setData({
      listDialogShow: false,
      fileList: [],
      text: '',
      head: '',
    })
  },
  onChange(event) {
    this.setData({
      [event.currentTarget.dataset.type]: event.detail
    })
  },
  dialogConfirm() {
    const {
      head,
      text,
      fileList,
      icon_state,
      id
    } = this.data

    let params = {
      name: app?.globalData?.userInfo?.nickName || 'Yep',
      icon_state,
      time: util.formatTime(new Date()),
      url: fileList[0]?.url,
      head,
      text,
      id
    }

    if (params.name === '' || params.time === '' || params.url === undefined || params.head === '' || params.text === '') {
      wx.showToast({
        title: '填写全部信息',
        icon: 'error',
        duration: 1500
      })
      return
    } else {
      if (id === 0) {
        let data = updateHomeList(params);
        this.setData({
            listData: data
        })
      } else {
        let data = editHomeList(params);
        this.setData({
            listData: data
        })

      }

      this.setData({
        listDialogShow: false,
        fileList: [],
        text: '',
        head: '',
      })
    }
  },
  openAddDialog(e) {
    if (e.type !== 'tap') {
      const {
        head,
        text,
        icon_state,
        url,
        id
      } = e.detail?.data
      this.setData({
        fileList: [{
          url
        }],
        head,
        text,
        icon_state,
        id
      })
    }
    this.setData({
      listDialogShow: true
    })
  },
  async getList() {    
    let data = await homeList()
    
    this.setData({
        listData: data
    })

  },
  onLoad(options) {
    this.getList()
  },
  onPullDownRefresh() {
    this.getList()
  }
})
// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    wx.setInnerAudioOption({
        mixWithOther: true,
   
        obeyMuteSwitch: false,
   
        success: function (e) {
   
          console.log(e)
   
          console.log('play success')
   
        },
   
        fail: function (e) {
   
          console.log(e)
   
          console.log('play fail')
   
        }
   
      })
  },
  globalData: {
    userInfo: null,
    ip:"http://"+"8.139.6.250"+":8000",
    // wsip:"ws://"+"8.139.6.250"+":8000"
    // ip:"http://"+"127.0.0.1"+":8000",
    // wsip:"ws://"+"127.0.0.1"+":8000"
  }
})

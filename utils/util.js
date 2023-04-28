// const formatTime = date => {
//     const year = date.getFullYear()
//     const month = date.getMonth() + 1
//     const day = date.getDate()
//     const hour = date.getHours()
//     const minute = date.getMinutes()
//     const second = date.getSeconds()

//     return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
// }

// const formatNumber = n => {
//     n = n.toString()
//     return n[1] ? n : `0${n}`
// }

// /**
//  * 封封微信的的request
//  */
// function request(url, data = {}, method = "GET") {
//     return new Promise(function (resolve, reject) {
//         wx.request({
//             url: url,
//             data: data,
//             method: method,
//             header: {
//                 'Content-Type': 'application/json',
//                 'X-Nideshop-Token': wx.getStorageSync('token')
//             },
//             success: function (res) {
//                 console.log("success");

//                 if (res.statusCode == 200) {

//                     if (res.data.errno == 401) {
//                         //需要登录后才可以操作

//                         let code = null;
//                         return login().then((res) => {
//                             code = res.code;
//                             return getUserInfo();
//                         }).then((userInfo) => {
//                             //登录远程服务器
//                             request(api.AuthLoginByWeixin, {
//                                 code: code,
//                                 userInfo: userInfo
//                             }, 'POST').then(res => {
//                                 if (res.errno === 0) {
//                                     //存储用户信息
//                                     wx.setStorageSync('userInfo', res.data.userInfo);
//                                     wx.setStorageSync('token', res.data.token);

//                                     resolve(res);
//                                 } else {
//                                     reject(res);
//                                 }
//                             }).catch((err) => {
//                                 reject(err);
//                             });
//                         }).catch((err) => {
//                             reject(err);
//                         })
//                     } else {
//                         resolve(res.data);
//                     }
//                 } else {
//                     reject(res.errMsg);
//                 }

//             },
//             fail: function (err) {
//                 reject(err)
//                 console.log("failed")
//             }
//         })
//     });
// }

// function get(url, data = {}) {
//     return request(url, data, 'GET')
// }

// function post(url, data = {}) {
//     return request(url, data, 'POST')
// }



// module.exports = {
//     formatTime,
//     request,
//     get,
//     post,
// }



var app = getApp()

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  //   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  return [year, month, day].map(formatNumber).join('-')
}

function getMessage(id, obj) {
  wx.request({
    url: app.globalData.ip + '/getMsg.php',
    data: {
      id: id
    },
    method: "POST",
    header: {
      'x-my-custom-header': 'some value'
    },
    success: function (res) {
      console.log(res)
      obj.setData({
        message: res.data
      })
    },
    fail: function (err) {
      console.log(err);
    }
  })
}

function getUser(obj) {
  obj.setData({
    hidden: false
  })
  wx.request({
    url: app.globalData.ip + '/home',
    data: {},
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
      setTimeout(function () {
        obj.setData({
          list: res.data,
          hidden: true,
          toast1Hidden: false,
          toastText: "拿到数据"
        })
        wx.stopPullDownRefresh()
      }, 3000)

    },
    fail: function (err) {
      setTimeout(function () {
        obj.setData({
          hidden: true,
          toast1Hidden: false,
          toastText: "请检查server"
        })
        wx.stopPullDownRefresh()
      }, 3000)
      console.log(err);
    }
  })
}


function getMoments(obj) {
  wx.request({
    url: app.globalData.ip + '/getMoments.php',
    data: {},
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
      obj.setData({
        moments: res.data
      })
    },
    fail: function (err) {
      console.log(err);
    }
  })
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  getMessage: getMessage,
  getUser: getUser,
  getMoments: getMoments,
}
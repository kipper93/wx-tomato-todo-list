const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const FORM = 'FORM';
const DELETE = 'DELETE';
const PATCH = 'PATCH';

// 本地1
export const baseURL = 'http://192.168.120.36:8022';

// export const baseURL = 'https://wsxk.care4u.cn/tomato';

const request = async (method, url, data, type = 'application/json') => {
  return new Promise(function (resolve, reject) {
    let userToken = wx.getStorageSync('token');
    let header = {
    //   "Authorization": userToken || '',
      'content-type': type,
    };
    wx.request({
      url: baseURL + url,
      method: method,
      data: method === POST ? JSON.stringify(data) : data,
      header,
      success(result) {
        const status = result.statusCode
        const res = result.data
        if (status === 200) {
          // 请求成功
          resolve(res);
        } else if(status === 203){
          // 无权限
          resolve(res);
        }else if(status === 401) {
          // 登录超时
          wx.showToast({
            title: res.msg || res.data.msg,
            icon: 'error',
            duration: 1000
          })
          wx.clearStorage()
          setTimeout(()=>{
            wx.redirectTo({
              url: '/pages/index/index',
            })
          },1000)
        } else {
          //其他异常
          wx.showToast({
            title: res.msg || res.data.msg,
            icon: 'error',
            duration: 1500
          })
          reject('运行时错误,请稍后再试');
        }
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

export default request;
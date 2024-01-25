// 在js文件中


import Scratch from '../../../assets/js/scratch.js'
import {
    scratchList,
} from '../../../api/home.js'
Page({
 
    /**
     * 页面的初始数据
     */
    data: {
          showGjBth : true,
          again:false,
          resaultSrc:'../../../assets/images/home/2023-11-6-22-32-20-917.jpeg',
          prizes:[
            '安宥真小卡 金额不限',
            '🧧红包50',
            '🧧红包100',
            '✈️一次旅行',
            '🍲一顿饭',
            '😁谢谢惠顾',
            '🧧红包-50',
            '🧧红包-100',
            '📖送一本书给小刘',
            '🎁送个礼物给小刘'
          ]
    },
      //刮奖设置
      gj(){
        let This = this;
        new Scratch(This, {
          canvasId: 'canvas-demo'
        })
        //请求获取结果图片
        This.setData({
            showGjBth : false,
            again:false,
            resaultSrc:'../../../assets/images/home/2023-11-6-22-32-20-917.jpeg',
        });
      },
      //刮到指定区域大小后 刮卡已刮干净
      clearCanvas(){
          if(!this.data.again){
              console.log('刮卡已刮干净啦！');
              const randomPrize = this.data.prizes[Math.floor(Math.random() * this.data.prizes.length)];  
              this.setData({
                randomPrize:randomPrize
              })
                wx.showToast({  
                title: randomPrize,  
                icon: 'success'  
                });
                // 接口储存数据
                let data = scratchList({text:randomPrize});
                console.log(data);
          }
          this.setData({
              again : true,
          });
      }
})
  
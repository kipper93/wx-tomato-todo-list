var app = getApp();
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    background: [
      {
        src: app.globalData.ip + '/public/upload/an_1.JPG'
      },
      {
        src: app.globalData.ip + '/public/upload/an_2.JPG'
      },
      {
        src: app.globalData.ip + '/public/upload/an_3.JPG'
      },
      {
        src: app.globalData.ip + '/public/upload/an_4.JPG'
      },
      {
        src: app.globalData.ip + '/public/upload/an_5.JPG'
      },
      {
        src: app.globalData.ip + '/public/upload/an_6.JPG'
      },
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    toView: 'green',
    memorialList: [{
        name: '小严',
        date: '1998-09-08',
        icon: 1
      },
      {
        name: '小刘',
        date: '1993-05-15',
        icon: 1
      },
      {
        name: '莎莎',
        date: '2021-09-07',
        icon: 1
      },
      {
        name: '夕夕',
        date: '2021-05-30',
        icon: 1
      },
      {
        name: '',
        date: '2021-12-03',
        icon: 2
      }
    ]
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },
  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
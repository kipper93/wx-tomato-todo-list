import {
    list
} from '../../api/memorial'

Page({
    onShareAppMessage() {
        return {
            title: 'swiper',
            path: 'page/component/pages/swiper/swiper'
        }
    },

    data: {
        background: [],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500,
        toView: 'green',
        memorialList: [{
                name: '小严',
                date: '1998-09-08',
                icon: 1,
                age: 0
            },
            {
                name: '小刘',
                date: '1993-05-15',
                icon: 1,
                age: 0
            },
            {
                name: '莎莎',
                date: '2021-09-07',
                icon: 1,
                age: 0
            },
            {
                name: '夕夕',
                date: '2021-05-30',
                icon: 1,
                age: 0
            },
            {
                name: '',
                date: '2021-12-03',
                icon: 2,
                day: 0
            }
        ],
        countdown_time: 0
    },

    async onLoad() {
        let data = await list()
        this.setData({
            background: data,
        })
        this.getAgeDay()
    },
    // 计算年龄
    getAge(birthday,type) {
        // 新建日期对象
        let date = new Date()
        // 今天日期，数组，同 birthday
        let today = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
        // 分别计算年月日差值
        let age = today.map((value, index) => {
            return value - birthday[index]
        })
        // 当天数为负数时，月减 1，天数加上月总天数
        if (age[2] < 0) {
            // 简单获取上个月总天数的方法，不会错
            let lastMonth = new Date(today[0], today[1], 0)
            age[1]--
            age[2] += lastMonth.getDate()
        }
        // 当月数为负数时，年减 1，月数加上 12
        if (age[1] < 0) {
            age[0]--
            age[1] += 12
        }
        let Age = type === 1 ?  age[0] + '岁' + age[1] + '月' + age[2] + '天' : age[0] + '年' + age[1] + '月' + age[2] + '天'
        return Age
    },
    getAgeDay() {
        let {
            memorialList
        } = this.data
        memorialList.map((item) => {
            if (item.icon === 1) {
                item.age = this.getAge(item.date.split('-'), 1)
            } else {
                item.day = this.getAge(item.date.split('-'), 2)
            }
        })
        this.setData({
            memorialList
        })

    },
    onReady() {
        this.getTime()
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
    },
    //   计算倒计时的时间
    getTime() {
        let that = this
        setInterval(function () {
            let inputTime = +new Date('2024-10-11 00:00:00')
            let nowTime = +new Date(); //当前时间的时间戳
            let times = (inputTime - nowTime) / 1000; //毫秒转化为秒

            var d = parseInt(times / 60 / 60 / 24); //天数的获取
            d = d < 10 ? '0' + d : d; //小于10补0操作
            var h = parseInt(times / 60 / 60 % 24);
            h = h < 10 ? '0' + h : h;
            var m = parseInt(times / 60 % 60);
            m = m < 10 ? '0' + m : m;
            var s = parseInt(times % 60);
            s = s < 10 ? '0' + s : s;

            that.setData({
                countdown_time: d + '天' + h + '时' + m + '分' + s + '秒'
            })
            return d + '天' + h + '时' + m + '分' + s + '秒'; //必须有返回值
        }, 1000)
    }
})
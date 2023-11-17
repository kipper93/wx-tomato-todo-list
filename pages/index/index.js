// 获取应用实例
const app = getApp()
Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
        audioCtx: null,
        // 播放器列表数据
        playlist: [{
            id: 1,
            title: "christmas is all around",
            singer: '真爱至上',
            src: 'https://mvwebfs.ali.kugou.com/202311152126/8326c9a280f4489a53169d370f7e2c92/v2/94dd0a3015df130599ab0c5558ee80fb/G097/M03/16/0D/AYcBAFj1f1OAd7PCBKMZ-ARaVjc680.mp4',
            converImgUrl: '../images/yhm.png'
        }],
        musicState: true
    },
    // 事件处理函数
    bindViewTap() {
        wx.switchTab({
            url: '../list/list'
        })
    },
    onLoad() {
        this.audioCtx = wx.createInnerAudioContext();
        this.audioCtx.loop = true
        this.setMusic(0);
        this.audioCtx.play();
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            })
        }
    },
    getUserProfile() {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                const nickNme = JSON.parse(res.rawData)
                this.setData({
                    userInfo: nickNme,
                    hasUserInfo: true
                })
                app.globalData.userInfo = nickNme
                wx.switchTab({
                    url: `/pages/home/home?userInfo=${nickNme}`,
                })

            }
        })
    },
    getUserInfo(e) {
        // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
        console.log(e)

        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })

        wx.switchTab({
            url: '/pages/home/home',
        })

    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
 
        
    },
    setMusic(index) {
        let music = this.data.playlist[index];
        this.audioCtx.src = music.src;
        this.setData({
            playIndex: index,
        })
    },
    getMusic() {
        this.setData({
            musicState: false,
        })
        this.audioCtx.pause();
    },
    stopMusic() {
        this.setData({
            musicState: true,
        })
        this.audioCtx.play();
    }
})

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
            singer: 'Billy Mack',
            src: 'https://lu-sycdn.kuwo.cn/8d6c11e609044a7b9d9198bf714fa18b/65b1c053/resource/n1/12/47/1164744599.mp3?from=vip',
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
    scratchTop() {
        wx.navigateTo({
            url: '/package/pages/scratchCard/index'
        })
    },
    onLoad() {
        this.audioCtx = wx.createInnerAudioContext();
        this.audioCtx.loop = true
        this.setMusic(0);
        this.audioCtx.play();
        // if (wx.getUserProfile) {
        //     this.setData({
        //         canIUseGetUserProfile: true
        //     })
        // }
    },
    onGetuserinfo(e) {
        const {
            userInfo
        } = e?.detail
        const { nickNme } = userInfo
        this.setData({
            userInfo: nickNme,
            hasUserInfo: true
        })
        app.globalData.userInfo = nickNme
        wx.switchTab({
            url: `/pages/home/home?userInfo=${nickNme}`,
        })
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
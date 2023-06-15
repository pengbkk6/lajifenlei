/**
 * 作者：编程小石头
 * 微信：2501902696
 */
const app = getApp()
const db = wx.cloud.database()
Page({
  data: {
    searchKey: ''
  },

  //获取用户输入的内容
  getSearch(e) {
    this.setData({
      searchKey: e.detail.value
    })

  },
  //触发搜索事件
  goSearch() {
    let searchKey = this.data.searchKey
    console.log('触发了搜索', searchKey)
    if (searchKey && searchKey.length > 0) {
      //搜索的触发写在这里
      wx.navigateTo({
        url: '/pages/search/search?searchKey=' + searchKey + '&type=0',
      })
    } else {
      wx.showToast({
        icon: 'error',
        title: '搜索词为空',
      })
    }
  },
  onLoad() {
    this.getLunbotu()

  },
  onShow() {
    this.getVideos()
  },

  // 获取顶部轮播图
  getLunbotu() {
    db.collection('news')
      .where({
        tuijian: true
      }).get()
      .then(res => {
        console.log('轮播图数据', res)
        this.setData({
          topList: res.data
        })
      })
  },
  // 获取视频列表
  getVideos() {
    wx.cloud.callFunction({
      name: 'videoFun',
      data: {
        action: "getList"
      }
    }).then(res => {
      console.log('视频列表', res)
      this.setData({
        list: res.result.data
      })
    })
  },
  // 去视频列表页
  video() {
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },
  // 去视频详情页
  goVideoDetail(e) {
    wx.navigateTo({
      url: '/pages/videoDetail/videoDetail?id=' + e.currentTarget.dataset.id,
    })
  },
  // 去图片识别页
  camera() {
    wx.navigateTo({
      url: '/pages/camera/camera',
    })
  },
  // 去语音识别
  sound() {
    wx.navigateTo({
      url: '/pages/sound/sound',
    })
  },
  // 去回收页
  huishou() {
    wx.navigateTo({
      url: '/pages/huishou/huishou',
    })
  },
  // 新闻文章
  news() {
    wx.switchTab({
      url: '/pages/news/news',
    })
  },
  // 去答题
  questions() {
    wx.switchTab({
      url: '/pages/questions/questions',
    })
  },
  // 查看分类
  sort() {
    wx.switchTab({
      url: '/pages/sort/sort',
    })
  },
  // 投诉电话
  tousu() {
    wx.makePhoneCall({
      phoneNumber: '12345',
    })
  },
  onShareAppMessage: function () {

  },
  onShareTimeline: function () {

  }

})
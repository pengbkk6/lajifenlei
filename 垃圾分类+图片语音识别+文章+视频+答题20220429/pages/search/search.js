const db = wx.cloud.database()
Page({
  data: {
    tabs: ["垃圾分类", "搜索文章"],
    // 默认选中菜单
    currentTab: 0,
    searchKey: '',
    list: [], //购物车数据
  },
  // 选中顶部导航栏
  selectTab(event) {
    let index = event.currentTarget.dataset.index
    console.log("用户点击了", index)
    this.setData({
      currentTab: index,
      type: index
    })

    this.getSearchData(index)
  },

  onLoad: function (opt) {
    this.setData({
      searchKey: opt.searchKey
    })
    this.setData({
      currentTab: opt.type,
      type: opt.type
    })
    this.getSearchData()
  },
  //获取用户输入的内容
  getSearch(e) {
    this.setData({
      searchKey: e.detail.value
    })
  },
  //触发文章搜索事件
  goSearch() {
    console.log('触发了搜索', searchKey)
    let searchKey = this.data.searchKey
    if (searchKey && searchKey.length > 0) {
      this.getSearchData()
    } else {
      wx.showToast({
        icon: 'error',
        title: '搜索词为空',
      })
    }
  },
  // 获取搜索数据
  getSearchData() {
    if (this.data.type == 0) {
      wx.cloud.database().collection('refuse').where({
          name: db.RegExp({
            regexp: this.data.searchKey,
            options: 'i'
          }),
        }).get()
        .then(res => {
          console.log('搜索结果', res)
          this.setData({
            refuseList: res.data
          })
        })
    } else {
      wx.cloud.callFunction({
        name: 'news',
        data: {
          action: 'search',
          searchKey: this.data.searchKey
        }
      }).then(res => {
        console.log('搜索结果', res)
        this.setData({
          list: res.result.data
        })
      })
    }

  },
  // 去垃圾详情页
  goForumDetail(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id,
    })
  }
})
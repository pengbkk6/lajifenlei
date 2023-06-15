const app = getApp()
Page({
  data: {
    accessToken: "",
    isShow: false,
    results: [],
    src: "",
    isCamera: true,
    btnTxt: "拍照"
  },
  onLoad() {
    this.ctx = wx.createCameraContext()
    
    // 获取accessToken
    var time = wx.getStorageSync("time")
    var curTime = new Date().getTime()
    var timeInt = parseInt(time)
    var timeNum = parseInt((curTime - timeInt) / (1000 * 60 * 60 * 24))
    console.log("=======" + timeNum)
    var accessToken = wx.getStorageSync("access_token")
    console.log("====accessToken===" + accessToken + "a")
    // accessToken超过30天过期
    if (timeNum > 28 || (accessToken == "" ||
        accessToken == null || accessToken == undefined)) {
      this.accessTokenFunc()
    } else {
      this.setData({
        accessToken: wx.getStorageSync("access_token")
      })
    }
  },
  // 第一步，拍照
  takePhoto() {
    var that = this
    if (this.data.isCamera == false) {
      this.setData({
        isCamera: true,
        btnTxt: "拍照"
      })
      return
    }
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath,
          isCamera: false,
          btnTxt: "重拍"
        })
        wx.showLoading({
          title: '正在加载中',
        })
        wx.getFileSystemManager().readFile({
          filePath: res.tempImagePath,
          encoding: "base64",
          success: res => {
            that.shibie(res.data)
          },
          fail: res => {
            wx.hideLoading()
            wx.showToast({
              title: '拍照失败,未获取相机权限或其他原因',
              icon: "none"
            })
          }
        })
      }
    })
  },

  //第二步：上传图片进行识别
  shibie(image) {
    var that = this
    if (image == "") {
      wx.showToast({
        title: '请重试',
        icon: 'loading',
        duration: 500
      })
      return
    }

    if (image != "") {
      wx.request({
        url: 'https://aip.baidubce.com/rest/2.0/image-classify/v2/advanced_general',
        method: 'POST',
        data: {
          access_token: that.data.accessToken,
          image: image,
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded' // 默认值
        },
        success(res) {
          wx.hideLoading()
          console.log("图片识别返回结果", res)
          // 如果access_token过期，就重新请求access_token
          let code = res.data.err_code
          if (code == 111 || code == 100 || code == 110) {
            wx.clearStorageSync("access_token")
            wx.clearStorageSync("time")
            that.accessTokenFunc()
            return
          }
          // 返回的识别结果
          let results = res.data.result
          if (results != undefined && results != null) {
            that.setData({
              isShow: true,
              results: results
            })
            console.log("识别到的结果", results)
          } else {
            wx.clearStorageSync("access_token")
            wx.showToast({
              icon: 'error',
              title: '识别失败,请重试',
            })
          }
        }
      });
    }

  },

  // 获取百度的AccessToken
  accessTokenFunc() {
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token',
      data: {
        grant_type: 'client_credentials',
        client_id: app.globalData.client_id, //应用的API Key
        client_secret: app.globalData.client_secret //应用的Secret Key
      },
      header: {
        'Content-Type': 'application/json' // 默认值
      },
      success: res => {
        this.setData({
          accessToken: res.data.access_token //获取到token
        })
        console.log('获取到的token', this.data.accessToken)
        wx.setStorageSync("access_token", this.data.accessToken)
        wx.setStorageSync("time", new Date().getTime())
      },
      fail: res => {
        wx.clearStorageSync("access_token")
        wx.showToast({
          icon: 'error',
          title: '调用失败,请重新尝试',
        })
      }
    })
  },

  // 选择识别的结果
  radioChange: function (e) {
    console.log(e)
    console.log(e.detail)
    console.log(e.detail.value)
    wx.navigateTo({
      url: '/pages/result/list?keyword=' + e.detail.value,
    })
  },
  // 隐藏弹窗
  hideModal: function () {
    this.setData({
      isShow: false,
    })
  },
  // 去搜索页
  goSearch(e) {
    let searchKey = e.currentTarget.dataset.keyword
    wx.navigateTo({
      url: '/pages/search/search?searchKey=' + searchKey + '&type=0',
    })
  }

})
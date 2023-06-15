一，技术选型和效果图

1，技术选型

1-1，前端

- 小程序原生框架
- css
- JavaScript

1-2，管理后台

- 云开发Cms内容管理系统
- web网页
- 百度开发者控制台

1-3，数据后台

- 小程序云开发
- 云函数
- 云数据库
- 云存储
- 百度人工智能图片识别
- 百度人工智能语音识别

2，效果图预览

2-1，首页



2-2，新闻

新闻分类



新闻详情和收藏



新闻评论和热门推荐



评论文章



2-3，图片识别

拍照识别，



比如我拍一个评估识别结果



查看识别的图片属于什么垃圾



2-4，语音识别

长按识别，并查看识别结果



查看识别的文字属于什么垃圾



2-5，视频

视频列表



视频详情



2-6，搜索功能

搜索垃圾



搜索文章



2-7，垃圾分类列表

四种垃圾分类介绍



每种分类包含那些垃圾



2-8，答题竞赛

每日答题



注册用户参加排名



积分排名



错题集



正确率分析



2-9，个人中心

未登录



已登陆



我的收藏



2-8，在线客服

客户直接在小程序里发消息给客服



客服可以在网页端，或者微信端管理消息



网页端客服



小程序端客服



2-9，意见反馈

客户可以直接在小程序端提建议，建议里可以添加图片



管理员可以在小程序后台，查看客户的反馈



2-10上面回收商



3，cms管理后台

我们这里的可视化网页后台使用的时云开发自带的cms(内容管理)

3-1，登录页



3-2，管理后台



我们可以在这里

- 1，添加新闻，删除新闻，修改新闻
- 2，添加垃圾，删除垃圾，修改垃圾
- 3，添加视频，删除视频，修改视频
- 4，添加题库，删除题库，修改题库
- 5，查看文章评论
- 6，添加回收商，删除回收商，修改回收商

还有更多的功能，我会在视频课里给大家用视频来演示，这样更直观。

4，数据库

数据库我们这里用云开发自带的云数据库，下面的集合就是我们的数据表。



二~微信开发者工具的安装与使用

我们在开发小程序之前，首先需要安装小程序开发者工具，今天就来教大家安装小程序开发者工具。

2-1，其实很简单，只需要进入小程序官网，然后点击工具，如下图所示。

https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html





当然了，也可以直接通过下面链接去下载

https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

2-2，下载安装包如下



不管你是window还是mac电脑，只需要双击安装包实现安装即可。



等待安装即可



安装完成



2-3，进入开发者工具

第一次进入时，如下



点击上图的加号，就可以创建一个新项目，我们主要教大家如何导入项目，视频里会有详细讲解。

三，注册小程序

我们前面虽然可以用测试号创建小程序,但是测试号有很多功能会受限,比如我们后面讲的云开发,必须是注册小程序后才可以使用,所以今天我们就来讲讲小程序的注册.

3-1，其实官方给的注册步骤很详细了



官方注册地址:https://mp.weixin.qq.com/wxopen/waregister?action=step1

进入注册页面时,跟着提示一步步来就可以了



3-2，注意点:

如果只是学习的话,注册个人小程序即可.

如果想商用,想使用微信支付,取用户手机号等复杂功能,可以注册企业小程序,不过企业小程序必须有营业执照才可以注册.

四，云开发环境的创建

今天我们就来正式的创建自己的第一个云开发项目,在创建云开发之前,有下面几个注意事项

- 1,必须注册小程序后才可以开通云开发
- 2,一个小程序可以创建两个云开发环境，学习的时候最好只创建一个

4-1,创建一个云开发项目



和创建普通小程序一样,如上图所示,需要注意的就是这里必须要填写自己的appid,不可以用测试号. appid的获取如下图所示.



4-2,开通云开发

- 1,点击下图箭头所示,如果你第一步创建项目时,没有使用自己的appid,这里不会有下图箭头所示的云朵.
  
- 2,给云开发环境取名
  
  等待创建
  
  创建成功
  
- 3,获取云开发环境id
  

4-3,初始化云开发环境

在app.js里写入环境id,注意这里要用你自己的云开发环境id

     wx.cloud.init({
            env: "xiaoshitou-xs7fr"
     })



用时候云开发创建好以后,初始化可能需要一点时间,所以如果这里初始化有报错,记得关闭开发者工具,等几分钟再重新打开即可.

五，开通cms内容管理

5-1，开通cms的准备工作

如下图所示，直接点击开通内容管理(CMS)即可



开通cms需要你云开发里使用按量付费，如果你是第一次开通云开发，记得做如下选择。



如果你已经开通过云开发，记得把付费模式改为按量付费。如果你一开始云开发不是按量付费的模式。

点击完开通以后，会有如下弹窗，直接点击确定即可。不要被付费吓着，官方每月会送我们一定的免费额度的。学习得话基本上够用了。



上面点完确定后，我们只是开启了按量付费功能，因为cms得使用必须要开通按量付费才可以得。所以还要再点一次开通。如下图



点完开通后，会有如下弹窗，直接点击下一步即可。



然后我们需要设置登录内容管理后台得账号和密码，然后点击确定即可



然后我们就等待内容管理功能得开通了，需要等几分钟。



开通成功以后，我们就可以通过下面这个地址进入管理后台了。



后面我们统一称内容管理为cms

5-2，注意事项

- 一个云开发环境对应一个内容管理(cms)
- cms开通会存在开通失败的情况，如果开通失败了，就用新的云开发环境去开通，如果新的云开发环境还是不行的话，那就只能重新去注册一个新的小程序了。一个小程序是可以开通两个云开发环境的。
- 现在小程序官方改规则了，使用内容模型，每月可能要付几毛钱。不过学习使用的话，不会用太多的。一个月几元钱足够了。

5-3，登录Cms可视化管理后台

上面开通好以后，就可以通过后台地址登录管理后台了。如下



5-4，在cms里创建后台项目

第一次登录，我们还需要创建一个项目



自己输入项目名和项目id即可



然后点击进入刚刚创建的项目



到这里我们的cmd可视化网页管理后台就创建好了

5-5，内容模型



我会在视频里教大家如何创建内容模型，其实内容模型和我们数据库里的数据表(集合)是对应起来的。

5-6，导入内容模型（一定要导入）

我们在cms后台，点击导入模型



然后把我源码数据目录下的内容模型拖入即可导入，这里的内容模型其实就是我们的数据表。



5-9，导入数据

我把新闻，垃圾分类，题库这三个表的数据，提前给大家准备好了，大家在cms网页点击导入即可。



通过json导入



5-8，修改表权限

我们下面5个表要改下表权限 huishou，news ，questions，refuse，video 权限改为所有用户可读，仅创建者读写。



六，垃圾分类小程序的部署

今天我们来讲下垃圾分类小程序的部署，部署中一些细节的问题也会给大家讲解下。

6-1，下载源码

如果有买我课，或者办我的年卡，都可以获取到源码。

6-2，打开开发者工具导入源码



源码的导入我在小程序基础课里有讲的。这门课的详情讲解里也会教大家如何导入源码的。

6-3，云开发环境的初始化

云开发的开通，在我云开发基础入门里也有讲，这里就不在累述。

创建好云开发后，要在app.js里进行云开发环境的初始化。



6-4，部署云函数（一定要部署）

先选择云开发环境



如下图所示，部署云函数。



下面几个云函数都要部署，部署成功后文件前面会出现一个云朵的标识。



七，图片和语音识别准备工作

7-1，注册百度开发者账号

我们这里使用了百度的图片识别技术，所以在使用之前我们要现在注册百度开发者账号，官方地址：https://ai.baidu.com

注册地址：https://login.bce.baidu.com

至于如何注册，这里不需要我再教了吧，大家自行注册就行了。

我们主要用到的是图片识别和语音识别技术



7-2，注册完记得要实名下

现在使用百度图片识别，必须要实名认证下。



根据自己的情况选择认证方式



学习的话，只需要个人认证即可。



7-3，创建图片和语音识别应用

我们要使用图片识别和语音识别功能，就要创建一个应用 。

我们可以在图像识别下创建应用，记得勾选图片识别和语音技术就行。

点击完创建应用后，把图像识别和语音技术全部勾选。



当然了，如果你一开始考虑清楚都用那些功能以后，可以把你想要的功能都勾选了，这样以后就不用重复的创建应用了。



选个人即可



这样我们就创建好应用了



创建好以后，下面两个东西我们后面会用到，知道在哪里即可。



7-4，领取免费资源

7-4-1，图像识别资源

同样的我们要使用图片识别功能，也是要去领取免费资源的，要不然我们连免费使用的额度都没有，当然啦，如果百度后面改规则了，我们就只能付费购买这些资源了。如果只是学习用的话，用不了几毛钱。



所以先把能领的都领取下。

估计百度是在为后期收费做准备，但是目前还有免费资源可以领取。既然可以白piao就先领取免费的。即便后期收费了，咱们学习使用估计也用不了太多，几毛钱的估计就够咱们学习用的了。

点击免费领取资源



既然免费，当然全部领取了啊。领取完，耐心等待生效即可。如果你在学习的时候，不能在免费领取了，那就花几毛钱付费下也行的，基本上几毛钱就够咱们学习使用了。



领取完图片识别的，语音技术的也要领啊。

7-4-2，语音技术资源



点击免费领取



把能领的全部领了。



领取完大概30分钟内生效。



7-5，添加百度域名到小程序

我们这里要调用百度的接口，所以需要配置域名到小程序，如果不配置的话，就会报如下错误。





所以需要到小程序后台，把https://aip.baidubce.com 和

https://vop.baidu.com添加到如下位置。





点击上面的服务设置，然后做如下设置。



一般设置后10分钟左右生效。



7-6，技术文档

语音技术文档：https://cloud.baidu.com/doc/SPEECH/index.html

图片识别文档：https://cloud.baidu.com/doc/IMAGERECOGNITION/index.html

语音识别用的是短语音识别极速版。



八，图片和语音识别的配置

8-1，应用的识别的配置

如下图所示，我们要配置百度识图的apikey和sectetKey



把上图app.js里的apikey和secretkey换成你自己的。我们笔记的前面7-4章节有教大家如何注册百度应用。这里我视频里也会做讲解，如果有买我课，或者办我的年卡，都可以获取讲解视频。

8-2，使用百度的图片识别技术

这个时候直接使用，通常会报下面的错误，如果你跟着笔记里的7-5的域名配置做过配置的话，就只需要耐心的等待几分钟即可，如果没有配置，就会报如下错误。



这个错误是因为我们没有配置安全域名所致。



把https://aip.baidubce.com 和

https://vop.baidu.com添加到如下位置



配置好以后，记得等待几分钟才会生效，这样我们再次使用时，就可以成功的使用垃圾图片识别功能了。



这样我们就可以愉快的使用垃圾分类小程序的图片识别功能了。

8-3，真机测试语音识别

有时候如果是老人使用垃圾分类，打字搜索不太方便，这个时候我们就可以通过语音识别来实现垃圾分类搜索了。

和上面的图片识别一样，我们只需要调用百度的语音识别技术即可

我们直接在电脑模拟器上是无法使用语音识别的，会报如下错误。



到官方文档的错误码里看下这个就知道了：https://cloud.baidu.com/doc/SPEECH/s/pkhq0q4vy



解决办法就是电脑模拟器没法识别语音，必须用真机调试。



点击真机调试，然后用手机扫码，就可以在手机上查看了。只有用手机才可以识别出语音。



效果图：



点击去搜索：



8-4， 注意事项

如果报下面所示的错误，说明你的免费额度用完了，最好去开通下百度的付费识别功能。



去官方文档里查询也是说免费额度用完了



所以要开通付费功能，如下

首先声明，我不是为了推广百度，之前百度确实是有一定的免费额度供大家使用的，既然他们现在不提供免费额度给大家使用了，咱们作为弱势群体也没有办法，要么换别家，但是别家页基本上收费了，要么就省一瓶饮料钱来学习下。

如下图，点击开通即可。这里最好开通按量付费，用多少付多少就行



可以看出，我们花几元钱就可以调用上千次，学习的话这几千次基本上够用了。



但是开通之前还要实名认证下。



这里我就不在啰嗦，自己实名认证完即可回来开通就行。

实名认证完，记得去充点money，几元钱就行了。



然后就可以愉快的进行图像识别了。



九，图片识别核心代码

9-1，获取acess_token

我们后面做的所有操作，基本上都要获取这个。



所以我把源码贴出来给到大家，client_id和client_secret记得换成你自己的。

    wx.request({
          url: 'https://aip.baidubce.com/oauth/2.0/token',
          data: {
            grant_type: 'client_credentials',
            client_id:, //应用的API Key
            client_secret:  //应用的Secret Key
          },
          header: {
            'Content-Type': 'application/json' // 默认值
          },
          success: res => {
            this.setData({
              token: res.data.access_token //获取到token
            })
            console.log('获取到的token', this.data.token)
          }
        })

我们图片识别其实和上面的人脸识别操作步骤差不多的，依然也是先开通图片识别功能。



通过上图或者这个地址进入图片识别页面：https://cloud.baidu.com/doc/IMAGERECOGNITION/index.html



9-2，图片识别核心文档

我们首先去看下官方文档 https://cloud.baidu.com/product/imagerecognition/general





我们这里使用通用物体和场景识别，这样可以识别很多东西

9-3，图片识别核心代码

我们做图片识别依然是先拍照，然后上传到百度进行图片识别

我先看下识别结果的格式如下：



我这里把代码全部贴出来给到大家

wxml代码

    <view style="width: 100%; height:calc(100vh - 200rpx);">
      <camera style="width: 100%; height:100%;" wx:if="{{isCamera}}" device-position="back" flash="off" binderror="error"></camera>
      <image style="width: 100%; height:100%;" wx:else mode="widthFix" src="{{src}}"></image>
    </view>
    
    <view class='photo-view'>
      <view class='takePhoto' bindtap="takePhoto">{{btnTxt}}</view>
    </view>
    
    <!-- 识别结果弹窗 -->
    <view class="mask" hidden="{{!isShow}}" bindtap="hideModal"></view>
    <view class="mask_content" hidden="{{!isShow}}">
      <view class="mask_title">识别结果如下</view>
      <block wx:for="{{results}}" wx:key="index">
        <view class="mask_item">{{item.keyword}}(点击查看)</view>
      </block>
    </view>

wxss代码

    .photo-view {
      width: 100%;
      height: 200rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    .takePhoto {
      width: 100rpx;
      height: 100rpx;
      border-radius: 100rpx;
      background-color: #00cc77;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    /* 识别出的结果 */
    .mask {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.5;
      background: black;
      /* 设置组件的层级 */
      z-index: 100;
    }
    
    .mask_content {
      position: fixed;
      left: 80rpx;
      top: 200rpx;
      right: 80rpx;
      height: 600rpx;
      background: white;
      z-index: 200;
      overflow: auto;
    }
    
    .mask_title {
      text-align: center;
      font-size: 50rpx;
      color: red;
      margin-bottom: 20rpx;
    }
    
    .mask_item {
      text-align: center;
      padding: 15rpx;
      border-bottom: 1px solid gainsboro;
    }

js代码

    const app = getApp()
    Page({
      data: {
        accessToken: "",
        isShow: false,
        results: [{
            keyword: "人物特写",
            score: 0.813571,
            root: "人物-人物特写"
          },
          {
            keyword: "男孩",
            score: 0.630612,
            root: "人物活动-人物特写"
          },
          {
            keyword: "女孩",
            score: 0.353866,
            root: "人物-人物特写"
          }
        ],
        src: "",
        isCamera: true,
        btnTxt: "拍照"
      },
      onLoad() {
        this.ctx = wx.createCameraContext()
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
    
    
    })

效果图如下：



识别出来的结果如下：



到这里我们图片识别的功能也做好了。欢迎关注编程小石头，后面会出更多更好的内容。

十，语音识别核心代码

10-1，获取acess_token

我们语音识别和图片识别公用一个acess_token，所以代码还是下面的这个。

所以我把源码贴出来给到大家，client_id和client_secret记得换成你自己的。

    wx.request({
          url: 'https://aip.baidubce.com/oauth/2.0/token',
          data: {
            grant_type: 'client_credentials',
            client_id:, //应用的API Key
            client_secret:  //应用的Secret Key
          },
          header: {
            'Content-Type': 'application/json' // 默认值
          },
          success: res => {
            this.setData({
              token: res.data.access_token //获取到token
            })
            console.log('获取到的token', this.data.token)
          }
        })

10-2，语音识别核心文档



https://cloud.baidu.com/doc/SPEECH/s/Ikhq0parc



10-3，核心代码

10-3-1，wxml代码

    <!-- 语音识别 -->
    <view class='ai_root'>
        <image src='/image/speech.png' class='ai_img' 
        bindtouchstart='onTouchStart' bindtouchend='onTouchEnd' />
        <text class='ai_txt'>长按语音识别</text>
    </view>
    <view wx:if="{{canRecordStart}}" class="speak_style">
        <image wx:if="{{j==1}}" class="sound_style" src="/image/speech_1.png"></image>
        <image wx:if="{{j==2}}" class="sound_style" src="/image/speech_2.png"></image>
        <image wx:if="{{j==3}}" class="sound_style" src="/image/speech_3.png"></image>
        <image wx:if="{{j==4}}" class="sound_style" src="/image/speech_4.png"></image>
        <image wx:if="{{j==5}}" class="sound_style" src="/image/speech_5.png"></image>
    </view>

10-3-2，js代码

    /**
     * 作者：编程小石头
     * 微信：2501902696
     */
    const app = getApp()
    
    Page({
    
        isSpeaking: false,
    
        data: {
            canRecordStart: false,
            accessToken: "",
        },
    
    
    
        onLoad: function (options) {
            // 获取accessToken
            var time = wx.getStorageSync("time")
            var curTime = new Date().getTime()
            var timeInt = parseInt(time)
            var timeNum = parseInt((curTime - timeInt) / (1000 * 60 * 60 * 24))
            console.log("=======" + timeNum)
            let accessToken = wx.getStorageSync("access_token")
            console.log("====accessToken===" + accessToken)
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
    
    
    
        // 语音识别
        onTouchStart: function () {
            console.log('onTouchStart!' + this.data.canRecordStart);
            speaking.call(this);
            this.setData({
                canRecordStart: true
            });
            this.startRecord();
        },
    
        onTouchEnd: function () {
            console.log('onTouchEnd!canRecordStart:' +
                this.data.canRecordStart + '----isSpeaking:' + this.isSpeaking);
            clearInterval(this.timer);
            this.setData({
                canRecordStart: false
            });
            if (this.isSpeaking) {
                wx.getRecorderManager().stop();
            }
    
        },
        //开始录音的时候
        startRecord() {
            console.log('开始录音');
            const recorderManager = wx.getRecorderManager();
            const options = {
                duration: 30000, //指定录音的时长，单位 ms
                sampleRate: 16000, //采样率
                numberOfChannels: 1, //录音通道数
                encodeBitRate: 48000, //编码码率
                format: 'aac', //音频格式，有效值 aac/mp3
            };
    
            console.log('开始正式录音前，canRecordStart：' + this.data.canRecordStart);
            //开始录音
            if (this.data.canRecordStart) {
                recorderManager.start(options);
                this.isSpeaking = true;
            }
            recorderManager.onStart(() => {
                console.log('recorder start')
    
            });
    
    
            recorderManager.onPause(() => {
                console.log('recorder pause')
            })
            recorderManager.onStop((res) => {
                this.isSpeaking = false;
                console.log('recorder stop', res);
                //wx.hideLoading();
                if (res && res.duration < 600) {
                    wx.showToast({
                        title: '说话时间太短啦！',
                        icon: 'error'
    
                    })
                    return;
                }
                if (res && res.duration > 8000) {
                    wx.showToast({
                        title: '说的有点长，可以精简点呀~',
                        icon: 'error'
                    })
                    return;
                }
                const {
                    tempFilePath
                } = res
                this.speechRecognition(res);
            })
    
    
            //错误回调
            recorderManager.onError((res) => {
                // console.log('录音错误回调：' + JSON.stringify(res));
                wx.showModal({
                    title: '请打开录音权限',
                    success: res => {
                        if (res.confirm) {
                            wx.openSetting({
                                withSubscriptions: true,
                            })
                        }
                    }
                })
            })
        },
    
    
        // 识别语音
        speechRecognition: function (res) {
            wx.showLoading({
                title: '识别中...',
            })
            var that = this;
            var fileSize = res.fileSize;
            var tempFilePath = res.tempFilePath;
            var format = 'pcm';
            if (tempFilePath) {
                format = tempFilePath.substring(tempFilePath.lastIndexOf('.') + 1);
            }
            const fileSystemManager = wx.getFileSystemManager()
            fileSystemManager.readFile({
                filePath: res.tempFilePath,
                encoding: "base64",
                success(res) {
                    // console.log(res);
                    var base64 = res.data;
                    var data = {
                        "format": format,
                        "rate": 16000,
                        "dev_pid": 80001,
                        "channel": 1,
                        "token": that.data.accessToken,
                        "cuid": "baidu_workshop",
                        "len": fileSize,
                        "speech": base64
                    }
    
                    // console.log('语音识别请求参数：' + JSON.stringify(data));
                    wx.request({
                        url: 'https://vop.baidu.com/pro_api',
                        method: 'post',
                        data: data,
                        success(res) {
                            wx.hideLoading();
                            console.log("========================语音识别结果", res.data)
                            var result = res.data.result;
                            if (result && result.length > 0) {
                                var location = result[0].lastIndexOf("。");
                                // var location = result[0].lastIndexOf("");
                                var text = '';
                                console.log(result[0]);
                                console.log('符号位置：' + location);
    
                                text = result[0].replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\。|\，|\！|\；|\>|\/|\?]/g, "")
                                console.log('识别出来的文字' + text);
                                if (location && location > 0) {
                                    text = text.substr(0, location)
                                    console.log('去除末尾句号' + text);
                                }
    
                                wx.showModal({
                                    title: '识别结果',
                                    content: '识别结果是《' + text + "》点击确定去搜索页查看属于哪类垃圾",
                                    success: res => {
                                        if (res.confirm) {
                                            wx.navigateTo({
                                                url: '/pages/search/search?searchKey=' + text + '&type=0',
                                            })
                                        }
                                    }
                                })
    
                            } else {
                                //没有result，认为语音识别失败
                                wx.showModal({
                                    title: '提示',
                                    content: '不知道你说的啥，可以再试试~',
                                    showCancel: false,
                                    success(res) {
                                        if (res.confirm) {
                                            console.log('用户点击确定')
                                        } else if (res.cancel) {
                                            console.log('用户点击取消')
                                        }
                                    }
                                })
    
                            }
    
    
                        },
                        fail(error) {
                            wx.hideLoading();
                            console.log("====================语音识别失败", error);
                            wx.showToast({
                                icon: 'none',
                                title: '请求失败了，请确保网络正常，重新试试~',
                            })
                        }
    
                    })
    
                },
                fail(res) {
                    wx.hideLoading();
                    console.log(res)
                }
            })
    
        },
    })
    //麦克风帧动画
    function speaking() {
        var _this = this;
        //话筒帧动画
        var i = 1;
        this.timer = setInterval(function () {
            i++;
            i = i % 5;
            _this.setData({
                j: i
            })
        }, 200);
    }

10-3-3，wxss代码

    .ai_root {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50rpx;
    }
    
    .ai_img {
        width: 250rpx;
        height: 250rpx;
        margin-top: 150rpx;
    }
    
    .ai_txt {
        font-size: 44rpx;
        font-weight: bold;
        color: #00cc77;
        margin-top: 30rpx;
    }
    
    
    
    /* 语音识别动画 */
    .speak_style {
        position: fixed;
        top: 250rpx;
        right: 20rpx;
        z-index: 999;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
    
    
    }
    
    .sound_style {
        width: 128rpx;
        height: 128rpx;
    }

效果图如下：



点击去搜索：



到这里我们核心功能就基本上讲的差不多了


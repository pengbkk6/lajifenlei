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
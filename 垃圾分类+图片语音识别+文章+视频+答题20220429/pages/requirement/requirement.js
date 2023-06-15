// pages/requirement/requirement.js
Page({
    onLoad: function (options) {
        wx.cloud.database().collection('requirement').get()
            .then(res => {
                this.setData({
                    detail: res.data[0]
                })
            })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
const db = wx.cloud.database()
Page({
    data: {
        tabs: ["可回收垃圾", "有害垃圾", "湿垃圾", "干垃圾"],
        // 默认选中菜单
        currentTab: 0,
    },
    // 选中顶部导航栏
    selectTab(event) {
        let index = event.currentTarget.dataset.index
        this.setData({
            currentTab: index,
        })
        this.getList(index)
    },

    onLoad() {
        this.getList()
    },
    getList() {
        let currentTab = this.data.currentTab
        wx.cloud.callFunction({
            name: 'refuse',
            data: {
                type: this.data.tabs[currentTab]
            }
        }).then(res => {
            console.log('jieguo', res)
            this.setData({
                datas: res.result.data
            })
        })
    }


})
Page({
    ...require('../../base/app.js'),

    /**
     * 页面的初始数据
     */
    data: {
        giftInfo: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            imageBaseUrl: this.imageBaseUrl
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.setData({
            imageBaseUrl: this.imageBaseUrl
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    onTextAreaChange: function (e) {
        this.setData({
            giftInfo: e.detail.value
        })
    },

    onClickAddGift: function (e) {
        wx.showLoading({
            title: '添加道具中...',
            mask: true
        });
        wx.request({
            url: this.gateway.addGift,
            method: "POST",
            data: {
                id: parseInt(this.getParty().id),
                openid: this.getUserInfo().openid,
                giftInfo: this.data.giftInfo
            },
            success: (res) => {
                wx.hideLoading();
                this.setParty(res.data);
                wx.navigateBack({
                    delta: 1
                })
            }
        })
    },

    onInfoClicked: function (e) {
        wx.navigateTo({
            url: '../helpGift/helpGift',
        })
    }
});
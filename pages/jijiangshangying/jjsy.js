// pages/dangpianreying/dqry.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies_jjsy: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290',
      success: (datas) => {
        this.setData({
          movies_jjsy: datas.data.moviecomings
        })
        // 更新app数据
        //appDatas.data.movies = response.data.ns;
        console.log(datas)

      }
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
    
      wx.showShareMenu({
        withShareTicket: true
      })

    

  }
})
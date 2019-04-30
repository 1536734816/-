// pages/Navigation/Navigation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies_top: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290',
      success: (datas) => {
        this.setData({
          movies_top: datas.data.moviecomings
        })
        // 更新app数据
        //appDatas.data.movies = response.data.ns;
        console.log(datas)

      }
    })
},
  onShareAppMessage: function () {
    wx.showShareMenu({
      withShareTicket: true
    })

  }
})


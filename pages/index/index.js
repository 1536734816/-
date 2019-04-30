// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '电影世界',
    userInfo: {},
    isShow: false

  },
  handleClick() {
    //跳转到预约页面
    wx.switchTab({

      url: '/pages/dangpianreying/dqry',
      
    })
    console.log("登录成功")

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //发送一些请求
    //获取用户登录的信息
    this.getUserInfo();
  },
  getUserInfo() {

    //判断用户是否授权了
    wx.getSetting({
      success: (data) => {
        console.log(data);
        if (data.authSetting['scope.userInfo']) {
          this.setData({
            isShow: false
          });
        } else {
          this.setData({
            isShow: true
          });
        }
      },
    })
    wx.getUserInfo({
      success: (data) => {
        console.log(data);
        //跟新data中的数据userInfo
        this.setData({
          userInfo: data.userInfo
        })
      },
      fail: () => {
        console.log('获取用户数据失败')
      },
    })

  },

  handgetuserinfo(data) {
    console.log('用户点击了', data);
    //判断永无是否点击允许 
    if (data.detail.rawData) {
      this.getUserInfo();

    }
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

  }
})
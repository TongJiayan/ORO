// pages/category/basinedCategory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    basinedTiramisu:[
      {
        cakeId:1,
        imgsrc:"https://wx4.sinaimg.cn/mw690/67f87ad9gy1fupjktb8n1j20mz0k9gyo.jpg"
      },
      {
        cakeId: 2,
        imgsrc: "https://wx2.sinaimg.cn/mw690/67f87ad9gy1fupjkw1debj20mx0hpgz0.jpg"
      },
      {
        cakeId: 3,
        imgsrc: "https://wx3.sinaimg.cn/mw690/67f87ad9gy1fupjkxg0hhj20mz0h1wml.jpg"
      },
      {
        cakeId: 4,
        imgsrc: "https://wx2.sinaimg.cn/mw690/67f87ad9gy1fupjl253vzj20mz0hfdsm.jpg"
      },
      {
        cakeId: 5,
        imgsrc: "https://wx3.sinaimg.cn/mw690/67f87ad9gy1fupjl4diltj20mv0hf165.jpg"
      },
      {
        cakeId: 6,
        imgsrc: "https://wx4.sinaimg.cn/mw690/67f87ad9gy1fupjl5nubcj20mz0j1qe5.jpg"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  onTapToDetail(event) {
    var cakeId = event.currentTarget.dataset.postId + 6;
    wx.navigateTo({
      url: '../detail/detail?id=' + cakeId
    })
  }
})
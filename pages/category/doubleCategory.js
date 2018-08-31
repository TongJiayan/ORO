// pages/category/doubleCategory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doubleTiramisu: [
      {
        cakeId: 1,
        imgsrc: "https://wx4.sinaimg.cn/mw690/67f87ad9gy1fupjoiuvspj20mz0v5k6u.jpg"
      },
      {
        cakeId: 2,
        imgsrc: "https://wx3.sinaimg.cn/mw690/67f87ad9gy1fupjosp66gj20mx0hlgza.jpg"
      },
      {
        cakeId: 3,
        imgsrc: "https://wx1.sinaimg.cn/mw690/67f87ad9gy1fupjoj0aimj20mx0jxtjo.jpg"
      },
      {
        cakeId: 4,
        imgsrc: "https://wx2.sinaimg.cn/mw690/67f87ad9gy1fupjosdblaj20mx0hlgzb.jpg"
      },
      {
        cakeId: 5,
        imgsrc: "https://wx4.sinaimg.cn/mw690/67f87ad9gy1fupjp12ojyj20mx0hjncr.jpg"
      },
      {
        cakeId: 6,
        imgsrc: "https://wx3.sinaimg.cn/mw690/67f87ad9gy1fupjp0uu0vj20mz0izalx.jpg"
      }]
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
    var cakeId = event.currentTarget.dataset.postId+12;
    wx.navigateTo({
      url: '../detail/detail?id=' + cakeId
    })
  }
})
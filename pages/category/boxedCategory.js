// pages/category/boxedCategory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boxedTiramisu:[
      {
        cakeId:1,
        imgsrc:"https://wx3.sinaimg.cn/mw690/67f87ad9gy1fupjg5kpkfj20mz0khn7m.jpg"
      },
      {
        cakeId: 2,
        imgsrc: "https://wx3.sinaimg.cn/mw690/67f87ad9gy1fupjg7bcg9j20mz0hbk2j.jpg"
      },
      {
        cakeId: 3,
        imgsrc: "https://wx4.sinaimg.cn/mw690/67f87ad9gy1fupjg9gggyj20mx0hpwor.jpg"
      },
      {
        cakeId: 4,
        imgsrc: "https://wx2.sinaimg.cn/mw690/67f87ad9gy1fupjgccncyj20mz0hdwoz.jpg"
      },
      {
        cakeId: 5,
        imgsrc: "https://wx1.sinaimg.cn/mw690/67f87ad9gy1fupjgdx05jj20mz0hptrw.jpg"
      },
      {
        cakeId: 6,
        imgsrc: "https://wx1.sinaimg.cn/mw690/67f87ad9gy1fupjgf2sx4j20mx0jb4af.jpg"
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
  
  }
  ,
  onTapToDetail(event) {
    var cakeId = event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: '../detail/detail?id=' + cakeId
    })
  }
})
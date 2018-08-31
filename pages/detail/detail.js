// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgsrc:""
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var cakeId = options.id;
    if(cakeId==1) /**原味 */
    {
      this.setData({ imgsrc:"https://wx3.sinaimg.cn/mw690/006pAIyRgy1fuqppw6h7jj30n03hfb29.jpg"})
    }
    else if(cakeId==2)
    {
      this.setData({ imgsrc: "https://wx2.sinaimg.cn/mw690/006pAIyRgy1fuqppxzl61j30mx3g9b29.jpg" })
    }
    else if (cakeId == 3) 
    {
      this.setData({ imgsrc: "https://wx2.sinaimg.cn/mw690/006pAIyRgy1fuqpq00zgbj30n03h0e81.jpg" })
    }
    else if (cakeId == 4) 
    {
      this.setData({ imgsrc: "https://wx2.sinaimg.cn/mw690/006pAIyRgy1fuqppucccej30n039gb29.jpg" })
    }
    else if (cakeId == 5) 
    {
      this.setData({ imgsrc: "https://wx2.sinaimg.cn/mw690/006pAIyRgy1fuqpq33sl6j30n03h2toz.jpg" })
    }
    else if (cakeId == 6) {
      this.setData({ imgsrc: "https://wx3.sinaimg.cn/mw690/006pAIyRgy1fuqpq1pn28j30mz3g57wh.jpg" })
    } 
    /**盆装 */
    else if (cakeId == 7) {
      this.setData({ imgsrc: "https://wx4.sinaimg.cn/mw690/006pAIyRgy1fuqpsaedngj30mz49gb2b.jpg" })
    }
    else if (cakeId == 8) {
      this.setData({ imgsrc: "https://wx2.sinaimg.cn/mw690/006pAIyRgy1fuqpsgqdnnj30my3fv4qq.jpg" })
    }
    else if (cakeId == 9) {
      this.setData({ imgsrc: "https://wx2.sinaimg.cn/mw690/006pAIyRgy1fuqpscgv0hj30mz3tdqv5.jpg" })
    }
    else if (cakeId == 10) {
      this.setData({ imgsrc: "https://wx4.sinaimg.cn/mw690/006pAIyRgy1fuqpsegd4bj30mz37dnpd.jpg" })
    }
    else if (cakeId == 11) {
      this.setData({ imgsrc: "https://wx1.sinaimg.cn/mw690/006pAIyRgy1fuqps7jnl6j30mz3p6x6p.jpg" })
    }
    else if (cakeId == 12) {
      this.setData({ imgsrc: "https://wx1.sinaimg.cn/mw690/006pAIyRgy1fuqpsk5lpzj30n03fbqv5.jpg" })
    }
    /**盆装 */
    else if (cakeId == 13) {
      this.setData({ imgsrc: "https://wx4.sinaimg.cn/mw690/006pAIyRgy1fuqprirjb1j30my4a2qv6.jpg" })
    }
    else if (cakeId == 14) {
      this.setData({ imgsrc: "https://wx2.sinaimg.cn/mw690/006pAIyRgy1fuqprpa29pj30my3u0b2a.jpg" })
    }
    else if (cakeId == 15) {
      this.setData({ imgsrc: "https://wx2.sinaimg.cn/mw690/006pAIyRgy1fuqprmy7gtj30mz3mdhdt.jpg" })
    }
    else if (cakeId == 16) {
      this.setData({ imgsrc: "https://wx1.sinaimg.cn/mw690/006pAIyRgy1fuqprl0x4ij30mz3og7wi.jpg" })
    }
    else if (cakeId == 17) {
      this.setData({ imgsrc: "https://wx3.sinaimg.cn/mw690/006pAIyRgy1fuqprg7tpuj30mz3rnx6p.jpg" })
    }
    else if (cakeId == 18) {
      this.setData({ imgsrc: "https://wx2.sinaimg.cn/mw690/006pAIyRgy1fuqprrixpvj30my3n1e81.jpg" })
    }
    else if (cakeId == 19) {
      this.setData({ imgsrc: "https://wx2.sinaimg.cn/mw690/006pAIyRgy1fuqpquhml3j30my52t4qr.jpg" })
    }
    else if (cakeId == 20) {
      this.setData({ imgsrc: "https://wx4.sinaimg.cn/mw690/006pAIyRgy1fuqpqrx4f3j30mz479e82.jpg" })
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
Page({
  /** * 页面的初始数据** */
  data: {
    shuzu: []
  },
  /** * 生命周期函数--监听页面加载*** */
  onLoad: function (options) {
    var that = this
    const db = wx.cloud.database()
    db.collection('air').get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          shuzu: res.data
        })
      }
    })
  },

  onShow: function (options) {
    var that = this
    const db = wx.cloud.database()
    db.collection('air').get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          shuzu: res.data
        })
      }
    })
  },
  /*** 用户点击右上角分享*/
  onShareAppMessage: function () {  
  },

  mefuntion: function (e)
  {
    wx.navigateTo({
      url: '../add/add',
    })
  }
})
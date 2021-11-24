Page({
  data: {
    title: "",
    content: "",
    img: [],
    cTime: "",
    jd: '',
    wd: ''
  },
  onLoad: function (e) {
    var that = this
    var newDate = new Date();
    console.log(newDate.getHours())
    that.setData({
      cTime: newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate() + "-" + newDate.getHours() + ":" + newDate.getMinutes()
    })
    //获取经纬度
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        console.log(res)
        var latitude = res.latitude.toFixed(4)
        var longitude = res.longitude.toFixed(4)
        that.setData({
          wd: latitude,
          jd: longitude
        })
      }
    })
  },
  onShow: function (e) {
    var that = this
    var newDate = new Date();
    console.log(newDate.getHours())
    that.setData({
      cTime: newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate() + "-" + newDate.getHours() + ":" + newDate.getMinutes()
    })
    //获取经纬度
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        console.log(res)
        var latitude = res.latitude.toFixed(4)
        var longitude = res.longitude.toFixed(4)
        that.setData({
          wd: latitude,
          jd: longitude
        })
      }
    })
  },
  title: function (e) {
    console.log(e.detail.value)
    this.setData({
      title: e.detail.value //待插入的title字段
    })
  },
  content: function (e) {
    console.log(e.detail.value)
    this.setData({
      content: e.detail.value //待插入的content字段
    })
  },
  picfunction: function () {
    var that = this
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log(res)
        wx.showLoading({
          title: '上传中',
        })
        const filePath = res.tempFilePaths[0]
        var timestamp = (new Date()).valueOf();
        wx.cloud.uploadFile({
          cloudPath: "car/" + timestamp + ".jpg", // 上传至云端的路径
          filePath: filePath, // 小程序临时文件路径
          success: res => {
            console.log('[上传图片] 成功：', res)
            var img_temp = that.data.img;
            img_temp.push(res.fileID);
            that.setData({
              img: img_temp //待插入的图片img字段
            })
            wx.showToast({
              title: '上传成功',
            })
          },
          fail: e => {
            console.error('[上传图片] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })
      },
      fail: e => {
        console.error(e)
      }
    })
  },
  DelImg(e) {
    wx.showModal({
      title: '无人机上传',
      content: '确定要删除这张照片吗',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.img.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            img: this.data.img
          })
        }
      }
    })
  },
  submit: function (e) {
    var that = this;
    console.log("cloud_function")
    if (that.data.title == "") {
      that.setData({
        title: "无标题"
      })
    }
    if (that.data.content == "") {
      that.setData({
        content: "无备注"
      })
    }
    const db = wx.cloud.database()
    db.collection('car').add({
      data: {
        title: that.data.title,
        content: that.data.content,
        img: that.data.img,
        cTime: that.data.cTime,
        jd:that.data.jd,
        wd:that.data.wd
      },
      success: function (res) {
        console.log("插入成功" + res)
        wx.navigateBack({
          delta: 1
        })
        wx.showToast({
          title: '上传信息成功',
          icon: "success",
          duration: 2000,
        })
      },
      fail: console.error
    })
  }
})
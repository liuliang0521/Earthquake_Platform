// pages/page1/page1.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    info_name: [],
    info_num: [],
    sum: [],
    picture: '',
    answer: '',
    nothing: true,
    name: ["抽纸", "卷纸", "牙刷", "胶带", "苹果", "水晶梨", "哈密瓜", "猕猴桃", "柚子", "香蕉", "香皂", "洗手液", "牙膏", "花露水", "洗澡鸭", "文具盒", "八宝粥", "老干妈", "曲奇饼", "甜橙汁", "口香糖", "公仔面", "苏打饼干", "薯片", "薯条", "香瓜子", "雪碧", "可乐", "芬达", "红牛", "AD钙奶", "果粒橙", "王老吉", "加多宝", "冰红茶", "绿茶", "冰糖雪梨", "茶派", "椰汁", "农夫山泉", "哇哈哈", "百岁山", "怡宝", "恒大冰泉", "康师傅", "今麦郎", "昆仑山", "雀巢优活", "冰露"]
  },
  onLoad() {

  },
  start() {
    var that = this
    wx.request({
      url: 'http://172.19.252.246:7002/yolo?path=2',
      success: function (res) {
        console.log(res)
        var data = res.data
        var len = data.length
        var flag = 0
        var picture = ""
        var answer = ""
        var sum = []
        var info_name = []
        var info_num = []
        while (data[flag] != '-') {
          flag++
        }
        flag++;
        while (data[flag] != ';') {
          picture = picture + data[flag]
          flag++
        }
        flag++;
        while (data[flag] != ';') {
          answer = answer + data[flag]
          flag++
        }
        flag++
        while (data[flag] != '-') {
          flag++
        }
        flag++
        var str_sum = ""
        while (flag != len) {
          str_sum = str_sum + data[flag]
          flag++
        }
        var shuzu = str_sum.split(',');
        for (var index = 0; index < shuzu.length; index++) {
          sum.push(Number(shuzu[index]))
          if (sum[index] != 0) {
            info_name.push(that.data.name[index])
            info_num.push(sum[index])
          }
        }
        console.log(picture)
        console.log(answer)
        console.log(sum)
        console.log(info_name)
        console.log(info_num)
        var timestamp = (new Date()).valueOf();
        wx.downloadFile({
          url: picture,
          success: function (res) {
            console.log(res.tempFilePath)
            var file = res.tempFilePath
            wx.cloud.uploadFile({
              cloudPath: "yolo/" + timestamp + ".jpg", // 上传至云端的路径
              filePath: file, // 小程序临时文件路径
              success: res => {
                console.log('[上传图片] 成功：', res)
                picture = res.fileID;
                wx.showToast({
                  title: '上传成功',
                })
                timestamp = (new Date()).valueOf();
                wx.downloadFile({
                  url: answer,
                  success: function (res) {
                    console.log(res.tempFilePath)
                    var file_temp = res.tempFilePath
                    wx.cloud.uploadFile({
                      cloudPath: "yolo/" + timestamp + ".jpg", // 上传至云端的路径
                      filePath: file_temp, // 小程序临时文件路径
                      success: res => {
                        console.log('[上传图片] 成功：', res)
                        answer = res.fileID;
                        wx.showToast({
                          title: '上传成功',
                        })
                        that.setData({
                          picture: picture,
                          answer: answer,
                          sum: sum,
                          info_name: info_name,
                          info_num: info_num
                        })
                        that.submit()
                        if (info_name.length > 0) {
                          that.setData({
                            nothing: false
                          })
                        } else {
                          that.setData({
                            nothing: true
                          })
                        }
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
                  }
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
          }
        })
      }
    })
  },
  submit: function (e) {
    var that = this;
    var newDate = new Date();
    var cTime = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate() + "-" + newDate.getHours() + ":" + newDate.getMinutes()
    console.log("cloud_function")
    const db = wx.cloud.database()
    db.collection('yolo').add({
      data: {
        picture: that.data.picture,
        answer: that.data.answer,
        sum: that.data.sum,
        cTime: cTime,
        info_name: that.data.info_name,
        info_num: that.data.info_num
      },
      success: function (res) {
        console.log("插入成功" + res)
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
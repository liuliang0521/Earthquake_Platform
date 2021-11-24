const app = getApp()

Page({
  data: {
    swiper_num: '',
    windowHeight: "",
    windowWidth: "",
    button_height: "",
    fun_info: [{
        class: "timetable",
        icon: "home",
        title: "智能仓库",
        color: 'cyan',
      },
      {
        class: "wrong",
        icon: "explore",
        title: "数据可视化",
        color: 'blue',
      },
      {
        class:"booknote",
        icon:"location",
        title:"智能小车",
        color: 'purple',
      },
      {
        class:"clock",
        icon:"discover",
        title:"智能无人机",
        color: 'mauve',
      }
    ]
  },
  function1: function () {
    wx.navigateTo({
      url: '../storehouse/yolo/yolo',
    })
  },
  function2: function () {
    wx.navigateTo({
      url: '../visualization/list/list/list',
    })
  },
  function3: function () {
    wx.navigateTo({
      url: '../car/list/list',
    })
  },
  function4: function () {
    wx.navigateTo({
      url: '../aircraft/list/list',
    })
  },

  onLoad: function (options) {
    var that = this
    //获取信息
    wx.getSystemInfo({
      success(res) {
        console.log("res.model")
        console.log(res.model)
        console.log("res.pixelRatio")
        console.log(res.pixelRatio)
        console.log("res.windowWidth")
        console.log(res.windowWidth)
        console.log("res.windowHeight")
        console.log(res.windowHeight)
        that.setData({
          windowWidth: res.windowWidth
        })
        that.setData({
          windowHeight: res.windowHeight
        })
        var button_height = res.windowHeight * 750 / res.windowWidth - 615
        that.setData({
          button_height: button_height
        })
        console.log("res.language")
        console.log(res.language)
        console.log("res.version")
        console.log(res.version)
        console.log("res.platform")
        console.log(res.platform)
      }
    })
    wx.cloud.init()

    const db = wx.cloud.database()
    db.collection('start_data')
      .where({
        name: "swiper_num"
      })
      .get({
        success: function (res) {
          console.log(res.data)
          that.setData({
            swiper_num: res.data[0].value
          })
        }
      })
  }
})

//获取应用实例
var app = getApp()
Page({
  data:{
    id1: 1,
    detail_content: {},
    id:'',
    openid:'',
    shuzu: [
      {"_id":"859059a56199b46107161ce3722dc867","path":"","content":"方便卫生的一次性抽纸，在卫生防疫工作中发挥作用","id":0.0,"n":"抽纸","name":"一次性卫生抽纸","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/0A.png","cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/0B.png","cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/0C.png"]},
      {"_id":"859059a56199b46107161ce3722dc869","path":"","content":"方便卫生的一次性卷纸，在卫生防疫工作中发挥作用","id":1.0,"n":"卷纸","name":"一次性卫生卷纸","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/1A.png","cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/1B.png"]},
      {"_id":"859059a56199b46107161ce3722dc870","path":"","content":"方便卫生的牙刷，在卫生防疫工作中发挥作用","id":2.0,"n":"牙刷","name":"牙刷（去包装）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/2A.png","cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/2B.png"]},
      {"_id":"859059a56199b46107161ce3722dc871","path":"","content":"胶带，方便人们日常生活 ","id":3.0,"n":"胶带","name":"胶带","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/3A.png","cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/3B.png"]},
      {"_id":"859059a56199b46107161ce3722dc872","path":"","content":"用来补充营养的苹果","id":4.0,"n":"苹果","name":"苹果","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/4A.png"]},
      {"_id":"859059a56199b46107161ce3722dc873","path":"","content":"用来补充营养的梨","id":5.0,"n":"梨","name":"水晶梨","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/5A.png"]},
      {"_id":"859059a56199b46107161ce3722dc874","path":"","content":"用来补充营养的哈密瓜","id":6.0,"n":"哈密瓜","name":"哈密瓜","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/6A.png"]},
      {"_id":"859059a56199b46107161ce3722dc875","path":"","content":"用来补充营养的猕猴桃","id":7.0,"n":"猕猴桃","name":"猕猴桃","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/7A.png"]},
      {"_id":"859059a56199b46107161ce3722dc876","path":"","content":"用来补充营养的柚子","id":8.0,"n":"柚子","name":"柚子","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/8A.png"]},
      {"_id":"859059a56199b46107161ce3722dc877","path":"","content":"用来补充营养的香蕉","id":9.0,"n":"香蕉","name":"香蕉","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/9A.png"]},
      {"_id":"859059a56199b46107161ce3722dc878","path":"https://item.jd.com/27819864627.html","content":"清洁个人卫生的香皂，在卫生防疫工作中发挥作用","id":10.0,"n":"香皂","name":"舒肤佳柠檬清香型香皂（115g）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/10A.png"]},
      {"_id":"859059a56199b46107161ce3722dc879","path":"https://item.jd.com/231028.html","content":"清洁个人卫生的洗手液，在卫生防疫工作中发挥作用","id":11.0,"n":"洗手液","name":"瓶装蓝月亮芦荟抑菌洗手液","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/11A.png"]},
      {"_id":"859059a56199b46107161ce3722dc880","path":"https://item.jd.com/42564486847.html","content":"清洁个人卫生的牙膏","id":12.0,"n":"牙膏","name":"黑人双重薄荷牙膏（225g）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/12A.png"]},
      {"_id":"859059a56199b46107161ce3722dc881","path":"https://item.jd.com/1662204.html","content":"防止蚊虫叮咬的花露水","id":13.0,"n":"花露水","name":"六神花露水（经典花露水、195ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/13A.png"]},
      {"_id":"859059a56199b46107161ce3722dc882","path":"https://item.jd.com/4907637.html","content":"陪伴洗澡的玩具鸭子","id":14.0,"n":"洗澡玩具","name":"满趣健婴幼儿童宝宝戏水洗澡玩具","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/14A.png"]},
      {"_id":"859059a56199b46107161ce3722dc883","path":"https://item.jd.com/7591437.html","content":"放置文具用品的文具盒","id":15.0,"n":"文具盒","name":"迪士尼文具盒（EVA 笔袋-美队盾 牌版）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/15A.png"]},
      {"_id":"859059a56199b46107161ce3722dc884","path":"https://item.jd.com/1129089.html","content":"方便食用的罐装八宝粥","id":16.0,"n":"八宝粥","name":"娃哈哈八宝粥（桂圆莲子、360g）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/16A.png"]},
      {"_id":"859059a56199b46107161ce3722dc885","path":"https://item.jd.com/844099.html","content":"便于储存的食用物资老干妈","id":17.0,"n":"老干妈","name":"老干妈（风味豆豉油制辣椒酱、 280g）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/17A.png"]},
      {"_id":"859059a56199b46107161ce3722dc886","path":"https://item.jd.com/679026.html","content":"食用物资曲奇饼干，可补充能量","id":18.0,"n":"曲奇","name":"皇冠曲奇饼（454g）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/18A.png"]},
      {"_id":"859059a56199b46107161ce3722dc887","path":"https://item.jd.com/776828.html","content":"饮料果珍果汁","id":19.0,"n":"果珍甜橙味","name":"果珍阳光甜橙壶嘴装（400g）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/19A.png"]},
      {"_id":"859059a56199b46107161ce3722dc888","path":"https://item.jd.com/531061.html","content":"清新口气的口香糖","id":20.0,"n":"口香糖","name":"绿箭口香糖（薄荷味、64g）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/20A.png"]},
      {"_id":"859059a56199b46107161ce3722dc889","path":"https://item.jd.com/5076690.html","content":"方便食用的桶装泡面","id":21.0,"n":"公仔面","name":"公仔面（迷你碗仔 面、海鲜味）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/21A.png"]},
      {"_id":"859059a56199b46107161ce3722dc890","path":"https://item.jd.com/4858669.html","content":"食用物资苏打饼干，可补充能量","id":22.0,"n":"苏打饼干","name":"太平梳打饼干（海苔口、100g）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/22A.png"]},
      {"_id":"859059a56199b46107161ce3722dc891","path":"https://item.jd.com/1605987.html","content":"方便食用的薯片","id":23.0,"n":"薯片","name":"可比克原味薯片（105g）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/23A.png"]},
      {"_id":"859059a56199b46107161ce3722dc892","path":"https://item.jd.com/7365133.html","content":"方便食用的薯条","id":24.0,"n":"薯条","name":"乐事    真脆薯条芝士黄油味（电影杯）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/24A.png"]},
      {"_id":"859059a56199b46107161ce3722dc893","path":"https://item.jd.com/885013.html","content":"袋装瓜子","id":25.0,"n":"瓜子","name":"洽洽香瓜子（五香味、308g）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/25A.png"]},
      {"_id":"859059a56199b46107161ce3722dc894","path":"https://item.jd.com/4431934.html","content":"罐装饮料雪碧","id":26.0,"n":"雪碧","name":"罐装雪碧（柠檬味,  330ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/26A.png"]},
      {"_id":"859059a56199b46107161ce3722dc895","path":"https://item.jd.com/959718.html","content":"罐装饮料可乐","id":27.0,"n":"可口可乐","name":"罐装可口可乐（330ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/27A.png"]},
      {"_id":"859059a56199b46107161ce3722dc896","path":"https://item.jd.com/3928905.html","content":"罐装饮料芬达","id":28.0,"n":"芬达","name":"罐装芬达（橙味、330ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/28A.png"]},
      {"_id":"859059a56199b46107161ce3722dc897","path":"https://item.jd.com/770105.html","content":"罐装红牛，方便补充能量","id":29.0,"n":"红牛","name":"罐装红牛（250ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/29A.png"]},
      {"_id":"859059a56199b46107161ce3722dc898","path":"https://item.jd.com/30511944171.html","content":"瓶装娃哈哈饮料","id":30.0,"n":"AD钙奶","name":"娃哈哈  AD  钙奶（220ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/30A.png"]},
      {"_id":"859059a56199b46107161ce3722dc899","path":" https://item.jd.com/39769923722.html ","content":"瓶装果汁果粒橙","id":31.0,"n":"果粒橙","name":"美汁源果粒橙（420ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/31A.png"]},
      {"_id":"859059a56199b46107161ce3722dc900","path":"https://item.jd.com/930750.html","content":"罐装凉茶王老吉","id":32.0,"n":"王老吉","name":"罐装王老吉（310ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/32A.png"]},
      {"_id":"859059a56199b46107161ce3722dc901","path":"https://item.jd.com/2736969.html","content":"罐装凉茶加多宝","id":33.0,"n":"加多宝","name":"罐装加多宝（310ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/33A.png"]},
      {"_id":"859059a56199b46107161ce3722dc902","path":"https://item.jd.com/4458191.html","content":"瓶装饮料冰红茶","id":34.0,"n":"冰红茶","name":"瓶装康师傅冰红茶（500ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/34A.png"]},
      {"_id":"859059a56199b46107161ce3722dc903","path":"https://item.jd.com/4458207.html","content":"瓶装饮料绿茶","id":35.0,"n":"绿茶","name":"瓶装康师傅绿茶（500ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/35A.png"]},
      {"_id":"859059a56199b46107161ce3722dc904","path":"https://item.jd.com/5266400.html","content":"瓶装饮料冰糖雪梨","id":36.0,"n":"冰糖雪梨","name":"康师傅冰糖雪梨（500ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/36A.png"]},
      {"_id":"859059a56199b46107161ce3722dc905","path":"https://item.jd.com/4691274.html","content":"瓶装饮料茶π","id":37.0,"n":"茶π","name":"茶派（玫瑰荔枝红茶、500ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/37A.png"]},
      {"_id":"859059a56199b46107161ce3722dc906","path":"https://item.jd.com/5960568.html","content":"罐装椰汁","id":38.0,"n":"椰汁","name":"罐装椰树牌椰汁（245ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/38A.png"]},
      {"_id":"859059a56199b46107161ce3722dc907","path":"https://item.jd.com/848852.html","content":"瓶装农夫山泉，便于补充水分","id":39.0,"n":"农夫山泉","name":"农夫山泉（550ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/39A.png"]},
      {"_id":"859059a56199b46107161ce3722dc908","path":"https://item.jd.com/923625.html","content":"娃哈哈矿泉水，便于补充水分","id":40.0,"n":"娃哈哈矿泉水","name":"娃哈哈（596ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/40A.png"]},
      {"_id":"859059a56199b46107161ce3722dc909","path":"https://item.jd.com/952862.html","content":"瓶装百岁山，便于补充水分","id":41.0,"n":"百岁山","name":"百岁山（570ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/41A.png"]},
      {"_id":"859059a56199b46107161ce3722dc910","path":"https://item.jd.com/952838.html","content":"瓶装怡宝，便于补充水分","id":42.0,"n":"怡宝","name":"怡宝（555ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/42A.png"]},
      {"_id":"859059a56199b46107161ce3722dc911","path":"https://item.jd.com/1069325.html","content":"瓶装恒大冰泉，便于补充水分","id":43.0,"n":"恒大冰泉","name":"恒大冰泉（500ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/43A.png"]},
      {"_id":"859059a56199b46107161ce3722dc912","path":"https://item.jd.com/923612.html","content":"瓶装康师傅，便于补充水分","id":44.0,"n":"康师傅矿泉水","name":"康师傅（550ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/44A.png"]},
      {"_id":"859059a56199b46107161ce3722dc913","path":"https://item.jd.com/3102732.html","content":"瓶装水今麦郎凉白开，便于补充水分","id":45.0,"n":"今麦郎凉白开","name":"今麦郎（500ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/45A.png"]},
      {"_id":"859059a56199b46107161ce3722dc914","path":"https://item.jd.com/1079443.html","content":"昆仑山矿泉水，便于补充水分","id":46.0,"n":"昆仑山矿泉水","name":"昆仑山（510ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/46A.png"]},
      {"_id":"859059a56199b46107161ce3722dc915","path":"https://item.jd.com/7385787.html","content":"雀巢优活纯净水，便于补充水分","id":47.0,"n":"雀巢优活纯净水","name":"雀巢优活（550ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/47A.png"]},
      {"_id":"859059a56199b46107161ce3722dc916","path":" https://item.jd.com/18324042423.html","content":"冰露瓶装水，便于补充水分","id":48.0,"n":"冰露","name":"冰露（550ml）","pic":["cloud://cloud1-0g7jchkvd1307e1e.636c-cloud1-0g7jchkvd1307e1e-1308164177/info/48A.png"]}
    ]
  },

  onLoad: function (options){
    console.log(options)
    var that = this;
    var id = options.id;
    that.setData({
      id:id
    })
    that.setData({
      detail_content: that.data.shuzu[that.data.id],
    })
  },
  onShow: function (options){
    console.log(options)
    var that = this;
    var id = options.id;
    that.setData({
      id:id
    })
    that.setData({
      detail_content: that.data.shuzu[that.data.id],
    })
  }
})
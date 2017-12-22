// pages/index/hotLawer/hotLawer.js
var app = getApp();
var requestUrl = app.requestUrl;
Page({
  data:{
    hotLawerList: [
      {
        "userId": 123,
        "logo": "../../images/my_oder_lawer-sestem.png",
        "realName": "郑",
        "address": "地区",
        "position": "职务",
        "caseTypes": [     // 擅长类型
          {
            "id": 9,
            "name": "其他",
            "goodAt": 0
          }, {
            "id": 8,
            "name": "法律援助",
            "goodAt": 1
          }
        ],
        "isWork": true   // true 表示已上线, false 表示已下线
      },
      {
        "userId": 123,
        "logo": "../../images/my_oder_lawer-sestem.png",
        "realName": "郑",
        "address": "地区",
        "position": "职务",
        "caseTypes": [
          {
            "id": 9,
            "name": "其他",
            "goodAt": 0
          }, {
            "id": 8,
            "name": "法律援助",
            "goodAt": 1
          }
        ],
        "isWork": true
      },
      {
        "userId": 123,
        "logo": "../../images/my_oder_lawer-sestem.png",
        "realName": "郑",
        "address": "地区",
        "position": "职务",
        "caseTypes": [     // 擅长类型
          {
            "id": 9,
            "name": "其他",
            "goodAt": 0
          }, {
            "id": 8,
            "name": "法律援助",
            "goodAt": 1
          }
        ],
        "isWork": true   // true 表示已上线, false 表示已下线
      },
      {
        "userId": 123,
        "logo": "../../images/my_oder_lawer-sestem.png",
        "realName": "郑",
        "address": "地区",
        "position": "职务",
        "caseTypes": [
          {
            "id": 9,
            "name": "其他",
            "goodAt": 0
          }, {
            "id": 8,
            "name": "法律援助",
            "goodAt": 1
          }
        ],
        "isWork": false
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    if(options.vipPageTitle=="vipPageTitle"){
      wx.setNavigationBarTitle({
        title: 'VIP律师'
      })
    }
    if(options.hotPageTitle=="hotPageTitle"){
      wx.setNavigationBarTitle({
        title: '热门律师'
      })
    }
    wx.request({
      url: requestUrl+"/user/lawyer-all", 
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {

        var hotLawerList = res.data.data;
        that.setData({
          hotLawerList:hotLawerList
        })
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
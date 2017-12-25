//index.js
//获取应用实例
var app = getApp();
var requestUrl = app.requestUrl;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hotLawyer: [
      {
        "userId": 123,
        "logo":"../images/my_oder_lawyer-sestem.png",
        "realName": "郑阳律师",
        "address": "地区",
        "position": "执业律师",
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
        "logo": "../images/my_oder_lawyer-sestem.png",
        "realName": "郑阳律师",
        "address": "地区",
        "position": "执业律师",
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
        "logo": "../images/my_oder_lawyer-sestem.png",
        "realName": "郑阳律师",
        "address": "地区",
        "position": "执业律师",
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
        "logo": "../images/my_oder_lawyer-sestem.png",
        "realName": "郑阳律师",
        "address": "地区",
        "position": "执业律师",
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
      }
    ],
    vipLawyer: [
      {
        "userId": 123,
        "logo": "../images/my_oder_lawyer-sestem.png",
        "realName": "郑阳律师",
        "address": "地区",
        "position": "执业律师",
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
        "logo": "../images/my_oder_lawyer-sestem.png",
        "realName": "郑阳律师",
        "address": "地区",
        "position": "执业律师",
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
        "logo": "../images/my_oder_lawyer-sestem.png",
        "realName": "郑阳律师",
        "address": "地区",
        "position": "执业律师",
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
        "logo": "../images/my_oder_lawyer-sestem.png",
        "realName": "郑阳律师",
        "address": "地区",
        "position": "执业律师",
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
      }
    ]
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    console.log(requestUrl);
    //wx.request({
    //  url: requestUrl+"/user/lawyer-list",
    //  header: {
    //      'content-type': 'application/json'
    //  },
    //  success: function(res) {
    //    console.log(res)
    //    var hotLawyer=res.data.data.hotLawyer;
    //    var vipLawyer=res.data.data.vipLawyer;
    //    that.setData({
    //      hotLawyer:hotLawyer,
    //      vipLawyer:vipLawyer
    //    })
    //  }
    //})
  },
   talkInfo:function(){
    //登录验证
      var that = this;
    //先判断是否已经登录
    if(app.token==""){
      wx.navigateTo({
        url:'../user/loging'
      })
    }else{
      wx.navigateTo({
        url: '../mes/mes'
      })
    }
  },
  kspp:function(){
    //快速匹配
    wx.navigateTo({
      url: 'quickmatch/quickmatch'
    })
  }
})
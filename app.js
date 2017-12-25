
App({ 
  myhead:"",
  //自身ID
  myId:"",
  //request请求数据的全局变量
  requestUrl:"url",
  //设置token
  token:"",
  yesorno:false,      //是否登录了
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
          console.log(res);
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
   onShareAppMessage: function () {
    return {
      title: '律正-用户版',
      path: 'pages/index/index'
    }
  }
});

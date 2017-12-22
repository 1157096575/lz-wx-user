// pages/mes/systemInfo.js
var app = new getApp();
Page({
  data:{
    NO:0,
    infolist:[]
  },
  onLoad:function(options){
    
      var  that = this;
     //系统信息
    wx.request({
      url:app.requestUrl+'user/message',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {}, // 设置请求的 header
      success: function(res){
        that.setData({
          NO:res.data.data.noReadNum,
          infolist:res.data.data.messageList
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
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
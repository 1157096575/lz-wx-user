// pages/user/TC.js
var app= new getApp();

Page({
  data:{
      errorInfo:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
   errorShow:function(info)
  {
    //显示错误信息的方法
    this.setData({
      errorInfo:[info]
    });
  },
   errorTimeOut:function()
  {
    //信息暂留时间为2S
    var that=this;
      setTimeout(function(){
        that.errtimenull();
      },2000);
  },
  errtimenull:function()
  {
    //清空错误信息数组的方法----因为小程序无法操控dom节点，此方法必须
      this.setData({
      errorInfo:[]
    });
  },
  tjtc:function(res)
  {

    var that=this;
    wx.request({
      url: app.requestUrl+'user/feedback',
      data: {
        "type":2,
        "content":res.detail.value.tccontent
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
         "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header
      success: function(res){
         that.errorShow(res.data.msg);
         that.errorTimeOut(); 
      }
    })
  }
})
// pages/user/index.js
var  app = new getApp();
Page({
  data:{
    headsrc:"../images/my_profile1.png",
    indexinit:[1],
    username:[],
    myorderUrl:"",
    szUrl:"",
    errorInfo:[],
    mes:""
  },
  onLoad:function(options){
    var that=this;
    // 页面初始化 options为页面跳转所带来的参数
    //如果用户已经登录成功 请求用户的基本信息
    if(app.token==""){
      return;
    }
    wx.request({
      url: app.requestUrl+'user/user-info',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "token":app.token
      }, // 设置请求的 header
      success: function(res){
        // success
        console.log(res);
        if(res.data.code==1){
          //登录状态显示用户姓名
          that.setData({
            indexinit:[],
            username:[res.data.data.realName]
          });
        }
      }
    });
  },
   errorShow:function(info){
    //显示错误信息的方法
    this.setData({
      errorInfo:[info]
    });
  },    
  //验证部分
  errtimenull:function(){
    //清空错误信息数组的方法----因为小程序无法操控dom节点，此方法必须
    this.setData({
      errorInfo:[]
    });
  },
  errorTimeOut:function(){
    //信息暂留时间为2S
    var that=this;
      setTimeout(function(){
        that.errtimenull();
      },2000);
  },
   myorder:function(e){
    //如果没登录
    var  that = this;
    if(app.token==""){
      that.errorShow("请先登录哦");
      that.errorTimeOut();  
      return false;
    }else{
      wx.navigateTo({
        url: 'order'
      });
    }
  },
  talkInfo:function(){
    var that = this;
    //先判断是否已经登录
    if(app.token==""){
      wx.navigateTo({
        url:'loging'
      })
    }else{    
      wx.redirectTo({
        url: '../mes/mes'
      })
    }
  },
  sz:function(){
    var  that = this;
    if(app.token==""){
      that.errorShow("请先登录哦");
      that.errorTimeOut();  
      return false;
    }else{
      wx.navigateTo({
        url: 'sz'
      });
    }
  }
})
// pages/mes/mes.js
var  app  =  new getApp();
Page({
  data:{
      listcontent:[],        //联系人列表
      xtinfo:[],
      xtoninfo:"暂无信息"
  },
  onLoad:function(options){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    var rand= Math.random();
    //联系人列表
    wx.request({
      url: app.requestUrl+'user/user-advice?rand='+rand,
      data: {
        "state":1
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "token":app.token
      }, 
      success: function(res){
        //解析数据进行排版
        var list  = res.data.data.adviceList;
        that.setData({
            listcontent:list
        });
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    });
    //系统信息
    wx.request({
      url:app.requestUrl+'user/message',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {}, // 设置请求的 header
      success: function(res){
        // success
        if(res.data.data.messageList.length>0)
        {
            that.setData({
            xtoninfo:res.data.data.messageList[0].title
        })
        }
        that.setData({
          xtinfo:res
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
  },
  talksrc:function(e)
  {
    //点击具体人物跳转至聊天页面
    var lawyerId=e.currentTarget.dataset.lawyerinfo.lawyerId;
    var lawyerName = e.currentTarget.dataset.lawyerinfo.lawyerName;
    var adviceId=e.currentTarget.dataset.lawyerinfo.id;
    var lockState=e.currentTarget.dataset.lawyerinfo.state.code;
    var endTime = e.currentTarget.dataset.lawyerinfo.endTime;
    wx.navigateTo({
      url: '../index/chat/chat?lawyerName='+lawyerName+"&lawyerId="+lawyerId+"&adviceId="+adviceId+"&lockState="+lockState+"&endTime="+endTime,
      success: function(res){
        //设置消息已读
           wx.request({
          url: app.requestUrl+'/user/modify-message',
          data: {
              "count":1
          },
          method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {
            "token":app.token
          }, // 设置请求的 header
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        });
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  systeminfo:function()
  {
    //点击进入系统信息
    wx.redirectTo({
      url: 'systemInfo',
      success: function(res){
        // success将未读信息设置成已读
        wx.request({
          url: app.requestUrl+'/user/modify-message',
          data: {
              "count":1
          },
          method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {
            "token":app.token
          }, // 设置请求的 header
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
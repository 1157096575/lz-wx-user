// pages/user/loging.js

var app = getApp();
var  md5 = require("../../utils/MD5.js");

Page({
  data:{
    //如果是注册页面过来的拿到注册时用户输入的账号
    userphone:"",
    userpwd:"",
    errorInfo:[]
  },
  onLoad:function(options){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      userphone:options.userPhone
    });     
    
     if(!that.checkedForm(wx.getStorageSync('userName'),wx.getStorageSync('userPwd')))
    {
        that.setData({
          userphone:wx.getStorageSync('userName'),
          userpwd:wx.getStorageSync('userPwd')
        });
    }
  },
   errorShow:function(info)
  {
    //显示错误信息的方法
    this.setData({
      errorInfo:[info]
    });
  },    ////////////////////////////////验证部分
  errtimenull:function()
  {
    //清空错误信息数组的方法----因为小程序无法操控dom节点，此方法必须
      this.setData({
      errorInfo:[]
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
  checkedForm:function(...formsj)
  {
    //验证空值
    for(var i=0;i<formsj.length;i++)
    {

      if(formsj[i]==""||formsj[i]==undefined||formsj[i]==null)
      {
          return true;
      }
    }
  },
  checkedPwd:function(pwd1,pwd2)
  {
    //验证密码
    if(pwd1==pwd2)
    {
      return false;
    }else{
      return true;
    }
  },
  checkedPhone:function(phonenum)
  {

    var regex=new RegExp("^((1[0-9][0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$");
     if(regex.test(phonenum))
     {
        return false;
     }else{
       return true;
     }
  },/////////////////////////////////验证部分
  logingUser:function(res)
  {

    //登录接口
    var   that = this;
    var   loginInfo = res.detail.value;                             //获取用户登录信息数组数据
    //将密码进行MD5加密
    var   pwd = md5.hexMD5(loginInfo.pwd).toString().toUpperCase();
      if(that.checkedForm(loginInfo.user,loginInfo.pwd))
    {
       that.errorShow("请将信息填写完整");
       that.errorTimeOut();    
        return false;
    }

    if(that.checkedPhone(loginInfo.user))
    {
      //验证电话号码
        that.errorShow("电话号码不正确");
        that.errorTimeOut();  
        return false;
    }
    //发起登录请求
    wx.request({
      url: app.requestUrl+'user/login',
      data: {
        "user":loginInfo.user,
        "pwd":pwd
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
         "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header
      success: function(res){
         that.errorShow(res.data.msg);
         that.errorTimeOut(); 
         setTimeout(function(){
          if(res.data.code==1)
          {
             // success
          app.myhead=res.data.data.logo;
          app.myId=res.data.data.id;      //自身ID
            //登录成功------的处理
            //1.如果登录成功，将账号密码永久储存
            //首次登陆获取token
            app.token=res.data.token;
            app.yesorno=true;             //已经登录了
            wx.setStorageSync('userName',loginInfo.user);    
            wx.setStorageSync('userPwd',loginInfo.pwd);
            wx.redirectTo({
             url: 'myfirst'          //登录成功跳转至首页
           });
         
         }else{
          //登录失败
          return false;
         }
         },2000);
      }
    })
  }
})
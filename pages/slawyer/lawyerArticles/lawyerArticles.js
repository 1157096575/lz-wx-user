// pages/index/lawyerArticles/lawyerArticles.js
var app = getApp();
var requestUrl = app.requestUrl;
Page({
  data:{
    lawyerName:"",
    lawyerAdd:"",
    articleData:  [
      { "id": 0, "title": "房东恶意违约深漂损失近百万 小产权房还能租吗?", "publishTime": "2017-10-19 19:06:35", "backGroundPic": "http://resource.fy13322.com/config/article/8d7376d9722045d1a4a6045bc49e2016.jpg", "readNum": 72, "shortContent": "在深圳30多年的发展历程中，小产权房一直是一个无法抹去的烙印", "concernNum": 2, "realName": "赖智欣" }, 
      { "id":1, "title": "小心！公司“帮忙”开收入证明，却被告了，这事你怎么看？", "publishTime": "2017-10-19 19:01:06", "backGroundPic": "http://resource.fy13322.com/config/article/43107af6fce04abda73d11e77e0907cd.jpg", "readNum": 74, "shortContent": "具体案例如下： 一家广告公司给别人开出月工资15000元的收", "concernNum": 4, "realName": "赖智欣" }, 
      { "id": 2, "title": "税务法律风险管理|取得违约补偿款是否需要缴纳增值税？", "publishTime": "2017-10-19 18:59:36", "backGroundPic": "http://resource.fy13322.com/config/article/eda43a331e4f42ac937a9aed526732f1.jpg", "readNum": 30, "shortContent": "经济业务往来中，商务主体一般会签订各种各样的合同，以明确交易", "concernNum": 1, "realName": "赖智欣" }, 
      { "id": 3, "title": "你必须知道的侵占工程款的几个刑事法律风险", "publishTime": "2017-10-19 18:56:04", "backGroundPic": "http://resource.fy13322.com/config/article/5de1f10a1c53478a92d80e00a1f0b2fa.jpg", "readNum": 25, "shortContent": "由于建筑公司客观上不能对项目经理进行有效管理，导致实践中项目", "concernNum": 1, "realName": "赖智欣" }, 
      { "id": 4, "title": "宝安男子抱婴儿插队遭拒暴打医生 该不该获轻判引发争论", "publishTime": "2017-10-19 17:56:09", "backGroundPic": "http://resource.hao13322.com/user/1948/article/22fc58d668974bbfaa2f7e1b1ca3bf73.jpg", "readNum": 52, "shortContent": "男子暴力伤医之后被刑事拘留，今日，该案件在宝安区人民法院开庭", "concernNum": 7, "realName": "赖智欣" }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    if(options.lawyerAdd){
      that.setData({
          lawyerAdd:options.lawyerAdd
        })
    }
    if(options.lawyerName){
      that.setData({
          lawyerName:options.lawyerName
        })
    }
    if(options.lawyerLogo){
      that.setData({
          lawyerLogo:options.lawyerLogo
        })
    }
    if(options.lawyerId){
      var lawyerId = parseInt(options.lawyerId);
      wx.request({
        url: requestUrl+"/user/article-list", 
        data:{userId:lawyerId},
        header: {
            "content-type": "application/json",
            //'content-type': 'application/x-www-form-urlencoded', 
            "token":app.token
        },
        success: function(res) {
          var articleData = res.data.data;
          that.setData({
            articleData:articleData
          })
        }
      })
    }
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
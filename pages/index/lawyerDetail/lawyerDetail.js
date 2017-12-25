// pages/index/lawyerDetail/lawyerDetail.js
var app = getApp();
var requestUrl = app.requestUrl;
Page({
  data:{
    lawyerMes: {
      "userId": 2843, "address": "北京北京市", "realName": "郑阳", "logo": "../../images/my_oder_lawyer-sestem.png", "caseTypes": [{ "id": 1, "name": "公司法律" }, { "id": 2, "name": "知识产权" }, { "id": 3, "name": "劳动纠纷" }, { "id": 4, "name": "合同纠纷" }], "jobList": [{ "id": 58, "beginTime": "2011-01-01 00:00:00", "endTime": "2012-01-01 00:00:00", "type": { "code": 1, "value": "工作" }, "name": "北京大都律师事务所", "position": "律所合伙人" }], "eduList": [{ "id": 59, "beginTime": "2008-01-01 00:00:00", "endTime": "2010-01-01 00:00:00", "type": { "code": 2, "value": "教育" }, "name": "民商法", "position": "" }], "articleTotal": 5, "articleList": "http://user.fy13322.com/user/article-list?2843", "code": "11101201610117870", "company": "北京市大都律师事务所", "workTime": 1, "caseNum": 0, "orderNum": 0, "goodsList": [] }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  contactEvent:function(e){
    var that = this;
    var lawyerId = parseInt(that.data.lawyerId);
    if(app.token==""){
      wx.redirectTo({
        url: '../../user/loging'
      })
      return;
    }
    wx.request({
      url:requestUrl+"/user/appointment-contact",
      method : "POST",
      header: {
          //"content-type": "application/json",
          'content-type': 'application/x-www-form-urlencoded', 
          "token":app.token
      },
      data:{lawyerId:lawyerId},
      success: function(res) {
        if(res.data.code==1){
          var laywerData = res.data.data;
            var endTime = laywerData.endTime;
            var lawyerId = laywerData.lawyerId;
            var lawyerName = laywerData.lawyerName;
            var lockState = laywerData.state.code;
            var lawyerLogo =laywerData.logo;
            var adviceId = laywerData.id;
          wx.redirectTo({
            url:"../chat/chat?endTime="+endTime+"&lawyerId="+lawyerId+"&lawyerName="+lawyerName+"&lockState="+lockState+"&lawyerLogo="+lawyerLogo+"&adviceId="+adviceId
          })
        }
      }
    })
  },
  gotoArticles : function(){
    var that = this;
    var articleA = that.data.lawyerMes.articleTotal || "";
    var lawyerId = that.data.lawyerMes.userId || "";
    var lawyerName = that.data.lawyerMes.realName || "";
    var lawyerAdd = that.data.lawyerMes.address || "";
    var lawyerLogo = that.data.lawyerMes.logo || "";
    if(articleA){
      wx.redirectTo({
        url :"../lawyerArticles/lawyerArticles?lawyerId="+lawyerId+"&lawyerName="+lawyerName+"&lawyerAdd="+lawyerAdd+"&lawyerLogo="+lawyerLogo
      })
    }
  }
})
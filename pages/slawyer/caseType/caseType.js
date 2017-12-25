// pages/index/caseType/caseType.js
var app = getApp();
var requestUrl = app.requestUrl;
Page({
  data:{
    caseTypeList: [
      {
        "id": 1,
        "name": "公司法律 "
      }, {
        "id": 2,
        "name": "婚姻家庭"
      },
      {
        "id": 3,
        "name": "知识产权"
      },
      {
        "id": 4,
        "name": "劳动纠纷"
      },
      {
        "id": 5,
        "name": "合同纠纷"
      },
      {
        "id": 6,
        "name": "合伙经营"
      },
      {
        "id": 7,
        "name": "刑事责任"
      }
    ]
  },
  chooseType:function(e){
      var that = this;
      var index = e.currentTarget.id;
      var caseTypeLists = that.data.caseTypeList;
      for(var i=0, lenI=caseTypeLists.length; i<lenI; i++){
        caseTypeLists[i].checked = false;
      }
      caseTypeLists[index].checked = true;
      that.setData({
        caseTypeList : caseTypeLists
      })
      var timerId = setTimeout(function(){
        wx.redirectTo({
          url: '../quickmatch/quickmatch?caseType='+caseTypeLists[index].name+'&caseId='+caseTypeLists[index].id
        });
        clearTimeout(timerId);
      },300)
      
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.request({
      url: requestUrl+"/user/case", 
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        var caseTypeList = res.data.data;
        for(var i=0, lenI=caseTypeList.length; i<lenI; i++){
          caseTypeList[0].checked = true;
        }
        that.setData({
          caseTypeList : caseTypeList
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
// pages/index/quickmatch/quickmatch.js
var app = getApp();
var requestUrl = app.requestUrl;
var timeId01,timeId02, time01 = 0, time02 = 0;
Page({
  data:{
    caseType:{caseType:"请选择",choosed:false},
    city:{city:"请选择",choosed:false},
    matching:false,
    searchMT0:false,
    searchMT1:false,
    searchMT2:false,
    second:'00',
    minute:'00'
  },
  //文本框事件
  caseDesc:function(e){
    var that = this;
    if(e.detail.value){
      that.setData({
        caseDescribe : e.detail.value
      })
      /*wx.setStorage({
        key:"caseDescribe",
        data:e.detail.value
      })*/
      wx.setStorageSync('caseDescribe', e.detail.value)
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数  
    var that = this;
    wx.getStorage({
      key: 'caseDescribe',
      success: function(res) {
            that.setData({
              caseDescribe : res.data
            })
      },
      fail:function(){
      }
    })
    
    if(options.caseType){
      var caseId = parseInt(options.caseId);
      that.setData({
        caseType : {caseType:options.caseType,caseId:caseId,choosed:true}
      })
      wx.setStorageSync('caseType', that.data.caseType)
    }
    if(options.city){
      that.setData({
        city:{city:options.city,choosed:true}
      })
      wx.setStorageSync('city', that.data.city)
    }

    try {
      var caseType = wx.getStorageSync('caseType')
      if (caseType) {
          that.setData({
              caseType : caseType
            })
      }
    } catch (e) {
      // Do something when catch error
    }
    try {
      var city = wx.getStorageSync('city')
      if (city) {
          that.setData({
              city : city
            })
      }
    } catch (e) {
      // Do something when catch error
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
  },
  //快速匹配事件
  quickmatch:function(){
    var that = this;
    if(!that.data.city.choosed){
      that.setData({
        tipCon : "请选择您所在地区"
      })
    }else if(!that.data.caseType.choosed){
      that.setData({
        tipCon : "请选择案件类型"
      })
    }else{
      that.setData({
        matching : true,
      })
      var timersearchMT0 = setTimeout(function(){
        that.setData({
          searchMT0 : true
        })
        clearTimeout(timersearchMT0);
      },1000)
      var timersearchMT1 = setTimeout(function(){
        that.setData({
          searchMT1 : true
        })
        clearTimeout(timersearchMT1);
      },2000)
      refrash();
      function refrash(){
          timeId02 = setInterval(function(){
              time02++;
              if(time02>59){
                  time02=0;
              }
              if(time02<10){
                  that.setData({
                    second : "0"+time02
                  })
              }else{
                  that.setData({
                    second : time02
                  })
              }
          }, 1000);
          timeId01 = setInterval(function(){
              time01++;
              if(time01<10){
                  that.setData({
                    minute :"0" + time01
                  })
              }else{
                  that.setData({
                    minute : time01
                  })
              }
          }, 60000);
      }
      
      var timersearchMT3 = setTimeout(function(){
        var cityName = that.data.city.city;
        var caseId = that.data.caseType.caseId;
        var content = that.data.caseDescribe||"";
        wx.request({
          url: requestUrl+'/user/match-lawyer', 
          method:"POST",
          data:{cityName:cityName,caseId:caseId,content:content},
          header: {
             'content-type': 'application/x-www-form-urlencoded', 
             "token":app.token
             },
          success: function(result) {
            if(result){
                if(result.data.code==1){
                    var laywerData = result.data.data;
                    var endTime = laywerData.endTime;
                    var lawyerId = laywerData.lawyerId;
                    var lawyerName = laywerData.lawyerName;
                    var lockState = laywerData.state.code;
                    var lawyerLogo =laywerData.logo;
                    var adviceId = laywerData.id;
                    clearTimeout(timersearchMT3);
                    that.setData({
                      searchMT2 : true
                    })
                    var time = setTimeout(function(){
                      wx.navigateTo({
                        url:"../chat/chat?endTime="+endTime+"&lawyerId="+lawyerId+"&lawyerName="+lawyerName+"&lockState="+lockState+"&lawyerLogo="+lawyerLogo+"&adviceId="+adviceId+"&content="+content+"&fromQM="+1
                      })
                      clearInterval(timeId02);
                      clearInterval(timeId01);
                      that.setData({
                        matching :false,
                        searchMT0:false,
                        searchMT1:false,
                        searchMT2:false,
                        second:'00',
                        minute:'00'
                      })
                      time01 = 0;
                      time02 = 0;
                    },1000);
                }else if(result.data.code==0){
                  clearTimeout(timersearchMT3);
                  that.setData({
                     cannotFindLawyerT : true
                    })
                  var timercannotFind = setTimeout(function(){
                    that.setData({
                     cannotFindLawyerT : ""
                    })
                    clearTimeout(timercannotFind);
                  },3000)
                }
            }
            
          },
          fail:function(){
            clearTimeout(timersearchMT3);
            that.setData({
              cannotFindLawyerT : true
            })
            var timercannotFind = setTimeout(function(){
              that.setData({
                cannotFindLawyerT : ""
              })
              clearTimeout(timercannotFind);
            },3000)
          }
        })
        clearTimeout(timersearchMT3);
      },3000)
    } 
  },
  //长按取消事件
  cancelSearch:function(e){
    var that = this;
    that.setData({
        matching :false,
        searchMT0:false,
        searchMT1:false,
        searchMT2:false,
        second:'00',
        minute:'00'
      })
    clearInterval(timeId01);
    clearInterval(timeId02);
    time01 = 0;
    time02 = 0;
  }
})
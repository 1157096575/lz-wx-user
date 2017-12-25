var city = require('../../../utils/city.js');
var app = getApp()
Page({
  data: {
    serchvalue:"",
    sf:"",
    ml:"50rpx auto",
    qx:true,
    inwidth:"95%",
    searchLetter: [],
    showLetter: "",
    winHeight: 0,
    // tHeight: 0,
    // bHeight: 0,
    cityList: [],
    isShowLetter: false,
    scrollTop: 0,//置顶高度
    scrollTopId: '',//置顶id
    city: "上海市",
    hotcityList: [{ cityCode: 110000, city: '北京市' }, { cityCode: 310000, city: '上海市' }, { cityCode: 440100, city: '广州市' }, { cityCode: 440300, city: '深圳市' }, { cityCode: 330100, city: '杭州市' }, { cityCode: 320100, city: '南京市' }, { cityCode: 420100, city: '武汉市' }, { cityCode: 410100, city: '郑州市' }, { cityCode: 120000, city: '天津市' }, { cityCode: 610100, city: '西安市' }, { cityCode: 510100, city: '成都市' }, { cityCode: 500000, city: '重庆市' }],
    tempcity:[],
    showOrhide:[1]
  },
  onLoad: function () {
    // 生命周期函数--监听页面加载
    var searchLetter = city.searchLetter;
    var cityList = city.cityList();
    var sysInfo = wx.getSystemInfoSync();
    var winHeight = sysInfo.windowHeight;
    var itemH = winHeight / searchLetter.length;
    var tempObj = [];
    for (var i = 0; i < searchLetter.length; i++) {
      var temp = {};
      temp.name = searchLetter[i];
      temp.tHeight = i * itemH;
      temp.bHeight = (i + 1) * itemH;
      tempObj.push(temp)
    }
    this.setData({
      winHeight: winHeight,
      itemH: itemH,
      searchLetter: tempObj,
      cityList: cityList
    })

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },
  clickLetter: function (e) {
    var showLetter = e.currentTarget.dataset.letter;
    this.setData({
      showLetter: showLetter,
      isShowLetter: true,
      scrollTopId: showLetter,
    })
    var that = this;
    setTimeout(function () {
      that.setData({
        isShowLetter: false
      })
    }, 1000)
  },
  //选择城市
  bindCity: function (e) {
    var that = this;

  if(e.target.dataset.c!=undefined)
  {
     that.setData({
       city:e.target.dataset.c
        })

  }else{
    that.setData({

       city:e.currentTarget.dataset.city
       
        })
  }

   
    var city = that.data.city;

    var timerId = setTimeout(function(){
        wx.redirectTo({
          url: '../quickmatch/quickmatch?city='+city
        });
        clearTimeout(timerId);
      },300)
  },
  //选择热门城市
  bindHotCity: function (e) {
    this.setData({
      city: e.currentTarget.dataset.city
    })
    var city = this.data.city;
    var timerId2 = setTimeout(function(){
        wx.redirectTo({
          url: '../quickmatch/quickmatch?city='+city
        });
        clearTimeout(timerId2);
      },300)
  },
  //点击热门城市回到顶部
  hotCity: function () {
    this.setData({
      scrollTop: 0,
    })
  },
  getInvalue:function(e)
  {
    var  that= this;
    //获取当前输入的值
    var   invalue  = e.detail.value;
    //获取所有地点值
    var sj=that.data.cityList;
    //搜索临时储存数组
    var tempcity=[];

    for(let k =0;k<sj.length;k++)
    {

        for(let i =0; i<sj[k].cityInfo.length;i++)
        {
            if(sj[k].cityInfo[i].city.indexOf(invalue)>=0)
            {
                tempcity.push(sj[k].cityInfo[i].city);
            }
        }
    }

      if(invalue==" " || tempcity.length==0 ||invalue.length==0)
      {
           that.setData({
          tempcity:[],
          showOrhide:[1]
         });
      }else{
          that.setData({
          tempcity:tempcity,
          showOrhide:[]
         });
      }
  },
  serchfocus:function()
  {
    var  that = this;
    that.setData({
      sf:"flex",
      qx:false,
      inwidth:"80%",
      ml:"25rpx 25rpx"
    });
  },
  qxsearch:function()
  {

   var  that = this;
    that.setData({
      sf:"",
      qx:true,
      inwidth:"95%",
      ml:"25rpx auto",
      serchvalue:"",
      tempcity:[],
      showOrhide:[1]
    });

  }
})
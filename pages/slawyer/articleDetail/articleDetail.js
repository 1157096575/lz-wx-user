// pages/index/articleDetail/articleDetail.js
var WxParse = require('../../../utils/wxParse/wxParse.js');
var app = getApp();
var requestUrl = app.requestUrl;
Page({
  data:{
    aa: 12,
    articleDataList: [
      { 
        "title": "房东恶意违约深漂损失近百万 小产权房还能租吗?", 
        "publishTime": "2017-10-19 19:06:35", 
        "readNum": 73, "shortContent": "", 
        "content": "<div><p><span style=\"font-size: 14px;\">在深圳30多年的发展历程中，小产权房一直是一个无法抹去的烙印，根据2015年7月15日公布的《市规划国土委关于查违和历史遗留违建处理工作的汇报》，截至2014年底，深圳市违法建筑达37.30万栋，总面积4.28亿平方米，占全市的建筑总量50%。</span></p><p>对于千千万万的深漂来说，深圳的小产权房是他们来深的落脚地，相对低廉的房租也为他们提供了一处安身立命之所。”</p><p>&nbsp;文章来源于平台用户，仅代表用户个人观点，不代表平台立场，如有侵权，可联系告知，我们将积极配合，谢谢！</p></div><p><br></p>", 
        "logo": "../../images/my_oder_lawyer-sestem.png",
        "concernNum": 2, 
        "realName": "郑" 
      },
      { 
        "title": "小心！公司“帮忙”开收入证明，却被告了，这事你怎么看？", 
        "publishTime": "2017-10-19 19:01:06", 
        "readNum": 75, 
        "shortContent": "", 
        "content": "<p class=\"s5\" style=\"text-align: start; margin-top: 0px; margin-bottom: 0px; line-height: 21.600000381469727px;\"><span class=\"s4\" style=\"line-height: 14.399999618530273px; font-weight: bold;\"><span class=\"bumpedFont15\" style=\"line-height: 21.600000381469727px; -webkit-tap-highlight-color: rgba(26, 26, 26, 0.301961); -webkit-text-size-adjust: auto; background-color: rgba(255, 255, 255, 0);\"><font size=\"3\">具体案例如下：</font></span></span></p><p class=\"s5\" style=\"text-align: start; margin-top: 0px; margin-bottom: 0px; line-height: 21.600000381469727px;\"><span class=\"s6\" style=\"line-height: 12px;\"><span class=\"bumpedFont20\" style=\"line-height: 24px; -webkit-tap-highlight-color: rgba(26, 26, 26, 0.301961); -webkit-text-size-adjust: auto; background-color: rgba(255, 255, 255, 0);\"><font size=\"3\">一家广告公司给别人开出月工资15000元的收入证明，结果被对方告了，喊赔3万元经济补偿金。老板否认对方是公司员工，开收入证明是方便对方办银行信用卡，纯属帮忙。</font></span></span></p>", 
        "logo": "../../images/my_oder_lawyer-sestem.png",
        "concernNum": 4, 
        "realName": "郑阳" },
      { 
        "title": "税务法律风险管理|取得违约补偿款是否需要缴纳增值税？", 
        "publishTime": "2017-10-19 18:59:36", 
        "readNum": 31, 
        "shortContent": "", 
        "content": "<p class=\"s5\" style=\"text-align: start; margin-top: 0px; margin-bottom: 0px; line-height: 21.600000381469727px;\"><span class=\"s4\" style=\"line-height: 12px;\"><span class=\"bumpedFont20\" style=\"line-height: 24px; -webkit-tap-highlight-color: rgba(26, 26, 26, 0.301961); -webkit-text-size-adjust: auto; background-color: rgba(255, 255, 255, 0);\"><font size=\"3\">经济业务往来中，商务主体一般会签订各种各样的合同，以明确交易各方的权利义务，保障交易的顺利进行。又基于交易环境、对象等的复杂性，商务主体一般均会在合同中约定违约方需要向守约方支付违约补偿款等违约责任。然而，当商务主体取得违约补偿款项时是否需要缴纳增值税？</font></span></span></p>", 
        "logo": "../../images/my_oder_lawyer-sestem.png",
        "concernNum": 1, 
        "realName": "郑" },
      { 
        "title": "你必须知道的侵占工程款的几个刑事法律风险", 
        "publishTime": "2017-10-19 18:56:04", 
        "readNum": 26, 
        "shortContent": "", 
        "content": "<p>&nbsp; &nbsp; &nbsp; &nbsp; 由于建筑公司客观上不能对项目经理进行有效管理，导致实践中项目经理&nbsp;“侵占”工程预付款的现象大量存在。那么如何防范这一类事件的发生呢？\n</p><p>　　1、司法实践中，如何区分挂靠经营和内部承包经营？\n</p></p>", 
        "logo": "../../images/my_oder_lawyer-sestem.png",
        "concernNum": 1, 
        "realName": "郑阳" },
      { 
        "title": "宝安男子抱婴儿插队遭拒暴打医生 该不该获轻判引发争论", 
        "publishTime": "2017-10-19 17:56:09", 
        "readNum": 53, 
        "shortContent": "", 
        "content": "<p>男子暴力伤医之后被刑事拘留，今日，该案件在宝安区人民法院开庭审理，公诉人称被告涉嫌寻衅滋事罪建议量刑一年至两年半，被告辩护人称情节轻微无主观故意建议轻判。男子在庭审当中多次落泪表示认罪。案件将择日宣判。\n</p><p><b>公诉人：属于寻衅滋事\n</b></p>", 
        "logo": "../../images/my_oder_lawyer-sestem.png",
        "concernNum": 7, 
        "realName": "郑阳" }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    if(options.articleId){
      var articleId = parseInt(options.articleId);
      var articleData = this.data.articleDataList[articleId];
      var article = articleData.content || '';
      WxParse.wxParse('article', 'html', article, that, 5);
      var replyArr = [];
      for (let i = 0; i < replyArr.length; i++) {
        WxParse.wxParse('reply' + i, 'html', replyArr[i], that);
        if (i === replyArr.length - 1) {
          WxParse.wxParseTemArray("replyTemArray", 'reply', replyArr.length, that, 0)
        }
      }
      that.setData({
        articleData: articleData
      })
    }
    //console.log(that.data)
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
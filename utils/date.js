// 初始化“课程表”日期  
// 初始化date对应的月份的日期列表  
// -1表示非本月日期  
// 1表示今天  
// 2表示本月非今天的日期  
function initMonthDates(date, isNextMonth=false){  
    var datas = []  
    var month_this = date.getMonth() + 1; // 本月的月份  
    var month_last = month_this == 1? 12: (month_this - 1) // 上个月的月份  
    var month_next = month_this == 12? 1 : (month_this + 1) // 下个月的月份  
  
    var year_this = date.getFullYear()  
    var year_last = month_last == 12? (year_this - 1):year_this  
    var year_next = month_next == 1?(year_this + 1):year_this  
      
    var day_this = date.getDay() //今天是本周的第几天  
    var date_this = date.getDate() // 今天是本月的第几天  
  
    var lastNum = date_this - day_this  
    while(lastNum > 0){  
        lastNum = lastNum - 7  
    }  
  
    var dayNum_last = DayNumOfMonth(year_last, month_last) // 上个月有多少天  
    var dayNum = dayNum_last + lastNum  
    for(var i = 0, c = Math.abs(lastNum); i < c; i++){  
        var tmp = {}  
  
        tmp.year = year_last  
        tmp.month = month_last  
        tmp.day = dayNum  
        tmp.type = -1  
  
        if(dayNum == 1){  
            tmp.dateShow = month_last + "月"  
        }else{  
            tmp.dateShow = dayNum+1
        }  
  
        dayNum++  
        datas.push(tmp)  
    }  
  
    var dayNum_this = DayNumOfMonth(year_this, month_this) //这个月有多少天  
    for(var i = 1; i <= dayNum_this; i++){  
        var tmp = {}  
  
        tmp.year = year_this  
        tmp.month = month_this  
        tmp.day = i  
  
        if(isNextMonth){  
            if(i == 1){  
                tmp.type = 1  
            }else{  
                tmp.type = 2  
            }  
        }else{  
            if(i == date_this){  
                tmp.type = 1  
            }else{  
                tmp.type = 2  
            }  
        }  
          
  
        if(i == 1){  
            tmp.dateShow = month_this + "月"  
        }else{  
            tmp.dateShow = i  
        }  
  
        datas.push(tmp)  
    }  
  
    var dayNum_next = dayNum_this - date_this + day_this  
    while(dayNum_next > 0){  
        dayNum_next -= 7  
    }  
  
    for(var i = 1, c = Math.abs(dayNum_next); i <= c; i++){  
        var tmp = {}  
  
        tmp.year = year_next  
        tmp.month = month_next  
        tmp.day = i  
        tmp.type = -1  
  
        if(i == 1){  
            tmp.dateShow = month_next + "月"  
        }else{  
            tmp.dateShow = i  
        }  
  
        datas.push(tmp)  
    }  
    return datas  
}  
  
function DayNumOfMonth(year,month)  
{  
    return new Date(year,month,0).getDate();  
}  
  
// 初始化下个月的日期列表  
// offset为偏移量，offset默认为0，offset＝1表示获取应该获取到的那个月的下一个月的数据  
function initNextMonthDates(offset = 0){  
    var date = new Date()  
    var nextDate = new Date(date.setMonth(date.getMonth() + 1 + offset))  
    return initMonthDates(nextDate, true)  
}  
  
// 初始化这个月的日期列表  
// offset为偏移量，offset默认为0，offset＝1表示获取应该获取到的那个月的下一个月的数据  
function initThisMonthDates(offset = 0){  
    var date = new Date()  
    var thisDate = new Date(date.setMonth(date.getMonth() + offset))  
    return initMonthDates(thisDate)  
}  
  
function initRowList(num){  
    var arr = []  
    for(var i = 0; i < num; i++){  
        arr.push(i)  
    }  
    return arr  
}  
  
module.exports = {  
    initThisMonthDates : initThisMonthDates,  
    initNextMonthDates : initNextMonthDates,  
    initRowList : initRowList  
}  
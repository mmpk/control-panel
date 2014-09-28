/**
 * @module ui/calendar.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

var cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    cal_months_labels = ['January', 'February', 'March', 'April',
                         'May', 'June', 'July', 'August', 'September',
                         'October', 'November', 'December'],
    cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    cal_current_date = new Date(); 
/**
 * @class Calendar
 * @extends Component
 */
exports.Calendar = Component.specialize(/** @lends Calendar# */ {
    constructor: {
        value: function Calendar() {
            this.super();   
        }
    },
    enterDocument: {
        value: function(firstTime) {
             var _this = this;
             var a = document.querySelector("#month_minus").addEventListener("mouseup", this, false);
             var b = document.querySelector("#month_plus").addEventListener("mouseup", this, false);
            console.log("LOCATION:") 
            console.log(window.location.host)
            //console.log(this.element.parrentNode)
        }
    },
    handleMouseup : {
        value: function(v) {
            var mc = this.templateObjects.monthController
            var idx = mc.content.indexOf(mc.selection[0]);
            (v.target.id == 'min_month_btn') ? (idx--) : (idx++);
            mc.select(mc.content[idx])
            
            var rep = this.templateObjects.repetition;
            var month = cal_current_date.getMonth()
            var year  = cal_current_date.getFullYear()
            var days = new Date(year, idx+1, 0).getDate()
            console.log(idx+"  "+cal_months_labels[idx] +"   "+days)
            var arr = []
            for(var i=0;i<days;i++){
                arr.push(i)
            }
            rep.content = arr  
        }
    },
    data: {
        value: [
            { month: "January" , days: new Array(31)},
            { month: 'February' , days: new Array(28)},
            { month: 'March' , days: new Array(31)},
            { month: 'April' , days: new Array(30)},
            { month: 'May' , days: new Array(31)},
            { month: 'June' , days: Array(30)},
            { month: 'July' , days: new Array(31)},
            { month: 'August' , days: new Array(31)},
            { month: 'September' , days: new Array(31)},
            { month: 'October' , days: new Array(31)},
            { month: 'November' , days: new Array(30)},
            { month: 'December' , days: new Array(31)}
            ]
    },  

    Calendar: {
        value: function(month, year) {
            this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
            this.year  = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
            this.html = '';
        }
    }
});

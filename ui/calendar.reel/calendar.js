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
    date: {
        value: new Date()
    },
    enterDocument: {
        value: function(firstTime) {
             var mc = this.templateObjects.monthController
             mc.select(mc.content[this.date.getMonth()])
             
             var a1 = document.querySelector("#month_minus").addEventListener("mouseup", this, false);
             var a2 = document.querySelector("#month_plus").addEventListener("mouseup", this, false);
             this.templateObjects.yearInput.element.addEventListener("change", this.fillDays, false);
             console.log("LOCATION:");
             console.log(window.location.host);   
             var b = document.querySelector(".iwraper").addEventListener("mousedown", this, false);
             this.fillDays()
        }
    },
    handleMouseup : {
        value: function(v) {
            var mc = this.templateObjects.monthController
            var idx = mc.content.indexOf(mc.selection[0]);
            (v.target.id == 'month_minus') ? (idx--) : (idx++);
            mc.select(mc.content[idx])
            console.log(idx);
            this.fillDays
        }
    },
    handleMousedown : {
        value: function(v) {
             var over = this.templateObjects.overlay;
             over.show()
        }

    },
    fillDays: {
        value: function(){
            console.log("fillDays")
            var mc = this.templateObjects.monthController            
            var rep = this.templateObjects.repetition;
            var month =  mc.content.indexOf(mc.selection[0]);
            
            var year  = this.templateObjects.yearInput
               // this.date.getFullYear()
            var days = new Date(year, 1, 0).getDate()
            var arr = []
            for(var i=1;i<days;i++){
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

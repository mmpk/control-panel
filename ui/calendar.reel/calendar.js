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
             var a = document.querySelector("#min_month_btn").addEventListener("mousedown", this);
             //var b = document.querySelector("#max_month_btn").addEventListener("mousedown ", this, false)
        }
    },
    captureMousedown : {
        value: function(v) {
            console.log(v.target.id)
            var mc = this.templateObjects.monthController
            var idx = mc.content.indexOf(mc.selection[0]);
            (v.target.id == 'min_month_btn') ? (idx--) : (idx++);
            mc.select(mc.content[idx])
            console.log(mc.selection[0].month)
        }
    },
    maxMonth: {
        value: function(v) {
            console.log("minMonth")
            var mc = this.templateObjects.monthController
            var idx = mc.content.indexOf(mc.selection[0])
            mc.select(mc.content[idx+1])
            console.log(mc.selection[0].month)
        }
    },
    templateDidLoad: {
        value: function() {
            var self = this;
            var mc = this.templateObjects.monthController
            mc.select(mc.content[cal_current_date.getMonth()])
            mc.observePath("selection.0", function(event){
                
             var rep = self.templateObjects.repetition;
                var month = cal_current_date.getMonth()
                var year  = cal_current_date.getFullYear()
                var days = new Date(year, month, 0).getDate()
                var arr = []
                for(var i=0;i<days;i++){
                    arr.push(i)
                }
                rep.content = arr
                console.log(rep.content)
            }) 
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
    _days: { value: [1,2,3,4,5,6,7,10] },
    getDays: {
        value: function(d) {
            console.log("GET DAYS")
            return new Array(d)
        }
    },
    Calendar: {
        value: function(month, year) {
            this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
            this.year  = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
            this.html = '';
        }
    },
    handleMin_month_btnAction: {
        value: function (event) {
            var mc = this.templateObjects.monthController
            var idx = mc.content.indexOf(mc.selection[0])
                mc.select(mc.content[idx-1])
            console.log(mc.selection[0].month)
        }
    },
    handleMax_month_btnAction: {
        value: function (event) {
            var mc = this.templateObjects.monthController
            var idx = mc.content.indexOf(mc.selection[0])
            mc.select(mc.content[idx+1])
            console.log(mc.selection[0].month)
        }
    },    
    onChangeMonth: {
        value: function (event) {
            var self = this;
            console.log(event)
            
            var rep = document.templateObjects.repetition;           
            var month = cal_current_date.getMonth()
            var year  = cal_current_date.getFullYear()
            var days = new Date(year, month, 0).getDate()
            console.log(days)
            //rep.content = new Array(days)
        }
    }
});

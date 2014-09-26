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

var mc;
var cc = 0;
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
    templateDidLoad: {
        value: function() {
            this.Calendar(cal_current_date.getMonth(), cal_current_date.getFullYear())
           mc = this.templateObjects.monthController
               mc.select(mc.content[cal_current_date.getMonth()])
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
            { month: 'September' , days: Array(30)},
            { month: 'October' , days: new Array(31)},
            { month: 'November' , days: new Array(30)},
            { month: 'December' , days: new Array(31)}
            ]
    },  
    _days: { value: [1,2,3,4,5,6,7,10] },
    getDays: {
        get: function() {
            console.log("GET DAYS")
            return this._days
        },
        set: function(v) {
            console.log("SET DAYS")
            this._days = v.days
             console.log(v.days)
        }
    },
    Calendar: {
        value: function(month, year) {
             console.log("Calendar:")
            this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
            this.year  = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
            this.html = '';
             console.log(cal_months_labels[this.month])
             console.log(this.year)
        }
    },

    handleButtonAction: {
        value: function (event) {
            cc++;
            var rep = this.templateObjects.repetition;
            rep.content = mc.selection[0].days
            console.log(rep.content)
        }
    }

});

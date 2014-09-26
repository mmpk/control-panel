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
    templateDidLoad: {
        value: function() {
            this.Calendar(cal_current_date.getMonth(), cal_current_date.getFullYear())
           var mc = this.templateObjects.monthController
               mc.select(mc.content[cal_current_date.getMonth()])
                console.log("MC SELECTION")
                 console.log(this.getDays().length)
        }
    },
    data: {
        value: [
            { month: "January" , days: 31},
            { month: 'February' , days: 28},
            { month: 'March' , days: 31},
            { month: 'April' , days: 30},
            { month: 'May' , days: 31},
            { month: 'June' , days: 30},
            { month: 'July' , days: 31},
            { month: 'August' , days: 31},
            { month: 'September' , days: 30},
            { month: 'October' , days: 31},
            { month: 'November' , days: 30},
            { month: 'December' , days: 31}
            ]
    },                                                                              
    getDays: {
        value: function() {
            var mc = this.templateObjects.monthController;
            var c = mc.selection[0].days
            return new Array(c)
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
});

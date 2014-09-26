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
            
        }
    },
    data: {
        value: [
            { month: 'January' , days: 31},
            { month: 'February' , days: 31},
            { month: 'March' , days: 31},
            { month: 'April' , days: 31},
            { month: 'May' , days: 31},
            { month: 'June' , days: 31},
            { month: 'July' , days: 31},
            { month: 'August' , days: 31},
            { month: 'September' , days: 31},
            { month: 'October' , days: 31},
            { month: 'November' , days: 31},
            { month: 'December' , days: 31}
            ]
    },                                                                              
    getDays: {
        get: function(d) {
            return new Array(d)
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

/**
 * @module ui/calendar.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var KeyComposer = require("montage/composer/key-composer").KeyComposer;
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
    _keyComposer: {
        value: null
    },
    enterDocument: {
        value: function(firstTime) {
             var mc = this.templateObjects.monthController
                 mc.select(mc.content[this.date.getMonth()])
             
             var a1 = document.querySelector("#month_minus").addEventListener("mouseup", this, false);
             var a2 = document.querySelector("#month_plus").addEventListener("mouseup", this, false);
             this.templateObjects.yearInput.element.addEventListener("change", this, false);
             console.log("LOCATION:");
             console.log(window.location.host);   
             var b = document.querySelector(".iwraper").addEventListener("mousedown", this, false);
            
             var yInput = this.templateObjects.yearInput
                 yInput.value = this.date.getFullYear()

             this.fillDays()
             
             /* Composer */
            KeyComposer.createKey(this, "command+z shift control", "undo").addEventListener("keyPress", this);
        }
    },
    handleMouseup : {
        value: function(v) {
            var mc = this.templateObjects.monthController
            var idx = mc.content.indexOf(mc.selection[0]);
            (v.target.id == 'month_minus') ? (idx--) : (idx++);
            mc.select(mc.content[idx])
            this.fillDays()
        }
    },
    handleMousedown : {
        value: function(v) {
             var over = this.templateObjects.overlay;
             over.show()
        }

    },
    handleChange : {
        value: function(v) {
            this.fillDays()
        }

    },
    fillDays: {
        value: function(v){  
            var mc = this.templateObjects.monthController;         
            var rep = this.templateObjects.repetition
            var month = mc.content.indexOf(mc.selection[0])        
            var year  = this.templateObjects.yearInput.value
            
            rep.selectedIndexes[0] = this.date.getDate()
            var day =  rep.selectedIndexes[0]
             
            var days = new Date(year, month, 0).getDate()
            var arr = []
            for(var i=1;i<days;i++){
                arr.push(i)
            }
            rep.content = arr
            rep.selection.rangeController.select(rep.content[this.date.getDate()]-1)
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
    handleKeyPress: {
        value: function(event) {
             console.log("KEY-PRESS:")
             console.log(event.identifier)
        }
    }
});

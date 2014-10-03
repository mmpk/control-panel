/**
 * @module ui/tab-control.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var table = require("ui/table-view.reel").TableView;
var nav = require("ui/nav-left.reel").NavLeft;
var cal = require("ui/calendar.reel").Calendar;
/**
 * @class TabControl
 * @extends Component
 */
exports.TabControl = Component.specialize(/** @lends TabControl# */ {
    constructor: {
        value: function TabControl() {
            this.super();
        }
    },
    enterDocument: {
        value: function(firstTime) {
            console.log(cal_months_labels)
            var rep = this.templateObjects.repetition
            var subt = this.templateObjects.substitution;
                subt.addSwitchElement("Plus", table)
                subt.addSwitchElement("Minus", nav)
                subt.addSwitchElement("List", cal)
            /*
            this.Tabs.forEach(function(d){
                subt.addSwitchElement(d.label, table)
            })
            */
        }
    },
    Tabs: {
        value: [
            {"icon":"plus","label":"Plus"},
            {"icon":"minus","label":"Minus"},
            {"icon":"list","label":"List"},
            {"icon":"signal","label":"Signal"},
            {"icon":"calendar","label":"Calendar"}
            ]
    }
});

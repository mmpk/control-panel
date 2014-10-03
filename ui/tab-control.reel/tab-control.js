/**
 * @module ui/tab-control.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var table = require("ui/table-view.reel").TableView;
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
            var rep = this.templateObjects.repetition
            var subt = this.templateObjects.substitution;

            this.Tabs.forEach(function(d){
                console.log('This is '+d.label+' to'+d.icon)
                subt.addSwitchElement(d.label, table)
            })
                
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

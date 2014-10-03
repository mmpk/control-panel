/**
 * @module ui/tab-control.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

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
                subt.addSwitchElement(d.label, 'This is '+d.label+' to'+d.comp)
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

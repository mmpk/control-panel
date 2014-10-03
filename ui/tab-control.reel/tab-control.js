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
           // var rep = this.templateObjects.repetition
                
        }
    },
    Tabs: {
        value: [
            {"icon":"plus","label":"Plus"},
            {"icon":"minus","label":"Minus"}
            
            ]
    }
});

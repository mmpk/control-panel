/**
 * @module ui/tab-control.reel/tab.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Tab
 * @extends Component
 */
exports.Tab = Component.specialize(/** @lends Tab# */ {
    constructor: {
        value: function Tab() {
            this.super();
        }
    },
    enterDocument: {
        value: function() {
            var glyph = this.element.children[0]
                glyph.classList.add('glyphicon-' + this._glyph)
               
        }
    },
    _glyph: { value: null },                             
    glyph: {
        set: function(value) {
            this._glyph = value
            //this.needsDraw = true;
        }
    },
    _label: { value: null },                             
    label: {
        set: function(value) {
            console.log("SET "+value)
            this._label = value
        },
        get: function() {
            console.log("GET")
           return this._label
        }
    },
    draw: {
        value: function() {         

        }
    }
});

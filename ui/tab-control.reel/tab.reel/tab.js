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

        }
    },
    _glyph: { value: null },
                                   
    glyph: {
        set: function(value) {
            this._glyph = value
            //this.needsDraw = true;
                        var glyph = document.querySelector("#tab-glyph")
                        glyph.classList.add('glyphicon-' + this._glyph)
        }
    },
    draw: {
        value: function() {         

        }
    }
});

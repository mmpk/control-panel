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
            var glyph = document.querySelector("#tab-glyph")
            glyph.classList.add('selected')  
            glyph.classList.add('glyphicon-signal')
                        //this.needsDraw = true;
        }
    },
    _glyph: { value: null },
                                   
    glyph: {
        set: function(value) {
            this._glyph = value
            this.needsDraw = true;
        }
    },
    draw: {
        value: function() {         
            var glyph = document.querySelector("#tab-glyph")
                glyph.classList.add('selected')  
                glyph.classList.add('glyphicon-signal')
        }
    }
});

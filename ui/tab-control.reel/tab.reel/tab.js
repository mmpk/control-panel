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
        value: function(firstTime) {
            
        }
    },
    _glyph: { value: null },
                                   
    glyph: {
        set: function(value) {
            this._glyph = value
            
                        var glyph = document.querySelector(".glyphicon")
                        glyph.classList.add('glyphicon-'+ value)
                        console.log("glyph")
                        console.log(glyph.classList)
                        
            this.needsDraw = true;
        }
    },
    draw: {
        value: function() {

        }
    }
});

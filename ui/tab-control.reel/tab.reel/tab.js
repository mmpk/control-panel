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
                        var glyph = document.querySelector(".glyphicon")
                        glyph.classList.add('glyphicon-list')
                        console.log("glyph")
                        console.log(glyph.classList)
        }
    },
    _glyph: { value: null },
                                   
    glyph: {
        set: function(value) {
            this._glyph = value
            //this.needsDraw = true;
        }
    },
    draw: {
        value: function() {
            /*
            var glyph = document.querySelector(".glyphicon")
            glyph.classList.add('glyphicon-'+ this._glyph)
            console.log("glyph")
            console.log(glyph.classList)
            */
        }
    }
});

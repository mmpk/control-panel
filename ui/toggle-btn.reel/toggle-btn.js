/**
 * @module ui/toggle-btn.reel
 * @requires montage/ui/component
 */
var AbstractCheckbox = require("montage/ui/base/abstract-checkbox").AbstractCheckbox;
/**
 * @class ToggleBtn
 * @extends Component
 */
exports.ToggleBtn = AbstractCheckbox.specialize(/** @lends ToggleBtn# */ {
    constructor: {
        value: function ToggleBtn() {
            this.super();
        }
    },
    
    _value: {
        value: null
    },
    
    value: {
        get: function() {
            return this._value;
        },
        set: function(value) {
            if (this._value !== value) {
                this._value = value;
                //this.needsDraw = true;
            }
        }
    }
    
});

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
                this.needsDraw = true;
                console.log(value)
            }
        }
    },
    
    defaultValue: {
        value: ""
    },
    
    draw: {
        value: function() {
            // get correct value
            var value = this._value, displayValue = (value || 0 === value ) ? value : this.defaultValue;
             console.log("displayValue = ", value)
            this.templateObjects.text.value = value;
        }
    }
    
});

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
    }
});

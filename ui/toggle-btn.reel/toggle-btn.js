/**
 * @module ui/toggle-btn.reel
 * @requires montage/ui/component
 */
var AbstractToggleSwitch = require("montage/ui/base/abstract-toggle-switch").AbstractToggleSwitch;
/**
 * @class ToggleBtn
 * @extends Component
 */
exports.ToggleBtn = AbstractToggleSwitch.specialize(/** @lends ToggleBtn# */ {
    constructor: {
        value: function ToggleBtn() {
            this.super();
        }
    }
});

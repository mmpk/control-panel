/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    templateDidLoad: {
        value: function(){
             var subt = this.templateObjects.substitution;
            console.log("SUBT:")
             console.log(subt)
             //subt.addSwitchElement("key1", this.templateObjects.image) 
        }
    }
});

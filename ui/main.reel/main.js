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
            var c = 0;
            console.log("SUBT:")
             setInterval(function(){
             //subt.addSwitchElement("key1", this.templateObjects.image) 
                 c++
                 subt.switchValue = "key" + c
                 console.log(subt.switchValue)
                 if(c == 2) c = 0
             },1500)
        }
    }
});

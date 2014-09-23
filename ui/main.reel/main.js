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
             var img = this.templateObjects.image2;
             subt.addSwitchElement("key2", img) 
             var prez = require("ui/content-presenter.reel").ContentPresenter;
             subt.addSwitchElement("key3", prez) 
            console.log(typeof prez)
             var c = 0;
             setInterval(function(){   
                 c++
                 subt.switchValue = "key" + c
                 if(c == 3) c = 0
             },1000);
        }
    }
});

/**
 * @module ui/nav-left.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class NavLeft
 * @extends Component
 */
exports.NavLeft = Component.specialize(/** @lends NavLeft# */ {
    constructor: {
        value: function NavLeft() {
            this.super();
        }
    },
    templateDidLoad: {
        value: function() {
            this.templateObjects.repetition.addPathChangeListener("selection.0.data",
                 this, function(v){
                    console.log(v)
                 });

        }
    },
    Data: {
        value: [
            { display_name: "HTML", url: "/r/html5" },
            { display_name: "Programming", url: "/r/programming" },
            { display_name: "Coding", url: "/r/coding" },
            { display_name: "Comp Sci", url: "/r/compsci" },
            { display_name: "Web Dev", url: "/r/webdev" },
            { display_name: "Startups", url: "/r/startups" }
        ]
    }
});

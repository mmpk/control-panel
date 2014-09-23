/**
 * @module ui/nav-left.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var prez = require("ui/content-presenter.reel").ContentPresenter;
var table = require("ui/table-view.reel").TableView;
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
    Data: {
        value: [
            { display_name: "Prezenter", comp: prez },
            { display_name: "Tables",    comp: table },
            { display_name: "Coding",    comp: table  },
            { display_name: "Comp Sci",  comp: table  },
            { display_name: "Web Dev",   comp: table  },
            { display_name: "Startups",  comp: table  }
        ]
    },
    
    handleButtonAction: {
        value: function(v) {
            var rep =  this.templateObjects.repetition;
             console.log(rep.selection[0].url)
        }
    }
});

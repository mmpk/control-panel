/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var prez = require("ui/content-presenter.reel").ContentPresenter;
var table = require("ui/table-view.reel").TableView;
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
    Data: {
        value: [
            { display_name: "PARENTNODE", comp: prez },
            { display_name: "Tables",    comp: table },
            { display_name: "Coding",    comp: table  },
            { display_name: "key1",  comp: table  },
            { display_name: "key2",   comp: table  },
            { display_name: "key3",  comp: table  }
        ]
    },
    templateDidLoad: {
        value: function(){
            /*
             var subt = this.templateObjects.substitution;
             var img = this.templateObjects.image2;
             subt.addSwitchElement("key2", img) 
             var prez = require("ui/content-presenter.reel").ContentPresenter;
             subt.addSwitchElement("key3", prez) 
            
             var c = 0;
             setInterval(function(){   
                 c++
                 subt.switchValue = "key" + c
                 if(c == 3) c = 0
             },1000);
            */
        }
    }
});

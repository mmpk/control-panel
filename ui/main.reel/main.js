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
            { title: "PARENTNODE", comp: prez },
            { title: "Tables",    comp: table },
            { title: "Coding",    comp: Component  },
            { title: "key1",  comp: table  },
            { title: "key2",   comp: prez  },
            { title: "key3",  comp: table  }
        ]
    },
    templateDidLoad: {
        value: function(){
             var subt = this.templateObjects.substitution;
             var img = this.templateObjects.image2;
             subt.addSwitchElement("key2", img) 
             var prez = require("ui/content-presenter.reel").ContentPresenter;
             subt.addSwitchElement("key3", prez) 
            
             this.Data.forEach(function(d){
                 subt.addSwitchElement(d.title, d.comp)
             })
        }
    }
});

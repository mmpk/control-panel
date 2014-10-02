/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
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
    Window: {
        value: window
    },
    Data: {
        value: [
            { title: "PARENTNODE", comp: table },
            { title: "Tables",    comp: table },
            { title: "Coding",    comp: table  },
            { title: "key1",  comp: table  },
            { title: "key2",   comp: table  },
            { title: "key3",  comp: table  }
        ]
    },
    states: {
        value: [
            {name: "Alaska", code: "AK"},
            {name: "Arizona", code: "AZ"},
            {name: "Arkansas", code: "AR"},
            {name: "California", code: "CA"},
            {name: "Colorado", code: "CO"}
        ]
    },
    templateDidLoad: {
        value: function(){            
             var subt = this.templateObjects.substitution;
                 subt.addSwitchElement("key1", table) 
                 subt.addSwitchElement("Me", table) 
                 subt.switchValue ='key3'
                 console.log(subt.content)
            
             this.Data.forEach(function(d){
                 //subt.addSwitchElement(d.title, d.comp)
             })
        }
    },
    root: {
        value: {"name": "Biosphere",
                children: [
                    {"name": "Animals",
                     children: [
                         {"name": "Turtles"},
                         {"name": "Cats"},
                         {"name": "Dogs"},
                         {"name": "Horses"},
                         {"name": "Squirrels"},
                         {"name": "Birds"}
                     ]
                    },
                    {"name": "Plants",
                     children: [
                         {"name": "Flowers",
                          children: [
                              {"name": "Roses"},
                              {"name": "Tulips"},
                              {"name": "Daisies"},
                              {"name": "Daffodils"}
                          ]
                         },
                         {"name": "Fungi",
                          children: [
                              {"name": "Porcinis"},
                              {"name": "Oysters"},
                              {"name": "Truffles"},
                              {"name": "Shiitake"}
                          ]
                         }

                     ]
                    },
                    {"name": "key1"},
                    {"name": "HTML"},
                    {"name": "calendar"},
                    {"name": "Pluto"}
                ]
               }
    }
});

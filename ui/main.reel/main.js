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
    templateDidLoad: {
        value: function(){
            var exp = this.templateObjects.expander;
            exp.element.appendChild('APPENDAAAAAAA');
            console.log(exp.element)
            
             var subt = this.templateObjects.substitution;
             var img = this.templateObjects.image2;
             subt.addSwitchElement("key2", img) 

             subt.addSwitchElement("key3", exp) 
            
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
                    {"name": "Me"}
                ]
               }
    }
});

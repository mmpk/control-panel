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
    Window: {
        value: window
    },
    templateDidLoad: {
        value: function(){   
            /*
             var subt = this.templateObjects.substitution;
                 subt.addSwitchElement("key1", table) 
                 subt.addSwitchElement("Me", table) 
                 subt.switchValue ='key3'
                 console.log(subt.content)
            
             this.Data.forEach(function(d){
                 //subt.addSwitchElement(d.title, d.comp)
             })
             */
        }
    },
    root: {
        value: {"name": "Root",
                children: [
                    {"name": "Demos",
                     children: [
                         {"name": "Calendar"},
                         {"name": "Tabs"}
                     ]
                    },
                    {"name": "Other",
                     children: [
                         {"name": "Items",
                          children: [
                              {"name": "Item1"},
                              {"name": "Item2"},
                              {"name": "Item3"}
                          ]
                         },
                         {"name": "Sub",
                          children: [
                              {"name": "Sub1"}
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
    },
    Months: {
        value: [
            { month: "January" , days: new Array(31)},
            { month: 'February' , days: new Array(28)},
            { month: 'March' , days: new Array(31)},
            { month: 'April' , days: new Array(30)},
            { month: 'May' , days: new Array(31)},
            { month: 'June' , days: Array(30)},
            { month: 'July' , days: new Array(31)},
            { month: 'August' , days: new Array(31)},
            { month: 'September' , days: new Array(31)},
            { month: 'October' , days: new Array(31)},
            { month: 'November' , days: new Array(30)},
            { month: 'December' , days: new Array(31)}
        ]
    }
});

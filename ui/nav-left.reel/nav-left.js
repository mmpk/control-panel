/**
 * @module ui/nav-left.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var prez = 10;
var table = 100;
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
        value: function(){            
            var tre = this.templateObjects.treeController;
            tre.nodes[0].expanded = true
            /*
            tre.nodes.forEach(function(n){
                console.log(n.junctions)
            })
            */
        }
    },
    Data: {
        value: [
            { display_name: "Prezenter", comp: prez },
            { display_name: "Tables",    comp: table },
            { display_name: "Coding",    comp: table  },
            { display_name: "key1",  comp: table  },
            { display_name: "key2",   comp: table  },
            { display_name: "key3",  comp: table  }
        ]
    },
    ASCII: {
        value:  {
            "medial": " +-",
            "final": " ^-",
            "before": " | ",
            "after": "   "
        }
    },
   // map(function (iteration) {return iteration.junctions.map(function (junction) { return @owner.ASCII[junction]}).join("")    
    handleButtonAction: {
        value: function(v) {
            var p =  this.classList.toggle('flip');
             console.log(this.classList.contains('flip'))
        }
    },
    
    handleText2Action: {
        value: function(v) {
            var p =  this.classList.toggle('flip');
            console.log(this.classList.contains('flip'))
        }
    }
});

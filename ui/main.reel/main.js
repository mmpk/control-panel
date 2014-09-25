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
    States: {
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
                    {"name": "Pluto"}
                ]
               }
    },
        stateShouldGetSuggestions: {
            value: function(tokenField, searchTerm) {
                var results = [];
                if(searchTerm) {
                    var term = searchTerm.toLowerCase();
                    if(this._cachedStates && this._cachedStates[term]) {
                        results = this._cachedStates[term];
                    } else {
                        results = states.filter(function(item) {
                            // @todo - memoize
                            return (item.name.toLowerCase().indexOf(term) >= 0 || item.code.indexOf(term) >= 0);
                        });
                        if(this._cachedStates == null) {
                            this._cachedStates = {};
                        }
                        this._cachedStates[term] = results;
                    }
                }
                tokenField.suggestions = results;
            }
        },

    // Return the represented object for the specified stringValue
    stateGetRepresentedObject: {
        value: function(stringValue) {
            if(stringValue) {
                stringValue = stringValue.trim().toLowerCase();
                var i, len = states.length;
                for(i=0; i<len; i++) {
                    if(states[i].name.toLowerCase() === stringValue) {
                        return states[i];
                    }
                }
            }
            return null;
        }
    },

    tagsShouldGetSuggestions: {
        value: function(tokenField, searchTerm) {
            var results = [];
            if(searchTerm) {
                var term = searchTerm.toLowerCase();
                results = tags.filter(function(item) {
                    return (item.toLowerCase().indexOf(term) >= 0);
                });
            }
            tokenField.suggestions = results;
        }
    }
});

/**
 * @module ui/table-view.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class TableView
 * @extends Component
 */
exports.TableView = Component.specialize(/** @lends TableView# */ {
    constructor: {
        value: function TableView() {
            this.super();
            for(var i=0; i<10;i++){
                var d = {name : "Name"+i,score : 15 * i, sel: ["what","s","going","on"+i,"remedy"]}
                this.Data.push(d)
            }
        }
    },
    Data: {
        value: []
    }
});

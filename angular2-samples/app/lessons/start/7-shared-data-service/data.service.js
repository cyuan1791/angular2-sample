"use strict";
// ***********************************
// file data.service.ts
var DataService = (function () {
    function DataService() {
        this.data = [];
    }
    DataService.prototype.addData = function (input) {
        this.data.push(input);
    };
    DataService.prototype.getData = function () {
        return this.data;
    };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map
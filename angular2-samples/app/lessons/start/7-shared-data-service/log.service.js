"use strict";
//***********************************
// file log.service.ts
var LogService = (function () {
    function LogService() {
    }
    LogService.prototype.writeToLog = function (logMessage) {
        console.log(logMessage);
    };
    return LogService;
}());
exports.LogService = LogService;
//# sourceMappingURL=log.service.js.map
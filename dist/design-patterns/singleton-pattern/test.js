"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var stack_tracker_1 = require("./stack-tracker");
function test() {
    var tracker = stack_tracker_1.StatsTracker.instance;
    console.log("Widget views: ".concat(tracker.widgetViews));
    console.log("Button clicks: ".concat(tracker.buttonClicks));
    console.log("Facebook shares: ".concat(tracker.facebookShares));
    console.log("Twitter shares: ".concat(tracker.twitterShares));
}
exports.test = test;
//# sourceMappingURL=test.js.map
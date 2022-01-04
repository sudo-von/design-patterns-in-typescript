"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_tracker_1 = require("./stack-tracker");
var test_1 = require("./test");
var tracker = stack_tracker_1.StatsTracker.instance;
tracker.widgetViews = 90;
tracker.buttonClicks = 6;
tracker.facebookShares = 20;
tracker.twitterShares = 30;
console.log("Widget views: ".concat(tracker.widgetViews));
console.log("Button clicks: ".concat(tracker.buttonClicks));
console.log("Facebook shares: ".concat(tracker.facebookShares));
console.log("Twitter shares: ".concat(tracker.twitterShares));
tracker.widgetViews++;
tracker.twitterShares += 2;
(0, test_1.test)();
//# sourceMappingURL=app.js.map
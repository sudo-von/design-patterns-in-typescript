import { StatsTracker } from "./stack-tracker";

export function test() {
    let tracker = StatsTracker.instance;
    console.log(`Widget views: ${tracker.widgetViews}`);
    console.log(`Button clicks: ${tracker.buttonClicks}`);
    console.log(`Facebook shares: ${tracker.facebookShares}`);
    console.log(`Twitter shares: ${tracker.twitterShares}`);
}
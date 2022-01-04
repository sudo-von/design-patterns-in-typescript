"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_posts_service_1 = require("./mock-posts-service");
var news_feed_1 = require("./news-feed");
var posts_service_1 = require("./posts-service");
var newsFeed = new news_feed_1.NewsFeed(new posts_service_1.PostsService());
newsFeed.show();
var newsFeedTwo = new news_feed_1.NewsFeed(new mock_posts_service_1.MockPostsService());
newsFeedTwo.show();
//# sourceMappingURL=app.js.map
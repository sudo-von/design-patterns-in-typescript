"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_posts_service_1 = require("./mock-posts-service");
var NewsFeed_1 = require("./NewsFeed");
var posts_service_1 = require("./posts-service");
var newsFeed = new NewsFeed_1.NewsFeed(new posts_service_1.PostsService());
newsFeed.show();
var newsFeedTwo = new NewsFeed_1.NewsFeed(new mock_posts_service_1.MockPostsService());
newsFeedTwo.show();
//# sourceMappingURL=refactored-version.js.map
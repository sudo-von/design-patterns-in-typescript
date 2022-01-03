"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsFeed = exports.MockPostsService = exports.PostsService = void 0;
var fs = require("fs");
var PostsService = /** @class */ (function () {
    function PostsService() {
        this._fileName = "posts.json";
    }
    PostsService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fs.readFile(_this._fileName, "utf8", function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(JSON.parse(data));
            });
        });
    };
    PostsService.prototype.save = function (post) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAll().then(function (posts) {
                posts.push(post);
                fs.writeFile(_this._fileName, JSON.parse(posts.toString()), function (err) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            });
        });
    };
    return PostsService;
}());
exports.PostsService = PostsService;
var MockPostsService = /** @class */ (function () {
    function MockPostsService() {
        this.posts = [];
        this.posts = [
            { "id": 1, "title": "test", "body": "test", "postedBy": "Me" },
            { "id": 2, "title": "test", "body": "test", "postedBy": "Me" },
            { "id": 3, "title": "test", "body": "test", "postedBy": "Me" },
            { "id": 4, "title": "test", "body": "test", "postedBy": "Me" }
        ];
    }
    MockPostsService.prototype.getAll = function () {
        return Promise.resolve(this.posts);
    };
    MockPostsService.prototype.save = function (post) {
        this.posts.push(post);
        return Promise.resolve();
    };
    return MockPostsService;
}());
exports.MockPostsService = MockPostsService;
var NewsFeed = /** @class */ (function () {
    function NewsFeed(_service) {
        this._service = _service;
    }
    NewsFeed.prototype.show = function () {
        this._service.getAll().then(function (posts) {
            posts.forEach(function (post) {
                console.log("".concat(post.title, " - ").concat(post.body));
            });
        });
    };
    return NewsFeed;
}());
exports.NewsFeed = NewsFeed;
var newsFeed = new NewsFeed(new PostsService());
newsFeed.show();
var newsFeedTwo = new NewsFeed(new MockPostsService());
newsFeedTwo.show();
//# sourceMappingURL=refactored-version.js.map
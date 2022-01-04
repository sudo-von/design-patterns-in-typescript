"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsFeed = void 0;
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
//# sourceMappingURL=news-feed.js.map
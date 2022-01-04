"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockPostsService = void 0;
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
    MockPostsService.prototype.export = function (service) {
        return this.getAll().then(function (posts) { return service.export(posts); });
    };
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
//# sourceMappingURL=mock-posts-service.js.map
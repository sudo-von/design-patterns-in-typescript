"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
var fs = require("fs");
var PostsService = /** @class */ (function () {
    function PostsService() {
        this._fileName = "posts.json";
    }
    PostsService.prototype.export = function (service) {
        return this.getAll().then(function (posts) { return service.export(posts); });
    };
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
//# sourceMappingURL=posts-service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.name = repo.name;
        this.full_name = repo.full_name;
        this.fork = repo.fork;
        this.size = repo.size;
    }
    return Repo;
}());
exports.Repo = Repo;

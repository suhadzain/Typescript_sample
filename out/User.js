"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(response) {
        this.login = response.login;
        this.name = response.name;
        this.bio = response.bio;
        this.hireable = response.hireable;
        this.public_repos = response.public_repos;
        this.repos = response.repos;
    }
    return User;
}());
exports.User = User;

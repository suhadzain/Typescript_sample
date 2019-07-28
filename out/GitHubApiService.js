"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Repo_1 = require("./Repo");
var User_1 = require("./User");
var request = __importStar(require("request"));
var OPTION = {
    headers: {
        "User-Agent": 'requst'
    },
    json: true
};
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
    }
    GitHubApiService.prototype.getUserinfo = function (name, cb) {
        request.get("https://api.github.com/users/" + name, OPTION, function (error, response, body) {
            // console.log(body)
            var user = new User_1.User(body);
            // let user= new User(JSON.parse(body)) can remove Json.parse after adding json = true in option
            // console.log(user)
            cb(user);
        });
    };
    GitHubApiService.prototype.getRepos = function (name, cb) {
        request.get("https://api.github.com/users/" + name + "/repos", OPTION, function (error, response, body) {
            // console.log(body) 
            var result = body.map(function (repo) { return new Repo_1.Repo(repo); });
            cb(result);
        });
    };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;

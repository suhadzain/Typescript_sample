"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var GitHubApiService_1 = require("./GitHubApiService");
console.log("Starting Project");
var requestObj = new GitHubApiService_1.GitHubApiService();
// requestObj.getRepos("suhadzain")
// requestObj.getUserinfo("suhadzain", (user: User) => {
//     console.log(user)
// })
// requestObj.getRepos("suhadzain", (repos: Repo[]) => {
//     console.log(repos)
// })
//User with repos
requestObj.getUserinfo("suhadzain", function (user) {
    requestObj.getRepos("suhadzain", function (repos) {
        var one = _.sortBy(repos, [function (repo) { return repo.fork; }]);
        var filteredRepo = _.take(one, 2);
        // let repo = repos;
        user.repos = filteredRepo;
        console.log(user);
    });
});

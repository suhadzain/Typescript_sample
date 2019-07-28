import { User } from './User';
import * as _ from 'lodash';
import { GitHubApiService } from "./GitHubApiService";
import { Repo } from './Repo';

console.log("Starting Project")
let requestObj = new GitHubApiService();


// requestObj.getRepos("suhadzain")
// requestObj.getUserinfo("suhadzain", (user: User) => {
//     console.log(user)
// })

// requestObj.getRepos("suhadzain", (repos: Repo[]) => {
//     console.log(repos)
// })

//User with repos
requestObj.getUserinfo("suhadzain", (user: User) => {
    requestObj.getRepos("suhadzain", (repos: Repo[]) => {
        let one = _.sortBy(repos, [(repo: Repo) => repo.fork])
        let filteredRepo=_.take(one,2)
        // let repo = repos;
        user.repos = filteredRepo;
        console.log(user)
    })

})
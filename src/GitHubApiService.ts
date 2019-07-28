import { Repo } from './Repo';
import { User } from './User';
import * as request from 'request'
const OPTION: any = {
    headers: {
        "User-Agent": 'requst'
    },
    json: true
}
export class GitHubApiService {
    getUserinfo(name: string, cb: (user: User) => any) {
        request.get("https://api.github.com/users/" + name, OPTION, (error: any, response: any, body: any) => {
            // console.log(body)
            let user = new User(body)
            // let user= new User(JSON.parse(body)) can remove Json.parse after adding json = true in option
            // console.log(user)
            cb(user)
        })
    }

    getRepos(name: string, cb: (repos: Repo[]) => any) {
        request.get("https://api.github.com/users/" + name + "/repos", OPTION, (error: any, response: any, body: any) => {
            // console.log(body) 
            let result = body.map((repo: any) => new Repo(repo))
            cb(result)
        })
    }
}
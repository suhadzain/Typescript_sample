import { Repo } from "./Repo";

export class User{
    login : string | undefined
    name : string | undefined
    bio : string | undefined
    hireable : boolean | undefined
    public_repos :number | undefined
    repos : Repo[] | undefined


    constructor(response:any){
        this.login=response.login;
        this.name=response.name;
        this.bio=response.bio;
        this.hireable=response.hireable;
        this.public_repos=response.public_repos;    
        this.repos=response.repos; 
    }
}
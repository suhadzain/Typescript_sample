export class Repo {
    name: string | undefined
    full_name: string | undefined
    fork: boolean | undefined
    size: number | undefined
    constructor(repo: any) {
        this.name = repo.name;
        this.full_name = repo.full_name;
        this.fork = repo.fork;
        this.size = repo.size;
    }
}
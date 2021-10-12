import {makeAutoObservable, observable, action, values} from "mobx";
import RepositoryService from "../API/RepositoryService";
import Repository from "./repository";

class RepositoriesStore {
    search = 'jetrockets';
    page = 1;
    limit = 3;
    countRepositories = 0;
    repositories = observable.map();
    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    setSearch = (value) => {
        this.search = value
    }

    setPage = (num) => {
        this.page = num
        this.fetchRepositories()
    }

    sendFetch = () => {
        this.page = 1
        this.fetchRepositories()
    }

    getRepByName(login, name) {
        this.fetchRepository(login, name)
    }

    get isEmpty() {
        return this.repositories.size === 0
    }

    get list() {
        return values(this.repositories)
    }

    get pages() {
        return [this.page-1, this.page, this.page+1]
            .filter(el => el > 0 && el < this.countRepositories / this.limit)
    }

    async fetchRepositories() {
        this.isLoading = true
        const data = await RepositoryService.getRepositories(this.search, this.page, this.limit);

        this.repositories.clear()
        data.items.forEach(item => {
            const repository = new Repository(item);
            this.repositories.set(item.id, repository)
        })

        this.countRepositories = data.total_count
        this.isLoading = false
    }

    async fetchRepository(login, name) {
        this.isLoading = true

        this.repositories.clear()
        const data = await RepositoryService.getRepository(login, name);
        const repository = new Repository(data);
        this.repositories.set(data.id, repository)

        this.isLoading = false
    }
}

const Repositories = new RepositoriesStore()
export default Repositories;
import {makeAutoObservable} from "mobx";
import RepositoryService from "../API/RepositoryService";

class Repositories {
    search = 'jetrockets'
    page = 1
    countRepositories = 0
    repositories = []
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    setSearch(value) {
        this.search = value
    }

    setPage(num) {
        this.page = num
        this.fetchRepositories()
    }

    sendFetch() {
        this.page = 1
        this.fetchRepositories()
    }

    async fetchRepositories() {
        this.isLoading = true
        const data = await RepositoryService.getRepositories(this.search, this.page, 10);
        this.repositories = data.items
        this.countRepositories = data.total_count
        this.isLoading = false
    }
}

export default new Repositories();
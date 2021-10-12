import {makeAutoObservable} from "mobx";
import RepositoryService from "../API/RepositoryService";

class Repository {
    name
    login
    description
    stars
    updated_at
    avatar
    favourite = false

    constructor(item) {
        this.id = item?.id
        this.name = item?.name
        this.login = item?.owner.login
        this.description = item?.description
        this.stars = item?.stargazers_count
        this.updated_at = item?.updated_at
        this.avatar = item?.owner.avatar_url
        makeAutoObservable(this)
    }

    updateFavourite() {
        this.favourite = !this.favourite
    }

    get date() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        const [year, month, day] = this.updated_at.split('T')[0].split('-')

        return `Updated on ${day} ${months[parseInt(month)]} ${year}`
    }

    get isStars() {
        return this.stars != 0
    }

    get isFavourite() {
        return this.favourite
    }
}

export default Repository;
import axios from "axios";

export default  class RepositoryService {
    static async getRepositories(name, page, limit) {
        try {
            const response = await axios.get(`https://api.github.com/search/repositories?q=${name}&sort=stars&order=desc&per_page=${limit}&page=${page}`)
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }

    static async getRepository(owner, name) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${owner}/${name}`)
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
}
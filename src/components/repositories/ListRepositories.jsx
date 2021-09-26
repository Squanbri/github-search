import React, {useState} from 'react';
import Repository from "../repository/Repository";
import '../../styles/ListRepositories.css'

const ListRepositories = ({repositories, lastElement}) => {
    const [length, setLength] = useState(repositories.length)

    return (
        <div>
            <ul className="list__repositories">
                { repositories.length === 0
                    ? <div> Мы не нашли репзиториев по вашему запросу </div>
                    :
                        repositories.map((repository, i) =>
                            <Repository repository={repository} key={repository.id}/>
                        )
                }
            </ul>
        </div>
    );
};

export default ListRepositories;
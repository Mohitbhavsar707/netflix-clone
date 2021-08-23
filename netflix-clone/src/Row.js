import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([])

    // A snippet of code which runs based on a specific condition variable 
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;

        }
        fetchData();

    }, [fetchUrl]);

    console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {/* several row_posters */}
                {movies.map(movie => (
                    <img src={movie.poster_path} alt={movie.name} />

                ))}
            </div>
        </div>
    )
}

export default Row;
 
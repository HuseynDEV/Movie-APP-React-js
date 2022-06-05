import React from "react"



const MovieList = (props) => {
    return (
        <div className="row ">
            {props.movie.map((data, index) => (
                <div key={index} className="col-lg-4" >

                    <div className="card mb-4 shadow-sm">
                        <img src={`https://www.themoviedb.org/t/p/w185_and_h278_multi_faces/${data.backdrop_path}`} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{data.name || data.title}</h5>
                            <p className="card-text" >{data.overview}</p>
                            <div className="d-flex justify-content-between align-items-center" >
                                <button onClick={() => props.deleteMovieProps(data)} type="button" className="btn btn-md btn-outline-danger" > Delete </button >
                                <h2> {data.vote_average} </h2>

                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}


export default MovieList
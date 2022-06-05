import React from "react"



class SearchBar extends React.Component {

    FormSubmit = (e) => {
        e.preventDefault();

    }
    render() {
        return (
            <form onSubmit={this.FormSubmit}>
                <div className="form-row mb-5 mt-2">
                    <div className="col-12">
                        <input
                            // value={this.props.searchMovie}
                            onChange={this.props.searchMovieProp}
                            className="form-control" placeholder="Search..." />
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar
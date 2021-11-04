import React from "react";

function MovieList(props) {
    return (
        <div className="section">
            <div className="columns">
                <div className="column has-text-centered">
                    <h1 className="title" style={{color: "black"}}>{props.title}</h1><br />
                </div>
            </div>
            <div className="row columns is-multiline">
                {props.children}
            </div>
        </div>
    );
}

export default MovieList;
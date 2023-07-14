import React from "react";

class Moviecard extends React.Component{
    render(){
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster"/>
                    </div>
                    <div className="right">
                        <div className="title">The Avenger</div>
                        <div className="plot">natureal power</div>
                        <div className="price">Rs. 199</div>

                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="stars">star</div>
                            <button className="favourite-btn">favourite</button>
                            <button className="card-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Moviecard;
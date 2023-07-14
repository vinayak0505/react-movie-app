import React from "react";

class Moviecard extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://w0.peakpx.com/wallpaper/787/97/HD-wallpaper-avengers-endgame-avengers-endgame.jpg" />
                    </div>
                    <div className="right">
                        <div className="title">The Avenger</div>
                        <div className="plot">natureal power</div>
                        <div className="price">Rs. 199</div>

                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="star-dis">
                                    <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"/>
                                    <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                                    <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"/>
                                    <span>0</span>
                            </div>
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
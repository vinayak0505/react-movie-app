import React from "react";

class Moviecard extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "The Avenger",
            plot: "Natureal power",
            price: "Rs. 199",
            rating: "8.9",
            stars: 0,
        }
    }
    addStars = () => {
        console.log("add");
        this.setState({
            stars: this.state.stars  + 1
        });
    }

    subStars = () => {
        console.log("sub");
        this.setState({
            stars: this.state.stars  - 1
        });
    }

    render() {
        const { title, plot, price, rating,stars } = this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://w0.peakpx.com/wallpaper/787/97/HD-wallpaper-avengers-endgame-avengers-endgame.jpg" />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" onClick={this.subStars} />
                                <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" onClick={this.addStars} />
                                <span>{stars}</span>
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
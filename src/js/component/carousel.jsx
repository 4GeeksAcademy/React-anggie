import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";


const Carousel = () => {
    return (
        <div className="container h-100 mb-4">
            <div id="carousel" className=" px-3 pb-4">
                <div className="card-body">
                    <h1 id="title" className="card-title pb-3">A Warm Welcome!</h1>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Call to action!</a>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
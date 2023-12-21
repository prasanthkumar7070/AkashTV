import React from "react";
import "./NavSec/SideNav.css";
const Carousel = () => {
    return (
        <div className="carousel">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img

                            src="https://cdnhost.akashbd.net/assets/uploads/home_slider_images/1697097942-22659839.jpg?v=7.0.5"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://cdnhost.akashbd.net/assets/uploads/home_slider_images/1701320017-36238492.jpg?v=7.0.5"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://cdnhost.akashbd.net/assets/uploads/home_slider_images/1701318179-14349828.jpg?v=7.0.5"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://cdnhost.akashbd.net/assets/uploads/home_slider_images/1701318179-14349828.jpg?v=7.0.5"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;

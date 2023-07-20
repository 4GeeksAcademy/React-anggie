import React from "react"

const Card = () => {
    return (
        <div className="container h-100 text-center mb-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div className="col mb-3">
                    <div className="card" style={{ width: "19rem" }}>
                        <img src="https://picsum.photos/500/700?random=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Find out more!</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-3">
                    <div className="card" style={{ width: "19rem" }}>
                        <img src="https://picsum.photos/500/700?random=2" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Find out more!</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-3">
                    <div className="card" style={{ width: "19rem" }}>
                        <img src="https://picsum.photos/500/700?random=3" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Find out more!</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-3">
                    <div className="card " style={{ width: "19rem" }}>
                        <img src="https://picsum.photos/500/700?random=4" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Find out more!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
import React from "react"

const Card = ({image, title, children}) => {
    return (

        <div className="col mb-3">
            <div className="card" style={{ width: "19rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{children}</p>
                    <a href="#" className="btn btn-primary">Find out more!</a>
                </div>
            </div>
        </div>

    );
}

export default Card;
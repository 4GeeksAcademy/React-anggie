import React from "react"

const CardContainer = ({children}) => {
    return (
        <div className="container h-100 text-center mb-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {children}
            </div>
        </div>
    );
}

export default CardContainer;
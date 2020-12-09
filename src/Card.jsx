import React from 'react'

function Card( {img, discription, children} ) {
    return (
        <div className="card">
            {img && <img src={img} className="card-img-top" alt={discription}/>}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

export default Card;
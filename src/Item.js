import React from 'react';

export default function Item({item}){
    return(
        <div className="shadow p-3 mb-5 bg-white rounded">
            <h1>{item.itemName}</h1>
            <img src={item.itemImage} className="img-fluid" />
            <h1>{item.itemPrice} /-</h1>
            <button className="btn btn-primary">ADD TO CART</button>
        </div>
    )
}
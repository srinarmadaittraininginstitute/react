import React from 'react';
import { useSelector } from 'react-redux';
import { StaticRouter } from 'react-router';
import Item from './Item';
export default function Items(){
    const itemsobj=useSelector(store=>store.itemsReducer)
    const itemslist=itemsobj.items

    const itemsdata=itemslist.map((item)=>{

        return <div className="col-md-4">
            <Item item={item}/>
        </div>

    })

    return(
        <div>
            {/* <h1>Total Items= {itemsobj.items.length}</h1> */}
            <div className="row">
                {itemsdata}
            </div>
        </div>
    )
}
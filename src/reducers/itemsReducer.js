const initialData={
    items: [{
            itemName: 'Realme 5 (Crystal Purple, 32 GB) (3 GB RAM)',
            itemImage:'https://images-eu.ssl-images-amazon.com/images/I/41GKsqweZ1L._SL500_AC_SS350_.jpg',
            itemPrice:'10000'
    },
    {
            itemName: 'Realme 3 Pro (Lighting Purple, 64 GB) (4 GB RAM)',
            itemImage:'https://images-na.ssl-images-amazon.com/images/I/71awFg9gYfL._SX679_.jpg',
            itemPrice:'12000'
    },
    {
        itemName: 'Samsung Galaxy A50 (Blue, 64 GB) (4 GB RAM)',
        itemImage:'https://fdn2.gsmarena.com/vv/bigpic/images/I/71awFg9gYfL._SX679_.jpg',
        itemPrice:'13500'
},
{
    
    itemName: 'Redmi 8A (Sunset Red, 32 GB) (2 GB RAM)',
    itemImage:'https://images-na.ssl-images-amazon.com/images/I/71awFg9gYfL._SX679_.jpg',
    itemPrice:'11400'
},
{
    itemName: 'Samsung Galaxy  (Blue, 64 GB) (4 GB RAM)',
    itemImage:'https://fdn2.gsmarena.com/vv/bigpic/images/I/71awFg9gYfL._SX679_.jpg',
    itemPrice:'13500'
},
{
itemName: 'Redmi 10A (Sunset Red, 32 GB) (2 GB RAM)',
itemImage:'https://images-na.ssl-images-amazon.com/images/I/71awFg9gYfL._SX679_.jpg',
itemPrice:'11400'
}
]
}

function itemsReducer(state=initialData,action)
{
    return state

}

export default itemsReducer
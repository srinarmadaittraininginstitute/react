import React from 'react';
import { useSelector } from 'react-redux';

export default function Navbar() {
const cartobj=useSelector(store=>store.cartReducer)
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/additem">Add Item</a>
            </li>
          </ul>
          <ul className='navbar-nav ml-auto'>
            <li className="nav-item">
              <a href="/cart" className="nav-link">Cart {cartobj.cartitems.length}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
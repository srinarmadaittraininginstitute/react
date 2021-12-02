import React from 'react';
import Navbar from './Navbar';
import Items from './Items';
//import Footer from './Footer';
import Additem from './Additem';
import Cart from './Cart';
import { BrowserRouter, Route,Switch} from 'react-router-dom';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
export default function App(){
	const persistConfig={
		key:'root',
		storage
	}
	const persistedReducer=persistReducer(persistConfig,rootReducer)
	const store=createStore(persistedReducer)
	const persistor=persistStore(store)

    return(
        <div className="App">
		<Provider store={store}>
			<PersistGate persistor={persistor}>
		<Navbar />
        <BrowserRouter>
			<Switch>
				<Route path="/" component={Items} exact />
				<Route path="/additem" component={Additem} />
				<Route path="/cart" component={Cart} />
			</Switch>
		</BrowserRouter>
		</PersistGate>
		</Provider>
        </div>
    )
}

//npm i react-router-dom redux react-redux bootstrap redux-persist

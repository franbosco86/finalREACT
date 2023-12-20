import React from 'react'
import { Cart, Products } from '../../components'
// import { CartContextProvider } from '../context/CartContext'
// import { FirebaseContextProvider } from '../context/FirebaseContext'
import { FirebaseContext } from '../../context/FirebaseContext'

function Home() {

    return (
        <>
            <Products />
            <Cart />
        </>

    )
}

export default Home
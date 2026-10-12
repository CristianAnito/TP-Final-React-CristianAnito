import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartView } from './components/Cart/CartView'
import './App.css'

function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/cart" element={<CartView />} />
                    <Route path="/games/:id" element={<ItemDetailContainer />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App


import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom"
import Item from "./components/Item"
import Text from "./components/Text"
import { Provider } from "react-redux"
import store from "./store/store"

const App = () => {

    const personaAdmin = {
        nombre: "Kito Gonzalez",
        rol: "Admin"
    }

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <NavBar />
                <Text />
                <Main persona={personaAdmin} />
                <Footer />
                <ToastContainer />
            </BrowserRouter>
        </Provider>
    )

}
export default App


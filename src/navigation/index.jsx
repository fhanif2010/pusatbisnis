
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, Login } from '../pages/index'
import Navbar from "../components/navbar";

const Navigation = () => {
    return (
        <>
        <Navbar />
        <Router>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/login" Component={Login} />
            </Routes>
        </Router>
        </>
    )
}

export default Navigation;
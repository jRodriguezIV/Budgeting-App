import { useNavigate } from "react-router-dom"
import './NavBar.css'

export default function NavBar() {
    const navigate = useNavigate()

    return (
        <div className="navBar">
            <div className="navBarText">

                <p className="navIcon" onClick={() => navigate("/")}>Budget App</p>

                <p className="newTransaction" onClick={() => navigate("/new")}>New Transaction</p>
            </div>
        </div>  
    )
}
import { useNavigate } from "react-router-dom"

const Logout = ()=>{
    const history = useNavigate()
    const logoutHandler = ()=>{
        window.localStorage.removeItem("email")
        history("/")
    }
    return(
        <div className="text-right">

            <button className="btn btn-warning float-right me-4" onClick={logoutHandler}>Logout</button>
        </div>
        
    )
}

export default Logout
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Register = ()=>{
    
    const [userName, setUserName] = useState('');
    const userNameInputHandler = (event)=>{
        setUserName(event.target.value)
    }
    
    const [userEmail, setUserEmail] = useState('')
    const userEmailHandler =(event)=>{
        setUserEmail(event.target.value)
    }
    
    const [userPassword, setPassword] = useState('')
    const userPasswordHandler = (event)=>{
        setPassword(event.target.value)
    }

    
    const history = useNavigate()
    const formSubmitHandler = (event)=>{
        event.preventDefault();

        const userData = {userName,userEmail, userPassword}      
        fetch("http://localhost:8000/userData",
        {
            method : "POST",
            headers : {
                'Content-Type' : "application/json"
            },
            body : JSON.stringify(userData)
        })
        .then((response)=>{
            if(response.ok){
                alert("Registration is successful!!")
                window.location.reload();
            }
            else{
                throw new Error("Something went wrong")
            }
            
        }).catch(error=>{
            console.log(error)
        })

        history("/")
    }
    return(
        <div className="w-25 mx-auto my-5 bg-light p-5">
            <form method='post' onSubmit={formSubmitHandler}>
                <h1 className="h3 mb-3 fw-normal text-center">Please register here</h1>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Enter Your Name"
                        onChange={userNameInputHandler}
                        required
                    />
                    <label htmlFor="floatingInput">User name</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={userEmailHandler}
                        required
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control "
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={userPasswordHandler}
                        required
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="text-center mb-3">
                    <button className="w-50 btn btn-lg btn-primary" type='submit'>
                        Register
                    </button>
                </div>
                <p>Already have an account?</p>
                
                <Link to="/">Sign in</Link>
                  
            </form>
      </div>
    )
}

export default Register
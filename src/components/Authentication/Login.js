import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

    const [userEmail, setUserEmail] = useState()
    const userEmailHandler =(event)=>{
        setUserEmail(event.target.value)
    }
    
    const [userPassword, setPassword] = useState()
    const userPasswordHandler = (event)=>{
        setPassword(event.target.value)
    }
    
    
    const history = useNavigate()
    
    const formSubmitHandler = (event)=>{

        event.preventDefault();

        
        fetch("http://localhost:8000/userData")
        .then((response)=>{
            if(!response.ok){
                throw new Error('Something went wwrong')
            }
            response.json()
            .then((userData)=>{
                let flag = 0
                userData.forEach((data)=>{
                    if(data["userEmail"]===userEmail && data['userPassword'] === userPassword){
                        flag = 1
                    }
                   

                })
                if(flag===1){
                    localStorage.setItem("email",userEmail)
                    history('/dashboard')
                    window.location.reload()
                }
                else{
                    alert('Invalid credentials')
                }
            })
            
        })

    }
    
    return (
        <div className="w-25 m-auto my-5 bg-light p-3">
            <form method="post" onSubmit={formSubmitHandler}>
                <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
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
                    <button className="w-50 btn btn-lg btn-primary " type="submit" >
                        Sign in
                    </button>
                </div>
                <p>Don't have account?</p>
                <Link to="/register">Sign up</Link>
            </form>
        </div>
  );
};

export default Login;

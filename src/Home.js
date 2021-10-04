import React, {useState} from "react"
import { Redirect } from "react-router"
import { Route } from "react-router-dom"
import "./Home.css"
import { InputCards } from "./components/InputCards"
import { PostList } from "./components/PostList"
import { Login } from "./Login"
import { Register } from "./Register"

export const Home = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("user") !== null);

    const setAuthUser = (user) => {
      sessionStorage.setItem("user", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("user") !== null)
    }

    let login;
    
        if(isAuthenticated) {
            login = <>
                <header>
                    <h1>Brady's Journal</h1>
                </header>
                <InputCards /> 
                <PostList />
                </>
        }else {
            login = <>
                <Redirect to="/login" />
            </>
        }
    

    return (
        <>
        
        {login}


        <Route path="/login">
            <Login setAuthUser={setAuthUser} />
        </Route>

        <Route path="/register">
            <Register setAuthUser={setAuthUser} />
        </Route>
        </>

    )
}

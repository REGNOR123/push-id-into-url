import React from "react";
import './App.css'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import User from "./User";
function App()
{
    let users=[
        {name:"Amit",id:1, Email:"amit@123"},
        {name:"Raja",id:2, Email:"raja@123"},
        {name:"Aryan",id:3, Email:"aryan@123"},
        {name:"Alok",id:4, Email:"alok@123"}
        ]
    return(
        <>
        <h1>This is functional component</h1>
        <Router>
            
        {
            users.map((item)=>
                <>
                <Link to={"/User/"+item.id+"/"+item.name}>
                <h5>{item.name}</h5>
                </Link>
                </>
                )
        }

        <Route path="/user/:id/:name"><User/></Route>

        </Router>
        </>
    );
}
export default App
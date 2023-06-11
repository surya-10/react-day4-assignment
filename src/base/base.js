import React, { Children } from "react";
import { useNavigate } from "react-router-dom";
function Base({title, description, children}){

    let navigate = useNavigate("");
    return (
        <div className="base-div">
            <div className="nav">
                <h2>Students Data</h2>
                <div className="btns">
                    <button onClick={()=>navigate("/")}>Dashboard</button>
                    <button onClick={()=>navigate("/home")}>Students</button>
                    <button onClick={()=>navigate("/create-user")}>Add Student</button>
                </div>
            </div>
            <div className="main">
                <div className="child-div">
                <h3 className="title">{title}</h3>
                <p className="para">{description}</p>
                </div>
                <div className="child">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Base;
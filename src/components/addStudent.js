import { useState } from "react";
import Base from "../base/base";
import { useNavigate } from "react-router-dom";

function AddStudent({student, setStudent}){
    let navigate = useNavigate("");
    let [studId, setStudId] = useState("");
    let [name, setName] = useState("");
    let [gender, setGender] = useState("");
    let [age, setAge] = useState("");
    let [city, setCity] = useState("");
    let [education, setEducation] = useState("");
    let [college, setCollege] = useState("");
    console.log(name)

    function createNewStud(){
        let obj = {
            name,
            gender,
            age,
            city,
            education,
            id:studId,
            college
        }
        setStudent([...student, obj]);
        setStudId("");
        setName("");
        setAge("");
        setEducation("");
        setCity("");
        setGender("");
        setCollege("");
        navigate("/home")

    }
    return (
        <Base
        title={"Create new data"}>
        <div className="add-stud">
            
            <h4>Please fill below details to add new data</h4>
            <div className="form">
                <input type="text" placeholder="Enter your name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input type="text" placeholder="Enter your education"
                value={education}
                onChange={(e)=>setEducation(e.target.value)}/>
                <input type="text" placeholder="Enter your city"
                value={city}
                onChange={(e)=>setCity(e.target.value)}/>
                <input type="text" placeholder="Enter your gender"
                value={gender}
                onChange={(e)=>setGender(e.target.value)}/>
                <input type="number" placeholder="Enter your age"
                value={age}
                onChange={(e)=>setAge(e.target.value)}/>
                <input type="number" placeholder="Enter your ID"
                value={studId}
                onChange={(e)=>setStudId(e.target.value)}/>
                <input type="text" placeholder="Enter your college name"
                value={college}
                onChange={(e)=>setCollege(e.target.value)}
                />
            </div>
            <button onClick={createNewStud}>Create</button>
            
        </div>
        </Base>
    )
}
export default AddStudent;
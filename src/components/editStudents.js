import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Base from "../base/base";

function EditStudent({student, setStudent}){
    let {id} = useParams()
    let navigate = useNavigate("")
    let [studId, setStudId] = useState("");
    let [name, setName] = useState("");
    let [gender, setGender] = useState("");
    let [age, setAge] = useState("");
    let [city, setCity] = useState("");
    let [education, setEducation] = useState("");
    let [college, setCollege] = useState("");
    console.log(name)
    console.log(id);

    useEffect(()=>{
        let datas= student.find((val)=>val.id==id);
        if(datas){
        setStudId(datas.id);
        setAge(datas.age);
        setName(datas.name);
        setEducation(datas.education);
        setGender(datas.gender);
        setCity(datas.city);
        setCollege(datas.college)
        }
    }, [id, student])

    function updateData(){
        let ind = student.findIndex((val)=>val.id==id);
        let updated = {
            name,
            age,
            city,
            education,
            gender,
            id:studId,
            college
        }
        
        console.log(ind);
        student[ind]=updated;
        setStudent([...student]);
        navigate("/home")
    }

    return (
        <Base
        title={"Edit data"}>
        <div className="add-stud edit-stud">
            <h4>Please fill below details to update </h4>
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
            <button className="update" onClick={updateData}>Update</button>
        </div>
        </Base>
    )
    
}
export default EditStudent;
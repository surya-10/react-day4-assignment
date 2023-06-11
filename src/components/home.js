import { useState } from "react";
import EditStudent from "./editStudents";
import AddStudent from "./addStudent";
import Base from "../base/base";
import { useNavigate } from "react-router-dom";

function Home({student, setStudent}){
    let navigate = useNavigate("");

    let [editId, setEditId] = useState("");

    function deleteData(id){

        let deleted = student.filter((val)=>val.id!==id);
        setStudent(deleted);
    }
    function sentToEdit(id){
        setEditId(id);
        navigate(`/edit-user/${id}`)

    }
    function viewProfile(id){
      navigate(`/edit-profile/${id}`);
    }
    return (
        <div className="home-div">
        <Base
      title={"Welcome to my page"}
      description={"You can see all registered students data"}>
        {/* <AddStudent
        student={student}
        setStudent={setStudent}/> */}
        {/* <EditStudent
        student={student}
        setStudent={setStudent}
        editId={editId}/> */}
        <div className='students'>
          {student.map((val, ind)=>(
            <div className='stud' key={ind}>
              <h3>{val.name}</h3>
              <p>Gender: {val.gender}</p>
              <p>Education: {val.education}</p>
              <p>Age: {val.age}</p>
              <p>City: {val.city}</p>
              <p>College: {val.college}</p>
              <button className="full-profile" onClick={()=>viewProfile(val.id)}>View profile</button>
              <div className='edit-del'>
                <button onClick={()=>sentToEdit(val.id)} className="add">Edit</button>
                <button onClick={()=>deleteData(val.id)} className="del">Delete</button>
                </div>
              </div>
          ))}
        </div>
        </Base>
        </div>
    )
}
export default Home;
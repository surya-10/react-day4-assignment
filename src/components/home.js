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
              <h4>Gender: {val.gender}</h4>
              <h4>Education: {val.education}</h4>
              <h4>Age: {val.age}</h4>
              <h4>City: {val.city}</h4>
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
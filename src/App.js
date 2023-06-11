import logo from './logo.svg';
import './App.css';
import Base from './base/base';
import { data } from './data/data';
import { useState } from 'react';
import AddStudent from './components/addStudent';
import EditStudent from './components/editStudents';
import Comp from './components/comp';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/home';

function App() {
  let [student, setStudent] = useState(data);
  

 
 
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Comp/>}/>
        <Route path='/home' element={<Home
          student={student}
          setStudent={setStudent}
          />}/>
        <Route path='/create-user' element={<AddStudent
        student={student}
        setStudent={setStudent}/>}/>
        <Route path='edit-user/:id' element={<EditStudent
        student={student}
        setStudent={setStudent}/>}/>

      </Routes>
      {/* <Base
      title={"Welcome to my page"}
      description={"You can all registered students data"}>
        <AddStudent
        student={student}
        setStudent={setStudent}/>
        <EditStudent
        student={student}
        setStudent={setStudent}
        editId={editId}/>
        <div className='students'>
          {student.map((val, ind)=>(
            <div className='stud' key={ind}>
              <h3>{val.name}</h3>
              <h4>Gender: {val.gender}</h4>
              <h4>Education: {val.education}</h4>
              <h4>Age: {val.age}</h4>
              <h4>City: {val.city}</h4>
              <div className='edit-del'>
                <button onClick={()=>setEditId(val.id)}>Edit</button>
                <button onClick={()=>deleteData(val.id)}>Delete</button>
                </div>
              </div>
          ))}
        </div>
        </Base> */}
    </div>
  )
}


export default App;

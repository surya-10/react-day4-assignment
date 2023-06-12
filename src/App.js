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
import Profile from './components/profile';
import Nopage from './components/nopage';

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
        <Route path='edit-profile/:id' element={<Profile
        student={student}
        setStudent={setStudent}
        />}/>
        <Route path='*' element={<Nopage/>}/>
      </Routes>
      
    </div>
  )
}


export default App;

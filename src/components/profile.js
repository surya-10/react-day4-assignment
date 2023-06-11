import { useNavigate, useParams } from "react-router-dom";

function Profile({student, setStudent}){
    let navigate = useNavigate("");
    let {id} = useParams();

    let data = student.find((val)=>val.id==id);
    console.log(data);

    function goToHome(){
        navigate("/home");
    }
    return (
        <div className="profile">
            <div className="student-profile" key={data.id}>
                <button onClick={goToHome}><i className="fa-sharp fa-solid fa-arrow-left arrow"></i></button>
                <div className="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajDW83phQCh31Jd2x3NXQJn8xQjyARdxGlEt6a7iUUznDp0nQuSxxnagaGEjoiYHqpaA&usqp=CAU"/>
                </div>
                <div className="details">
                    <h3>Name: {data.name}</h3>
                    <p>Age: {data.age}</p>
                    <p>Gender: {data.gender}</p>
                    <p>Education: {data.education}</p>
                    <p>College: {data.college}</p>
                    <p>Passed out: {data.year}</p>
                    
                    <p>City: {data.city}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;
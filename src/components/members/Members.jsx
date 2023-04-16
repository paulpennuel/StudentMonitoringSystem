import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Collection() {
  let navigate = useNavigate();
  const [newStudent, setNewStudent] = useState({
    studentName: "",
    className: "",
    gender: "",
    dob: " "
  });

  const { studentName, className, dob } = newStudent;

  const onInputChange = (event) => {
    setNewStudent({
      ...newStudent,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let successString = await axios.post("http://localhost:8080/student", newStudent)
                .catch(function (error) {
                  if (error.response){
                    Object.values(error.response.data).forEach(val => toast(val));
                  }
                  else if (error.request){
                    Object.values(error.request.data).forEach(val => toast(val));
                  }
                })
    Object.values(successString.data).forEach(val => toast(val));
    navigate("/"); 
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4 form">Register Student</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="studentName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="enter student name"
                name="studentName"
                value={studentName}
                onChange={(e) => onInputChange(e)}
              />
              <label htmlFor="className" className="form-label">
                class
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="enter class name"
                name="className"
                value={className}
                onChange={(e) => onInputChange(e)}
              />
              <label htmlFor="gender" className="form-label">
                gender
              </label>
              <select
                name="gender"
                id="gender"
                className="form-control"
                onChange={(e) => onInputChange(e)}
              >
                <option value=""></option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>

              <br />
              <label htmlFor="dob" className="form-label">
                date of birth
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="enter date of birth"
                name="dob"
                value={dob}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary mx-2">
              submit
            </button>
            <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
              cancel
            </Link>
          </form>
        </div>
      </div>
      
    </div>
  );
}

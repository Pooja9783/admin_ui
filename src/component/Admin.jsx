import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
const axios = require("axios");

export default function Admin() {
  const [value, setValue] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
      .then((res) => {
        console.log(res);
        setValue(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container my-3">
      <input
        className="form-control"
        placeholder="Search by Name, Email and Role...."
        value={search}
      />
      <table className="table">
        <thead>
          <tr>
            <th>
              {" "}
              <input
                className="form-check-input "
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Eamil</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {value.map((e, i) => {
            return (
              <tr key={i}>
                <td>
                  {" "}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                </td>

                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.role}</td>
                <td className="icon-margin">
                  <i className="bi bi-pencil-square"></i>
                  <i className="bi bi-archive "></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-evenly">
        <button type="button" className="btn btn-danger">
          Delete Selected
        </button>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

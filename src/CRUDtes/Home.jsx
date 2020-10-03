import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import AddEditUser from './Modal/AddEditUser'
import swal from 'sweetalert'
import {config} from '../config'

const Users = (props) => {
  const [data, setData] = React.useState([]);
  const [per_page, setPer_page] = React.useState(10);
  const [current_page, setCurrent_page] = React.useState(1);
  const [total, setTotal] = React.useState("");
  const [cari, setCari] = React.useState("");
  const [forName, setForName] = React.useState("");
  const [ userId, setUserId] = React.useState("");
  const [updateUser, setUpdateUser] = React.useState("add")
  // console.log();

  // get(per_page, current_page)
  // onNext = () => {};

  // onPrevious = () => {};

  // onPage = (e) => {};

  // onSelect = (e) => {};

  // onInput = (e) => {};

  // onChangeDatabase = () => {};

  // onSearch = (e) => {
  //   e.preventDefault();
  // };

  return(
    <Fragment>
      <div className="container mt-3 mb-3">
        <h2 className="text-center font-weight-bold mb-3">Latihan CRUD</h2>
        <div className="row">
          {/* Add User */}
          <div className="row">
            <div className="col-4">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                <i className="fas fa-plus-circle"></i>&nbsp; Create new user
              </button>
            </div>
            <div className="row mt-2">
              <div className="col-4">
                <button className="btn btn-success">Refresh Page</button>
              </div>
            </div>
          </div>
          {/* seacrh */}
          <div className="row justify-content-center">
            
          </div>
          <div className="row justify-content-end">
            <div className="col-5">
              <form>
                <input name="cari" id="cari" className="btn border" type="text" placeholder="Search.." autoComplete="off" aria-discribedby="cari" />
              </form>
            </div>
            <div className="col-2">
              <select className="form-select">
                <option className="option" value="5">5</option>
                <option className="option" value="10">10</option>
                <option className="option" value="25">25</option>
                <option className="option" value="50">50</option>
              </select>
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="roe d-flex justify-content-center">
          <div className="col-11 mt-3">
          <table className="table table-bordered table-responsive text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Username</th>
              <th>Email</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Registered</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <th scope="row" className="text-center"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                    Update
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger ml-4">
                    Delete
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
          </div>
        </div>
        {/* PrevNext */}
        <div className="d-flex float-right">
          <nav>
            <ul className="pagination">
              <li className="page-item"><button className="page-link"><i className="fas fa-chevron-left fa-xs"></i> Previous</button></li>
              <li className="page-item"><button className="page-link">Next <i className="fas fa-chevron-right fa-xs"></i></button></li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Modals */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <AddEditUser />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Users;
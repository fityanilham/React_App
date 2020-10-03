import Axios from 'axios';
import React from 'react';
import {config} from '../../config'
import {Link} from 'react-router-dom'

const Home = () => {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    console.log("Effect berhasil di panggil");
    getList();
  }, [])

  const getList = async() => {
    try{
      let response = await Axios.get(`${config.api_host}/users?page=1`);
      setList(response.data.data);
      console.log(response.data.data);
    } catch{}
  }

  return (
    <React.Fragment>
      <div className="container-fluid">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Avatar</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((list, index) =>
              <tr key={list.id}>
                <td>{index +1}</td>
                <td>
                  <img src={list.avatar} alt="" className="rounded-circle" height="40" />
                </td>
                <td>{list.email}</td>
                <td>{list.first_name}</td>
                <td>{list.last_name}</td>
                <td>
                  <Link to={`/Detailuser/${list.id}`}>
                    <p className="btn btn-outline-info border">Detail</p>
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default Home

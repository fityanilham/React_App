import Axios from 'axios';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { config } from '../../config'

const Detailuser = (props) => {
  let {id} = useParams();
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    getUser();
  }, [id]);

  const getUser = async () => {
    try {
      console.log(id);
      let response = await Axios.get(`${config.api_host}/users/${id}`);
      setUser(response.data.data);
    } 
    catch {
      props.history.push("/UserNotFound")
      // console.log("error");
    }
  };

  const nextHandle = () => {
    let nextId = parseInt(id, 10) +1;
    props.history.push(`/Detailuser/${nextId}`)
    // console.log(nextId);
  };

  const prevHandle = () => {
    let prevId = parseInt(id, 9) -1;
    props.history.push(`/Detailuser/${prevId}`)
    // console.log(prevId);
  };

  return (
    <React.Fragment>
      <div className="container">
        <img className="rounded-circle" src={user.avatar} alt="" />
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <h4>{user.email}</h4>
        <div>
            <button disabled={id < 2} className="btn btn-outline-warning mr-3" onClick={prevHandle}>Previous</button>
            <button className="btn btn-outline-success mr-3" onClick={nextHandle}>Next</button>
        </div>
        <Link to="/">
          <button className="btn btn-primary mt-3">Back</button>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Detailuser

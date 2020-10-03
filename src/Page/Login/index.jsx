import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from '../../Property/Form'

const Login = () => {
  return (
    <React.Fragment>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-5">
         <div className="card">
           <div className="card-header">
             <h4>Login</h4>
           </div>
           <div className="card-body">
            <form>
              <Input label={"Email Adress"} className="form-control" />
              <Input label={"Password"} className="form-control" />
              <Button label={"Login"} className="form-control btn btn-success" />
            </form>
            <Link to="/Register">register</Link>
           </div>
         </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login

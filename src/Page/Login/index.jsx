import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from '../../Property/Form'

const Login = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-8">
          <div className="col-4">
            <h4>Login</h4>
            <form>
              <Input label={"Email Adress"} className="form-control" />
              <Input label={"Password"} className="form-control" />
              <Button label={"Submit"} className="form-control btn btn-success" />
            </form>
            <Link to="/Register">register</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login

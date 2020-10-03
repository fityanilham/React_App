import React from 'react'

export const Input = ({ label, validasi, ...rest }) => {
  return (
    <React.Fragment>
      <div className="mb-3 d-flext justify-content -center">
        <label for="exampleInputEmail1" className="form-label">
          {label}
        </label>
        <input {...rest} />
        <div id="emailHelp" className="form-text">
          {validasi}
        </div>
      </div>
    </React.Fragment>
  )
}

export const Button = ({ label, ...rest}) => {
  return (
    <div>
      <button {...rest}>
        {label}
      </button>
    </div>
  )
}
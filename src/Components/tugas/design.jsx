import React from 'react'

class Design extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name : 'Website Design Package',
      designPackages : [
        {category : 'Website Home Page Design (PSD)', features : 'Upto 3 design concepts and Unlimited revisions', us$ : '$90 USD'},
        {category : 'starter package', features : 'Upto 3 Static HTML pages', us$ : '$190 USD'},
        {category : 'Additional Webpages', features : 'Static HTML output', us$ : '$10 USD each'},
        {category : 'Wordpress Theme', features : 'Design and Conversion', us$ : '$120 USD'},
        {category : 'Joomla Template', features : 'Design and Conversion', us$ : '$120 USD'},
      ]
    }
  }
  render(){
    return(
      <div>
        <h3 className="text-primary">Price List</h3>
        <div className="row">
          <div className="table table-bordered bg-primary text-white">
            <thead>
              <tr>
                <th>Category</th>
                <th>features</th>
                <th>US$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <th>{this.state.designPackages}</th>
              </tr>
            </tbody>
          </div>
        </div>  
      </div>
    )
  }
}
export default Design
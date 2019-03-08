import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Page404 extends Component {
  componentDidMount(props){
  }
  render(){
    return(
      <div className="py-5 my-5 text-center">
        <div className="py-5 my-5 text-center">
          <h1 className="text-uppercase">Page 404</h1>
          <p>Click here for back to HomePage</p>
          <Link  to={{ pathname: "/"}}  className=" text-capitalize btn btn-sm btn-primary">
          <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon> Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }
}

export default Page404;
import React, { Component } from 'react';
import {noImageUrl} from '../components/manage-assets' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';



const listRelated = (self)=>{
  return(
    self.state.related.map((data,index)=>
    <div className="media" key={index}>
    <img src={noImageUrl} width="50" className="mr-3" alt="..."/>
    <div className="media-body pb-3">
      <div className="row list-related">
        <div className="col-md-6">
          <NavLink to="/profile" className="text-dark">
            <h6 className="mb-0 font-weight-bold">{data.name}</h6>
            <span className="position d-block text-sm">{data.position}</span>
          </NavLink>
        </div>  
        <div className="col-md-6">
          <button className="btn btn-sm btn-light w-100">
          <FontAwesomeIcon icon="plus"/> Follow
          </button>
        </div>
      </div>
      </div>
      </div>
    )
  );
}

class FollowRelated extends Component {
  constructor(props,{ location }){
    super(props);
    this.state = {
      related: relatedData
    }
  }
  render(){
    return(
      <div className="card follow-related shadow-sm">
       <div className="card-body">
        <h6 className="mb-3">
          Add to your Feed
        </h6>
            {listRelated(this)}
        <NavLink to="/" className="font-weight-bold">View All Recommendation</NavLink>
       </div>
      </div>
    )
  }
} 

export default FollowRelated;

const relatedData = [
  {
    name:"Max Levich",
    position:"CO-Founder ABC Technology"
  },
  {
    name:"Jesica Alba",
    position:"Founder The Honest Creative"
  },
  {
    name:"Simon",
    position:"CO-Founder start with"
  },
]
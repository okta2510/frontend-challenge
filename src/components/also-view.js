import React, { Component } from 'react';
import {noImageUrl} from '../components/manage-assets' 
import {NavLink} from 'react-router-dom';



const listRelated = (self)=>{
  return(
    self.state.related.map((data,index)=>
    <div className="media" key={index}>
    <img src={noImageUrl} width="50" className="mr-3 rounded-circle" alt="..."/>
    <div className="media-body pb-3">
      <div className="mb-2 list-related">
        <NavLink to="/profile" className="text-dark">
          <h6 className="mb-0 font-weight-bold">{data.name} <span>{data.pos}</span></h6>
          <span className="position d-block text-sm">{data.position}</span>
        </NavLink>
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
      <div className="card follow-related border-0 bg-transparent">
       <div className="card-body p-0">
        <h6 className="mb-3 text-capitalize">
          People also view
        </h6>
            {listRelated(this)}
       </div>
      </div>
    )
  }
} 

export default FollowRelated;

const relatedData = [
  {
    name:"Max Levich",
    position:"CO-Founder ABC Technology",
    pos:"1st"
  },
  {
    name:"Jesica Alba",
    position:"Founder The Honest Creative",
    pos:"2nd"
  },
  {
    name:"Simon",
    position:"CO-Founder start with",
    pos:"1st"
  },
  {
    name:"Jesica Alba",
    position:"Founder The Honest Creative",
    pos:"2nd"
  },
  {
    name:"Simon",
    position:"CO-Founder start with",
    pos:"1st"
  },
]
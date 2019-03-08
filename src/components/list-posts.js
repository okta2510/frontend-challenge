import React, { Component } from 'react';
import {noImageUrl} from '../components/manage-assets' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const relatedData = [
  {
    name:"Max Levich",
    position:"CO-Founder ABC Technology",
    title:"Artificial intelligence (AI), dari teknologi abstrak hingga jadi 'Otak' bisnis",
    source:"oktagon.co.id"
  },
  {
    name:"Jesica Alba",
    position:"Founder The Honest Creative",
    title:"Artificial intelligence (AI), dari teknologi abstrak hingga jadi 'Otak' bisnis",
    source:"oktagon.co.id"
    
  },
  {
    name:"Simon",
    position:"CO-Founder start with",
    title:"Artificial intelligence (AI), dari teknologi abstrak hingga jadi 'Otak' bisnis",
    source:"oktagon.co.id"
  },
]

const listRelated = (self)=>{
  return(
    self.state.related.map((data,index)=>
      <div className="card mb-3" key={index}>
        <div className="card-body py-3">
          
          <ul className="list-group list-group-flush">
            <li className="list-group-item px-0 pt-0">
              <div className="head-section">
                
                <div className="media">
                  <img src={noImageUrl} width="50" className="mr-3" alt="..."/>
                  <div className="media-body pb-3">
                    <div className="row list-related">
                      <div className="col-md-6">
                        <h6 className="mb-0 font-weight-bold">{data.name}</h6>
                        <span className="text-sm d-block">{data.position}</span>
                        <span className="text-sm d-block">1d</span>
                      </div>  
                      <div className="col-md-6">
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="content-section border mb-2 py-3">
                <img alt="" src={noImageUrl} height="150" className="w-100 mx-auto"/>
                <div className="px-3 pt-2">
                <h5 className="mb-0">{data.title}</h5>
                <p className="mb-0">{data.source}</p>
                </div>
              </div>
              <span className="d-block text-sm text-muted">
                1 Like
              </span>
            </li>
            <li className="list-group-item px-0 pb-0">
              
              <button className="btn mr-2 mb-2 btn-light">
                <FontAwesomeIcon icon="thumbs-up" className="mr-1 text-capitalize"/> like
              </button>
              <button className="btn mr-2 mb-2 btn-light">
                <FontAwesomeIcon icon="comment-alt" className="mr-1 text-capitalize"/> comment
              </button>
              <button className="btn mr-2 mb-2 btn-light">
                <FontAwesomeIcon icon="share" className="mr-1 text-capitalize"/> share
              </button>
            </li>
          </ul>
          
        </div>
      </div>
    )
  );
}

class ListPosts extends Component {
  constructor(props,{ location }){
    super(props);
    this.state = {
      related: relatedData
    }
  }
  render(){
    return(
      <div className="list-posts">
      {listRelated(this)}
      </div>
    )
  }
} 

export default ListPosts;
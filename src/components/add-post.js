import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddPost extends Component {
  handleSubmit(event){
    event.preventDefault();
    console.log("form submitted");
  }
  render(){
    return(
      <div className="add-post card shadow-sm mb-4">
        <div className="card-body pb-3">
          <form onSubmit={this.handleSubmit}>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item p-0">
                <div className="form-group mb-3">
                  <textarea rows="3" cols="3" className="form-control">
                  
                  </textarea>
                </div>
              </li>
              <li className="list-group-item px-0 pb-0">
                <div className="row">
                  <div className="col-9">
                    <button className="btn mr-2 mb-2 btn-sm btn-light">
                     <FontAwesomeIcon icon="pencil-alt" className="mr-1"/> Write an article
                    </button>
                    <button className="btn mr-2 mb-2 btn-sm btn-light">
                    <FontAwesomeIcon icon="camera" className="mr-1"/> Images
                    </button>
                    <button className="btn mr-2 mb-2 btn-sm btn-light">
                    <FontAwesomeIcon icon="video" className="mr-1"/> Video
                    </button>
                  </div>
                  <div className="col-3 text-right">
                    <input type="submit" value="Post" className="btn btn-sm btn-primary px-4" />
                  </div>
                </div>
              </li>
            </ul>
          </form>
          
        </div>
      </div>
    )
  }
} 

export default AddPost;
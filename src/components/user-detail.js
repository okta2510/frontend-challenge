import React, { Component } from 'react';
import {profileUrl,noImageUrl} from '../components/manage-assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class UserDetail extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      name: "hantze sudarma",
      pos:"2nd",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus blandit sapien eget euismod. Suspendisse lacinia, urna mollis commodo tempus, urna massa venenatis sem, vel gravida erat ligula sit amet nisl. Aliquam erat volutpat. Nunc urna nisi, rutrum vitae purus vitae, rutrum sodales arcu. Nullam mattis egestas orci, quis dapibus arcu malesuada eget. Praesent sem dolor, pellentesque ac ligula quis, tempus pellentesque nisi. Vestibulum pharetra, lectus quis semper rhoncus, felis erat ullamcorper purus, blandit efficitur velit felis non sapien. Curabitur ex turpis, pulvinar vitae fermentum tincidunt, dictum ultrices neque.",
      role:"Tech Enthusiast",
      location:"Indonesia",
      showAll:false
    };
  }
  handleShow(){
    console.log(this.state.showAll);
    if(this.state.showAll){
      this.setState({
        showAll:false
      });
    }else{
      this.setState({
        showAll:true
      });
    }
  }
  render(){
      
    return(
      <div className="user-profile user-detail mb-5">
        <div className="card shadow-sm">
          <div className="header-section">
            <div className="profile-img ">
              <img src={profileUrl} alt=""/>
            </div>
          </div>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item border-top-0 pt-0">
              <ul className="list-group list-group-flush ">
                <li className="list-group-item px-0">
                  <div className="row">
                    <div className="col-7">
                      <span className="d-block text-capitalize font-weight-bold text-dark h6 mb-0">
                      {this.state.name}
                      </span>
                      <span className="d-block text-capitalize text-sm mb-1">
                        {this.state.role}
                      </span>
                      <span className="d-block text-capitalize text-sm text-black-50">
                        {this.state.location}
                      </span>
                      <div className="pt-4 d-block w-100">
                        <button className="btn btn-primary btn-sm mx-1 px-2 font-weight-bold">
                        Connect
                      </button>
                      <button className="btn btn-outline-primary btn-sm mx-1 px-2 font-weight-bold">
                        InMail
                      </button>
                      <button className="btn btn-outline-secondary btn-sm mx-1 px-2 font-weight-bold">
                        More...
                      </button>
                      </div>
                    </div>
                    <div className="col-5">
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <div className="media">
                            <img src={noImageUrl} className="mr-3" width="30" alt="..."/>
                            <div className="media-body align-self-center">
                              <p className="mt-0 mb-0 text-sm font-weight-bold">Binus International University</p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="media">
                            <FontAwesomeIcon icon="address-book" className="fa-img img mr-3"/>
                            <div className="media-body align-self-center">
                              <p className="mt-0 mb-0 text-sm font-weight-bold">See Contact Info</p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="media">
                            <FontAwesomeIcon icon="user-friends" className="fa-img img mr-3"/>
                            <div className="media-body align-self-center">
                              <p className="mt-0 mb-0 text-sm">500+ connections</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="list-group-item px-0">
                  <article>
                    <p className={this.state.showAll ? "show-detail mb-0 open":"show-detail mb-0"} >
                      {this.state.desc}
                    </p>
                  </article>
                </li>
              </ul>
            </li>
          </ul>
          <div className="card-footer text-center text-muted text-sm px-2 bg-white">
            
              <button className="btn btn-link text-primary font-weight-bold btn-sm" onClick={this.handleShow}>
              {this.state.showAll ? "Hide":"Show More"} 
              <FontAwesomeIcon className="ml-2" icon= {this.state.showAll ? "angle-up":"angle-down"} />
            </button>
          </div>
        </div>
      </div>
    )
  }
} 

export default UserDetail;
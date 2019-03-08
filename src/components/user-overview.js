import React, { Component } from 'react';
import {profileUrl} from '../components/manage-assets'


class UserOverview extends Component {
  render(){
    return(
      <div className="user-profile">
        <div className="card shadow-sm">
          <div className="header-section">
            <div className="profile-img mx-auto">
              <img src={profileUrl} alt=""/>
            </div>
          </div>
          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item px-2 pt-0 border-top-0">
              <span className="d-block text-capitalize font-weight-bold text-dark h6 mb-0">
              christian anggara
              </span>
              <span className="d-block text-capitalize text-sm">
              Tech Enthusiast
              </span>
            </li>
            <li className="list-group-item px-3">
              <ul className="list-group list-group-flush text-sm ">
                <li className="list-group-item px-0">
                  <span className="d-block h4 mb-1 text-info">
                    80
                  </span>
                  <span className="d-block">
                    Who's viewed your profile
                  </span>
                </li>
                <li className="list-group-item px-0">
                  <span className="d-block h4 mb-1 text-info">
                    1,113
                  </span>
                  <span className="d-block">
                    Connections
                  </span>
                  <span className="d-block font-weight-bold text-dark">
                    Manage your networks
                  </span>
                </li>
              </ul>
            </li>
          </ul>
          <div className="card-footer text-center text-muted text-sm px-2">
            <span className="d-block">Access Exclusive tools & insights</span>
            <span className="font-weight-bold text-dark d-block">Free Upgrade to Premium</span>
          </div>
        </div>
      </div>
    )
  }
} 

export default UserOverview;
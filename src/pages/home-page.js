import React, { Component } from 'react';
import UserOverview from '../components/user-overview'
import ListPosts from '../components/list-posts'
import AddPost from '../components/add-post'
import FollowRelated from '../components/follow-related'

class HomePage extends Component {
  render(){
    return(
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-3 col-lg-2">
            <UserOverview />
          </div>
          <div className="col-md-5 col-lg-6">
            <AddPost/>
            <ListPosts/>
          </div>
          <div className="col-md-4 col-lg-4">
            <FollowRelated/>
          </div>
        </div>
      </div>
    )
  }
} 

export default HomePage;
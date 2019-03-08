import React,{Component} from 'react';
import FollowRelated from '../components/also-view'
import UserDetail from '../components/user-detail';



class profilePage extends Component {
  render(){
    return(
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-8">
            <UserDetail/>
          </div>
          <div className="col-md-4">
            <FollowRelated/>
          </div>
        </div>
      </div>
    )
  }
}

export default profilePage;
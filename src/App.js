import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import HomePage from './pages/home-page';
import ProfilePage from './pages/profile-page';
import Page404 from './pages/404';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft,faHome, faUserFriends,faSuitcase,faComments,faBell,faUser,faSearch,faAngleDown,faAngleUp, faPlus,faPencilAlt,faVideo,faCamera,faShare,faThumbsUp,faCommentAlt,faNewspaper,faChevronDown,faAddressBook } from '@fortawesome/free-solid-svg-icons'
import TopNav from './components/navigation-menu';


library.add(faArrowLeft,faHome, faUserFriends,faSuitcase,faComments,faBell,faUser,faSearch,faAngleDown,faAngleUp, faPlus,faPencilAlt,faVideo,faCamera,faShare,faThumbsUp,faCommentAlt,faNewspaper,faChevronDown,faAddressBook)

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <TopNav/>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/profile" component={ProfilePage}/>
            <Route  component={Page404}/>
          </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

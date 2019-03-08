import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar,Nav,FormControl,Form,InputGroup } from 'react-bootstrap';
import {logoUrl,profileUrl,noImageUrl} from "../components/manage-assets"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const categories = (self)=>{
  return(
    self.state.related.map((data,index)=>
      <div key={index}>
        <span className="d-block py-2">
          <FontAwesomeIcon icon={data.name} className="mr-2 text-primary"/> {data.text}
        </span>
      </div>
    ))
}


const recents = (self)=>{
  return(
    self.state.recents.map((data,index)=>
    <div className="media mb-2" key={index}>
      <img src={noImageUrl} width="50" className="mr-3 rounded-circle " alt="..."/>
      <div className="media-body align-self-center">
        <div className="row list-related">
          <div className="col-md-6">
           <NavLink to="/profile" className="text-dark">
            <h6 className="mb-0 font-weight-bold">{data.name}</h6>
           </NavLink>
          </div>
        </div>
        </div>
      </div>
    ))
}

class TopNav extends Component {
  constructor(props,{ location }){
    super(props);

    this.clearRecents = this.clearRecents.bind(this);
    this.state = {
      related: [{
        name:"user-friends",
        text:"People"
      },{
        name:"suitcase",
        text:"Jobs"
      },{
        name:"newspaper",
        text:"Post"
      }],
      recents:[
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
        {
          name:"Jesica Alba",
          position:"Founder The Honest Creative"
        },
        {
          name:"Simon",
          position:"CO-Founder start with"
        },
      ]
    }
  }
  handleSearch(event){
    event.preventDefault();
    console.log();
  }
  showSearch(){
    let result = document.getElementsByClassName("search-result-component");
    result[0].style.display = "initial";
  }
  hideSearch(){
    let result = document.getElementsByClassName("search-result-component");
    result[0].style.display = "none";
  }
  clearRecents(){
    this.setState({
      recents:[]
    })
  }
  render(){
    let checkList = ()=>{
      if(this.state.recents.length > 0 ){
        return(recents(this));
      }else{
        return (
          <small className="text-black-50">Recent data is empty</small>
        )
      }
    }
    return (
      <Navbar bg="dark" variant="dark" className="" expand="lg">
        <Navbar.Brand href="/">
          <img alt="" src={logoUrl} width="40"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" onMouseLeave={this.hideSearch}>
          <Form onSubmit={this.handleSearch}>
            <InputGroup className="flex-nowrap w-100">
              <div className="input-group-prepend ">
                <span className="input-group-text bg-white border-0" id="addon-wrapping">
                <FontAwesomeIcon icon="search"/></span>
              </div>
              <FormControl
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="basic-addon1"
                className="border-0 pl-0" onClick={this.showSearch}
              />
            </InputGroup>

            <div className="search-result-component card rounded-0 shadow-sm" >
              <div className="card-body px-0">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h6 className="font-weight-bold">
                      Search For
                    </h6>
                    {categories(this)}
                  </li>
                  <li className="list-group-item pb-0">
                    <div className="row">
                    <div className="col-6">
                      <h6 className="font-weight-bold">
                        Recent
                      </h6>
                    </div>
                    <div className="col-6 text-right">
                      <button className="btn btn-link text-black-50 font-weight-bold" onClick={this.clearRecents}>
                    Clear</button>
                    </div>
                    </div>
                      {checkList()}
                  </li>
                </ul>
              </div>
            </div>
          </Form>
          <Nav className="ml-auto text-center">
            <NavLink to="/" className="nav-link text-center">
              <FontAwesomeIcon className="d-inline-block fa" icon="home"/>
              <span className="d-block">
                Home
              </span>
            </NavLink>
            <NavLink className="nav-link text-center" to="#network">
              <FontAwesomeIcon className="d-inline-block fa" icon="user-friends"/>
              <span className="d-block">
                My Network
              </span>
            </NavLink>
            <NavLink className="nav-link text-center" to="#job">
              <FontAwesomeIcon className="d-inline-block fa" icon="suitcase"/>
              <span className="d-block">
                Jobs
              </span>
            </NavLink>
            <NavLink className="nav-link text-center" to="#message">
              <FontAwesomeIcon className="d-inline-block fa" icon="comments"/>
              <span className="d-block">
              Messaging
              </span>
            </NavLink>
            <NavLink className="nav-link text-center" to="#notif">
              <FontAwesomeIcon className="d-inline-block fa" icon="bell"/>
              <span className="d-block">
                Notifications
              </span>
            </NavLink>
            <NavLink className="nav-link text-center" to="#me">
              <span className="profile-photo">
                <img alt="" src={profileUrl}/>
              </span>
              <span className="d-block">
                Me <FontAwesomeIcon className="fa text-sm" icon="angle-down" />
              </span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNav;
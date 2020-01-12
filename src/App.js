import React from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import { Button, ButtonGroup, Jumbotron } from 'react-bootstrap'
import axios from 'axios'
import Login from './Components/Login'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      signedAs:'',
      records:[]
    }
  }
   handleSignIn = (event)=>{
    //this.props.history.push(`/${event.target.name}`)
    this.setState({signedAs:event.target.name})

  }
  async componentDidMount(){
    let rec = await axios.get('mock_records.json')
    console.log("Rec",rec)
    this.setState({records:rec})
  }


  render(){
    let showLogin = (this.state.signedAs === '')
    return(
      <React.Fragment  className='ui container'>
        <Jumbotron>
      {showLogin ? (
      <div>
        <h3 className="display-3">Sign In As:</h3>
        <ButtonGroup>
        <Button onClick={this.handleSignIn} name="Patient">Patient</Button>
        <Button onClick={this.handleSignIn} name="Doctor">Doctor</Button>
        <Button onClick={this.handleSignIn} name="Admin">Admin</Button>
        </ButtonGroup>
      </div>
      ):
      (
      <Login signedAs={this.state.signedAs} record={this.state.records}/>
      )
  }
  </Jumbotron>
      </React.Fragment>
    )
  }
}

export default withRouter(App);
